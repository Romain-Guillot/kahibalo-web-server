import { Controller, Get, Param, Req, Query, Render } from "@nestjs/common";
import { PublicService } from "./public.services";

@Controller()
export class PublicController {
    constructor(private publicService: PublicService) { }

    @Get()
    @Render('index')
    index(@Query() req: any) {
        return this.publicService.retrieveListEntries();
    }

    @Get('entry/:id')
    @Render('index')
    entry(@Param('id') id: string) {

    }

    @Get('categories')
    @Render('index')
    categories() {

    }

    @Get('category/:id')
    @Render('index')
    category(@Param('id') id: string) {

    }

    @Get('random')
    @Render('index')
    randomEntry() {

    }
}