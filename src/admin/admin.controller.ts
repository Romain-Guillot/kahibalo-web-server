import { Controller, Get, Param, Req, Query, Post, Body, Render, HttpException, HttpStatus, Redirect, Res } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Response } from 'express';
import { PublicService } from "src/public/public.services";
import { MarkdownService } from "src/markdown.service";


@Controller("admin")
export class AdminController {
    constructor(private adminService: AdminService, private publicService: PublicService, private markdownService: MarkdownService) { }


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
            console.log(err);
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
            let articleMd = this.markdownService.formatArticle(article);
            return {_id: article._id, content: articleMd};
        } catch(err) {
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }

    @Post("writing/:id")
    async submitEditEntry(@Res() res: Response, @Param('id') id: string, @Body() entry) : Promise<void> {
        try {
            await this.adminService.editEntry(id, entry.content);
            res.redirect(`/entry/${id}`);
        } catch(err) {
            new HttpException("", HttpStatus.INTERNAL_SERVER_ERROR); 
        }
    }
}