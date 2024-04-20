import { IsNumber, IsString } from 'class-validator';
import{QuestState} from './../module/Magic-enum';
export  class addMagicMoverDto{
 
    @IsNumber()
    WeightLimit:number;
     
    @IsNumber()
    Energy:number;

   @IsString()
   QuestState:QuestState;
   
}