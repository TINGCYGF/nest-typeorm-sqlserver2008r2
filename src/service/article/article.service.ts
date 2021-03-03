import { Injectable } from '@nestjs/common';

import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
//引入数据库表实体
import { Article } from '../../entity/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    //引入数据库表示例赋值给articleRepository
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}
  //如查找数据
  async findAll(){
    return await this.articleRepository.find();
  }

}
