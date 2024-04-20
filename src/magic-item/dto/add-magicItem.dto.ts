import { IsNumber, IsString } from 'class-validator';
export  class addMagicItemDto{
     
    @IsNumber()
    Weight:number;

   @IsString()
   Name:string;
   
   
}