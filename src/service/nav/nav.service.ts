import { Injectable } from '@nestjs/common';
import { InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Nav } from '../../entity/nav.entity'
import { NavInterface } from "../../interface/nav.interface";

@Injectable()
export class NavService {
  constructor(
    @InjectRepository(Nav)
    private readonly navRepository: Repository<Nav>,
  ) {}

  async findAll(){


    // return await this.navRepository.find(json);

    // return await this.navRepository.findByIds([1,2]);

    // return await this.navRepository.findOne(2);

    // return await this.navRepository.findOne(json);
    // return await this.navRepository.findOne(json);


    //根据sql语句来查询

    return await this.navRepository.query('select * from nav');


  }

  async add(json:NavInterface){
    // var nav=new Nav();
    // nav.title='论坛222';
    // nav.url="bbs.itying.com";

    // return await this.navRepository.save(nav);


    let nav=new Nav();
    nav.title=json.title;
    nav.url=json.url;
    nav.status=json.status;

    return await this.navRepository.save(nav);

  }



  async update(json1:NavInterface,json2:NavInterface){

    let oneNav=await this.navRepository.findOne(json1);

    json2.title?oneNav.title=json2.title:"";

    json2.url?oneNav.url=json2.url:"";

    json2.status?oneNav.status=json2.status:"";

    return this.navRepository.save(oneNav);

  }

  async remove(json1:NavInterface){

    var oneNav=await this.navRepository.findOne(json1);

    return this.navRepository.remove(oneNav);

  }

}

