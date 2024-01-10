import { Photo, Profile } from "./profile";
import { User } from "./user";


export interface MixAndMatchRound {
   
    
   
    courtsTotal: number;
    roundType:number;
    mixAndMatchGames:MixAndMatchGame[];
    activityId:string;
    roundTypeOption:[];
}





  
export interface MixAndMatchGame{
  
    id?:string;
    roundId?:number;
    courtNumber:number;
    players:MixAndMatchPlayer[] ;
    completed: boolean;
    teamOneScore:number;
    teamTwoScore:number;
    isPlayoff: boolean;

    
  }

  export interface MixAndMatchGameDragAndDrop{
  

 
    team:number;
    roundId?:number;
    courtNumber:number;
    teamOne:MixAndMatchPlayer[] ;
    teamTwo:MixAndMatchPlayer[] ;
    

    
  }

  export class MixAndMatchGameDragAndDrop implements MixAndMatchGameDragAndDrop{

    constructor(game: MixAndMatchGame) {

      this.teamOne=game.players.filter(p=>p.team==1);
      this.teamTwo=game.players.filter(p=>p.team==2);
      this.courtNumber=game.courtNumber;



    }

    


  }

  export interface MixAndMatchPlayer{
    

  
    team?: number;
    username: string;
    displayName: string;
    image?: string | null;
    gender?:string;
    appUserId:string;
    totalPoints:number;
    isCheckedIn?:boolean;


  }


  export class MixAndMatchPlayer implements MixAndMatchPlayer {
    constructor(user: Profile) {
        this.username = user.username;
        this.displayName = user.displayName;
        this.image = user.image;
        this.gender=user.gender;
        this.appUserId=user.appUserId;
       
        
    }
}
  
  