import { Controller, Get, Param, Req, Query, Post, Body } from "@nestjs/common";

@Controller("admin")
export class AdminController {

    @Get()
    index() {
        
    }

    @Post("login")
    login(@Query() req) {
        
    }

    @Get("writing/")
    newEntry() {

    }

    @Post("writing/")
    submitNewEntry(@Body() entry) {

    }

    @Get("writing/:id")
    editEntry(@Param('id') id: number) {

    }

    @Post("writing/:id")
    submitEditEntry(@Param('id') id: number) {

    }
}