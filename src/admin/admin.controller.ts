import { Controller, Get, Param, Req, Query, Post, Body, Render, HttpException, HttpStatus, Redirect, Res } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Response } from 'express';


@Controller("admin")
export class AdminController {
    constructor(private adminService: AdminService) { }


    @Get()
    index() {
        
    }

    @Post("login")
    login(@Query() req) {
        
    }

    @Get("writing/")
    @Render("writing")
    newEntry() {
        return null;
    }

    @Post("writing/")
    async submitNewEntry(@Res() res: Response, @Body() entry) : Promise<void> {
        try {
            var response = await this.adminService.addEntry(entry);
            res.redirect(`/entry/${response.id}`);
        } catch(err) {
            console.log(err);
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @Get("writing/:id")
    editEntry(@Param('id') id: number) {

    }

    @Post("writing/:id")
    submitEditEntry(@Param('id') id: number) {

    }
}