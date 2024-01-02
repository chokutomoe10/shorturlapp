import { Body, Controller, Get, Post } from '@nestjs/common';
import { LinksService } from './links.service';
import { Link } from './links.entity';

@Controller('links')
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    @Get()
    async getAllLinks(): Promise<Array<Link>> {
        return this.linksService.getAllLinks()
    }

    @Post()
    async createLink(@Body('url') url: string): Promise<Link> {
        return this.linksService.createLink(url)
    }
}
