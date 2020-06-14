import { Controller, Get, Param, Req, Query, Render, HttpException, HttpStatus } from "@nestjs/common";
import { PublicService } from "./public.services";
import { MarkdownService } from "src/markdown.service";


@Controller()
export class PublicController {
    constructor(private publicService: PublicService, private markdownService: MarkdownService) { }

    @Get()
    @Render('index')
    async index(@Query() req: any) : Promise<any> {
        try {
            return {
                entries: await this.publicService.retrieveListEntries(),
                tags: [
                    {name: "Histoire", color: "#4287f5"},
                    {name: "Musique", color: "#9c369e"},
                    {name: "Personnage", color: "#3ac769"},
                    {name: "Géographie", color: "#c7364e"},
                ]
            };
        } catch (err) {
            throw new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('entry/:id')
    @Render('entry')
    async entry(@Param('id') id: string) : Promise<any> {
        try {
            let entry = await this.publicService.retrieveEntry(id);
            let contentHTML = this.markdownService.markdownToHtml(entry.content);
            entry.content = contentHTML;
            return entry;
        } catch(err) {
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @Get('categories')
    @Render('categories')
    categories() {

    }

    @Get('category/:id')
    @Render('category/:id')
    category(@Param('id') id: string) {

    }

    @Get('random')
    @Render('random')
    randomEntry() {

    }
}