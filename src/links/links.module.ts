import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './links.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
// import { CacheModule } from '@nestjs/cache-manager';
// import { RedisClientOptions } from 'redis';
// import * as redisStore from 'cache-manager-redis-store';

// import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    TypeOrmModule.forFeature([Link]),
    CacheModule.register({
      ttl: 10000,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    // CacheModule.register(),
    // CacheModule.register<RedisClientOptions>({
    //   store: redisStore,
    //   host: 'localhost',
    //   port: 6379,
    // }),
  ],
  providers: [LinksService],
  controllers: [LinksController],
  exports: [LinksService],
})
export class LinksModule {}
