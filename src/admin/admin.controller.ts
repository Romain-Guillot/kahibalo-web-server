import { Controller, Get, Param, Req, Query } from "@nestjs/common";

@Controller()
export class AdminController {
    @Get()
    index(@Query() req) {
        
    }

    @Get('entry/:id')
    entry(@Param('id') id: string) {

    }

    @Get('categories')
    categories() {

    }

    @Get('category/:id')
    category(@Param('id') id: string) {

    }

    @Get('random')
    randomEntry() {

    }
}