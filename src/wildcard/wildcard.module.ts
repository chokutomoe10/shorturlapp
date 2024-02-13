import { Module } from '@nestjs/common';
import { WildcardController } from './wildcard.controller';
import { LinksModule } from 'src/links/links.module';
// import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [LinksModule],
  // imports: [
  //   CacheModule.register(),
  //   LinksModule,
  // ],
  controllers: [WildcardController],
})
export class WildcardModule {}
