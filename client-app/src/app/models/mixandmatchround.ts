import { Profile } from "./profile";


export interface MixAndMatchRound {
   
    
    id: number;
    courtsTotal: number;
    games:MixAndMatchGame[];
}


  
export interface MixAndMatchGame{
  
    id:number;
    roundid:number;
    courtid:number;
    teamOne:Profile[] ;
    teamTwo:Profile[] ;
    completed: boolean;
    teamOneScore:number;
    teamTwoScore:number;
    
  }
  