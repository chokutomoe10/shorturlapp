import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './links.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class LinksService {
    constructor(
        @InjectRepository(Link) private readonly linksRepository: Repository<Link>,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) {}

    async getAllLinks(): Promise<Array<Link>> {
        return this.linksRepository.find({})
    }

    async createLink(url: string): Promise<Link> {
        const name = Math.random().toString(36).slice(7);
        const link = this.linksRepository.create({name, url});

        await this.linksRepository.save(link);

        return link;
    }

    // async createLink(name: string, url: string): Promise<Link> {
    //     const link = this.linksRepository.create({name, url})

    //     await this.linksRepository.save(link);

    //     return link;
    // }

    async getLink(name: string): Promise<Link> {
        const cachedItem: Link = await this.cacheManager.get(name);
        // const cachedItem = await this.cacheManager.get('cached_item');
        console.log(cachedItem);

        if (cachedItem != undefined) {
            return cachedItem
        }

        const condition: FindOneOptions<Link> = {
            where : {
                name: name
            }
        }
        
        const newValue = await this.linksRepository.findOne(condition);
        await this.cacheManager.set(name, newValue);
        // await this.cacheManager.set('cached_item', newValue);
        return newValue
    }

    // async getLink(name: string): Promise<Link> {
    //     const condition: FindOneOptions<Link> = {
    //         where : {
    //             name: name
    //         }
    //     }
    //     return this.linksRepository.findOne(condition)
    // }
}
