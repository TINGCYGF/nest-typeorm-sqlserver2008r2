import { Module } from '@nestjs/common';
import { Apiv1Controller } from './apiv1/apiv1.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Article} from "../../entity/article.entity";
import {Nav} from "../../entity/nav.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Article, Nav])],
  controllers: [Apiv1Controller]
})
export class ApiModule {}
