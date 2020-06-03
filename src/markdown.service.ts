import { Injectable } from "@nestjs/common";
import marked = require('marked');

@Injectable()
export class MarkdownService {


    buildArticleObject(text: string) : object {
        let regex = new RegExp("^# (.*)");
        let searchTitleRegex = regex.exec(text);
        if (searchTitleRegex == null || searchTitleRegex.length < 2) {
            throw new Error("Title missing");
        }

        let title = searchTitleRegex[1];
        let content = text.replace(regex, "");
        return {
            title: title, 
            content: content
        };
    }


    markdownToHtml(text: string) : object {
        return marked(text);

    }
}