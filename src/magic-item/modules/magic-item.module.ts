import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import{MagicItemService} from './../service/magic-item.service'
import{MagicItemController} from './../controller/magic-item.controller'
import{MagicItem}from './MagicItem.entity'
@Module({
    imports: [
        TypeOrmModule.forFeature([MagicItem]), // Import the repository using TypeOrmModule.forFeature()
        
    ],
    providers:[MagicItemService],
    controllers: [MagicItemController],
})
export class MagicItemModule {}
