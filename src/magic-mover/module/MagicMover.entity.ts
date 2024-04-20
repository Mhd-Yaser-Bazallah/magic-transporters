import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    
  } from 'typeorm';
  import{QuestState} from './Magic-enum';
 
  
  @Entity()
  export class MagicMover {
    @PrimaryGeneratedColumn()
    id:number;
     
    @Column()
    WeightLimit:number;
     
    @Column()
    Energy:number;

    @Column({default:0})
    numberOfMission:number;

    @Column({
      type: 'enum',
        enum: QuestState,
        default: QuestState.RESTING,
    })
    QuestState:QuestState;
  }
