 import { Controller, Body,Post, Param, Get } from '@nestjs/common';
 import { InjectRepository } from '@nestjs/typeorm';
 import { Repository } from 'typeorm';
import { MagicService } from '../service/magic-service';
import { addMagicMoverDto } from '../dto/add-Magic.dto';
 import{ changeMoverStat} from './../dto/startmission.dto';
 import{QuestState} from './../module/Magic-enum'
@Controller('magic')
export class MagicController  {
constructor(private magicService:MagicService,
){ }


@Post('/add-Magic-Mover')
async addMagicMover(@Body() body:addMagicMoverDto ){
const magicMover = await this.magicService.create(body.WeightLimit,body.Energy,body.QuestState);
return magicMover;
}

@Post('/Load-Items/:id')
async LoadItems(@Param ('id') id:string , @Body() items:string[] ){
const ItemsLode =await this.magicService.loadItemsOntoMover(parseInt(id),items)
}  

 
@Post('/start-Mission/:id')
async startMission(@Param ('id') id:string,questState){
    await this.magicService.changeStat(parseInt(id),QuestState.ON_MISSION);
}
 
@Post('/end-Mission/:id')
async endMission(@Param ('id') id:string){
    await this.magicService.changeStat(parseInt(id),QuestState.DONE);
}

@Get('/get-Leader')
async getLeader(){
   await this.magicService.getMoverWithMostMissions();
} 


}
