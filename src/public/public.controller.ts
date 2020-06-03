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
            return await this.publicService.retrieveListEntries();
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