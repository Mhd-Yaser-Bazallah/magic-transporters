import { Controller,Body,Post } from '@nestjs/common';
 import{MagicItemService}from './../service/magic-item.service';
 import{addMagicItemDto}from './../dto/add-magicItem.dto'
@Controller('magic-item')
export class MagicItemController {

    constructor(private magicItemService:MagicItemService){ }


@Post('/add-Magic-Mover-Item')
async addMagicMover(@Body() body:addMagicItemDto ){
const magicMoverItem = await this.magicItemService.create(body.Name,body.Weight);
return magicMoverItem;
}
}
