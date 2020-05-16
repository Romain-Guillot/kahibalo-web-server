import { Controller, Get, Param, Req, Query, Render } from "@nestjs/common";
import { PublicService } from "./public.services";

@Controller()
export class PublicController {
    constructor(private publicService: PublicService) { }

    @Get()
    @Render('index')
    async index(@Query() req: any) : Promise<any> {
        let a = await this.publicService.retrieveListEntries();
        console.log(a.data);
        return a.data;
    }

    @Get('entry/:id')
    @Render('entry')
    async ntry(@Param('id') id: string) : Promise<any> {
        let a = await this.publicService.retrieveEntry(id);
        console.log(a.data);
        return a.data;
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