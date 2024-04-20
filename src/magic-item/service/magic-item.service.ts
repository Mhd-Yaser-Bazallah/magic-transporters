import { Injectable } from '@nestjs/common';
import {MagicItem}from './../modules/MagicItem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MagicItemService {
    constructor(@InjectRepository(MagicItem) private repo: Repository<MagicItem>){}
   
    create(Name:string,  Weight:number ){
        const NewMagicMover =  this.repo.create({Name ,Weight});
        return this.repo.save(NewMagicMover);
    }
}
