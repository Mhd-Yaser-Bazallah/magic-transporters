import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagicMoverModule } from './magic-mover/module/Magic-Mover.module';
import { MagicService  } from './magic-mover/service/magic-service';
import { MagicController } from './magic-mover/controller/magic-controller.controller';
import { MagicItemModule } from './magic-item/modules/magic-item.module';
import { MagicItemService } from './magic-item/service/magic-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagicItemController } from './magic-item/controller/magic-item.controller';
import { MagicMover } from './magic-mover/module/MagicMover.entity';
 import{log} from './log/log.entity'
import{MagicItem}from './magic-item/modules/MagicItem.entity'
@Module({
  imports: [MagicMoverModule, MagicItemModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username: 'root',
    password:'1234',
    database:'magictransporters',
    entities:[MagicMover,MagicItem,log],
    synchronize:true,
  })],
  controllers: [AppController],//, MagicController,MagicItemController
  providers: [AppService],//MagicService, MagicItemService
})
export class AppModule {}
