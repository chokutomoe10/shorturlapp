// import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { LinksService } from 'src/links/links.service';

@Controller()
export class WildcardController {
    constructor(private readonly linksService: LinksService) {}

    @Get('/:name')
    // @CacheKey('some_route')
    // @CacheTTL(10000)
    async handleRedirect(@Param('name') name: string, @Res() res: Response) {
        const link = await this.linksService.getLink(name);
        // const link: any = await this.linksService.getLink(name);
        return res.redirect(301, link.url)
    }
}
