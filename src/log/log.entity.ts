import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    
  } from 'typeorm';
   
  @Entity()
  export class log {    
    @PrimaryGeneratedColumn()
    id:number;
     
    @Column()
    moverId:number;
     
    @Column()
    endPoint:string;

    
    @Column()
    Date:Date;

     
  }
