import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';

//引入公共服务
import { ArticleService } from '../../service/article/article.service';
import { NavService } from "../../service/nav/nav.service";
//配置model
import { TypeOrmModule } from '@nestjs/typeorm';
import  { Article } from '../../entity/article.entity';
import  { Nav } from '../../entity/nav.entity';
import { NavController } from './controller/nav/nav.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Nav])],
  controllers: [UserController, NavController],
  providers: [ArticleService, NavService]
})
export class AdminModule {}
