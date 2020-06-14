import { Controller, Get, Param, Req, Query, Post, Body, Render, HttpException, HttpStatus, Redirect, Res } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Response } from 'express';
import { PublicService } from "src/public/public.services";


@Controller("admin")
export class AdminController {
    constructor(private adminService: AdminService, private publicService: PublicService) { }


    @Get()
    index() {
        
    }

    @Get("login")
    @Render("login")
    login(@Query() req) {
        
    }

    @Post("login")
    @Render("login")
    submitLogin(@Query() req) {
        
    }

    @Get("writing/")
    @Render("writing")
    newEntry() {
        return null;
    }

    @Post("writing/")
    async submitNewEntry(@Res() res: Response, @Body() entry) : Promise<void> {
        try {
            var articleID = await this.adminService.addEntry(entry.content);
            res.redirect(`/entry/${articleID}`);
        } catch(err) {
            res.render("writing", {error: err, content: entry.content})
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    /**
     * The entry is edited in one textarea that combines the article title 
     * and the article content
     */
    @Get("writing/:id")
    @Render("writing")
    async editEntry(@Param('id') id: string) : Promise<any> {
        try {
            let article = await this.publicService.retrieveEntry(id);
            article.content = `# ${article.title}\n` + article.content ;
            return article;
        } catch(err) {
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @Post("writing/:id")
    async submitEditEntry(@Param('id') id: string, @Body() entry) : Promise<void> {
        try {
            await this.adminService.editEntry(id, entry.content);
        } catch(err) {
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
}