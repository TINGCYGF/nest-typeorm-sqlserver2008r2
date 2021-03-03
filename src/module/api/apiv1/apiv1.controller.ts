import {Controller, Get, Request} from '@nestjs/common';
import { NavService } from '../../../service/nav/nav.service'

@Controller('apiv1')
export class Apiv1Controller {
  constructor(private navService: NavService) {
  }

  @Get('plist')
  async plist(@Request() req){
    let page = req.query.page || 1;
    let pageSize = 10;
    let skip = (page-1)*pageSize;
    let result = await this.navService.findAll()
    return result;
  }

}
