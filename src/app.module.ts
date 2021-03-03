import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
//导入TypeOrmModule
import { TypeOrmModule } from '@nestjs/typeorm';
//import { NavService } from './service/nav/nav.service';
import { ApiModule } from './module/api/api.module';

@Module({
  imports: [AdminModule,
    //配置数据库
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '127.0.0.1',
      port: 1433,
      username: 'TING',
      password: '1127163161',
      database: 'TING2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      "synchronize": false,
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
