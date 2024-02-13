import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksModule } from './links/links.module';
import { WildcardModule } from './wildcard/wildcard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pgsql089',
      database: 'nest-url-app',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LinksModule,
    WildcardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { LinksModule } from './links/links.module';
// import { WildcardModule } from './wildcard/wildcard.module';
// import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { redisStore } from 'cache-manager-redis-yet';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'pgsql089',
//       database: 'nest-url-app',
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     LinksModule,
//     WildcardModule,
//     CacheModule.register({
//       ttl: 10000,
//       store: redisStore,
//       host: 'localhost',
//       port: 6379,
//     }),
//   ],
//   controllers: [],
//   // providers: [],
//   providers: [{
//     provide: APP_INTERCEPTOR,
//     useClass: CacheInterceptor,
//   }],
// })
// export class AppModule {}