import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 import{log} from './../log/log.entity';
 
 @Injectable()
export class logService {
    constructor(
        @InjectRepository(log)  private logRepo: Repository<log>
){ }
   

async create(moverId: number, endPoint: string, date: Date) {
    const newLog = await this.logRepo.create({ moverId, endPoint, Date: date });
    return await this.logRepo.save(newLog);
}
    
}

