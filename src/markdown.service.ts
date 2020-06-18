import { Injectable } from "@nestjs/common";
import marked = require('marked');
import yaml = require('yaml');

@Injectable()
export class MarkdownService {

    _splitMeta(text: string) : any {    
        let regex = new RegExp(/<--([^>]*)-->/, 'm');
        var searchMetaRegex = regex.exec(text);
        if (searchMetaRegex != null && searchMetaRegex.length >= 1) {
            let meta = searchMetaRegex[1];
            let content = text.replace(regex, "");
            return {
                meta: yaml.parse(meta),
                content: content
            };
        } else {
            return {
                meta: "",
                content: text
            }
        }
        
    }

    _splitTitle(text: string) : any {
        let regex = new RegExp("^# (.*)", 'm');
        let searchTitleRegex = regex.exec(text);
        if (searchTitleRegex == null || searchTitleRegex.length < 2) {
            throw new Error("Title missing");
        }

        let title = searchTitleRegex[1];
        let content = text.replace(regex, "");
        return {
            title: title,
            content: content
        }
    }

    buildArticle(text: string) : any {
        let splitTitle = this._splitTitle(text);
        let splitMeta = this._splitMeta(splitTitle.content);
        return {
            title: splitTitle.title, 
            content: splitMeta.content,
            imageUrl: splitMeta.meta.image
        };
    }

    formatArticle(article: any) : string {
        let articleMd = "<--\n";
        articleMd += `image:  ${article.imageUrl}\n`;
        articleMd += "-->\n\n"
        articleMd += `# ${article.title}\n`
        articleMd += article.content;
        return articleMd;
    }


    markdownToHtml(text: string) : object {
        return marked(text);

    }
}