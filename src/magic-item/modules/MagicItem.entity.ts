import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
import{MagicMover} from './../../magic-mover/module/MagicMover.entity';
  @Entity()
  export class MagicItem {
    @PrimaryGeneratedColumn()
    id:number;

  
    @Column()
    Name:string;
     
    @Column()
    Weight:number;
    
    @Column({nullable: true})
    moverId:number;

   
  }