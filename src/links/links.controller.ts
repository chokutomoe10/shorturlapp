import { Body, Controller, Get, Post } from '@nestjs/common';
import { LinksService } from './links.service';
import { Link } from './links.entity';
// import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller('links')
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    // @UseInterceptors(CacheInterceptor)
    // @CacheKey('GCC-key')
    // @CacheTTL(10000)
    @Get()
    async getAllLinks(): Promise<Array<Link>> {
        return this.linksService.getAllLinks()
    }

    @Post()
    async createLink(@Body('url') url: string): Promise<Link> {
        return this.linksService.createLink(url)
    }

    // @Post()
    // async createLink(@Body('name') name: string, @Body('url') url: string): Promise<Link> {
    //     return this.linksService.createLink(name, url)
    // }
}
