import { Photo, Profile } from "./profile";
import { User } from "./user";


export interface MixAndMatchRound {
   
    
    id: number;
    courtsTotal: number;
    roundType:number;
    games:MixAndMatchGame[];
}



  
export interface MixAndMatchGame{
  
    id:number;
    roundId:number;
    courtid:number;
    players:MixAndMatchPlayer[] ;
    completed: boolean;
    teamOneScore:number;
    teamTwoScore:number;
    isPlayoff: boolean;

    
  }

  export interface MixAndMatchPlayer{
    

  
    team: number;
    username: string;
    displayName: string;
    image?: string;
    gender?:string;


  }


  export class MixAndMatchPlayer implements MixAndMatchPlayer {
    constructor(user: Profile) {
        this.username = user.username;
        this.displayName = user.displayName;
        this.image = user.image;
        this.gender=user.gender;
        
    }
}
  
  