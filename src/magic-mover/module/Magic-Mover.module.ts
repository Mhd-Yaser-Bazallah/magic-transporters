import { Module } from '@nestjs/common';
import { MagicService  } from '../service/magic-service';
import { MagicController } from '../controller/magic-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import{MagicMover} from './MagicMover.entity';
import{logService} from './../../log/log.service';
import{MagicItem}from'./../../magic-item/modules/MagicItem.entity';
import{log} from './../../log/log.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([MagicMover,MagicItem,log]),   
    ],
    providers : [MagicService,logService],
    controllers: [MagicController],
})
export class MagicMoverModule {}
