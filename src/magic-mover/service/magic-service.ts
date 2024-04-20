import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MagicMover } from '../module/MagicMover.entity';
import{QuestState} from './../../magic-mover/module/Magic-enum';
import{MagicItem}from'./../../magic-item/modules/MagicItem.entity';
import{changeMoverStat} from './../dto/startmission.dto'
 import{logService} from './../../log/log.service';
 @Injectable()
export class MagicService {
    constructor(
        @InjectRepository(MagicMover) private repo: Repository<MagicMover>,
        @InjectRepository(MagicItem)  private itemRepo: Repository<MagicItem>,
        private LogService:logService
){}
   
  async  create(WeightLimit:number,  Energy:number, QuestState:QuestState){
        const NewMagicMover =  await this.repo.create({WeightLimit, Energy ,QuestState} );
         
        return await this.repo.save(NewMagicMover);
    }

 
    async loadItemsOntoMover(moverId: number,itemNames: string[]){
        
        const mover = await this.repo.findOne({where :{id:moverId}});

        if(mover.QuestState === "on a mission"){
            throw new Error("The magicMover busy")
        }
        else {
        const items: MagicItem[] = [];
        var sum=0;
        for (const itemName of itemNames) {
            const item = await this.itemRepo.findOne({ where: { Name: itemName } });
            if(!item)throw new Error(`Item with name '${itemName}' not found.`);
                sum+=item.Weight;
                items.push(item);
             
        }
        if(mover.WeightLimit >= items.length && mover.Energy>=sum){
            items.forEach(item => {
                item.moverId = moverId;  
            });
            this.LogService.create(mover.id, 'LoadItems',new Date);
          return  await this.itemRepo.save(items);
        }
        else {
            throw new Error('Insufficient mover capacity or energy.');
        }
         
 
    }
      }


       async changeStat(id:number , questState:QuestState){
        const mover = await this.repo.findOne({where :{id}});
        if(mover.QuestState !== QuestState.ON_MISSION){
        mover.QuestState=questState;
        this.LogService.create(mover.id, questState,new Date);
        if(questState === "done")mover.numberOfMission= mover.numberOfMission+1;
        await this.repo.save(mover);}
        else {
            throw new Error("The magicMover busy")
        }
      }


      async getMoverWithMostMissions(): Promise<number | null> {
        const query = `
          SELECT id 
          FROM mover 
          WHERE numberOfMission = (SELECT MAX(numberOfMission) FROM mover)
          LIMIT 1;
        `;
        
        const result = await this.repo.query(query);
        return result.length > 0 ? result[0].id : null;
      }
    
}

