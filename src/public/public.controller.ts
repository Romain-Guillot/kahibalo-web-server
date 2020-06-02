import { Controller, Get, Param, Req, Query, Render, HttpException, HttpStatus } from "@nestjs/common";
import { PublicService } from "./public.services";


@Controller()
export class PublicController {
    constructor(private publicService: PublicService) { }

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
            return await this.publicService.retrieveEntry(id);
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