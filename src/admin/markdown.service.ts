import { Injectable } from "@nestjs/common";

@Injectable()
export class MarkdownService {

    buildArticle(text: string) : object {
        let regex = new RegExp("^# (.*)");
        let searchTitleRegex = regex.exec(text);
        if (searchTitleRegex == null || searchTitleRegex.length < 2) {
            throw new Error("Title missing");
        }
        let title = searchTitleRegex[1];
        let content = text.replace(regex, "");
        console.log(title)
        return {
            title: title, 
            content: content
        };
    }
}