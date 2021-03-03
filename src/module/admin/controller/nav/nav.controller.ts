import { Controller, Get } from '@nestjs/common';
import { NavService } from '../../../../service/nav/nav.service';

@Controller('admin/nav')
export class NavController {

  constructor(private navService:NavService){

  }

  @Get()
  async index(){

    return await this.navService.findAll();
  }

  @Get('add')
  async add(){

    return await this.navService.add({
      "title":"大地专栏",
      "url":'xxxxxxxx'
    });
  }

  @Get('update')
  async update(){

    return await this.navService.update({"id":5},{"title":"nest教程666",url:"itying.com"});
  }

  @Get('remove')
  async remove(){

    return await this.navService.remove({"id":3});
  }
}
