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
  
    id?:number;
    activityid:string;
    roundId?:number;
    courtNumber:number;
    players:MixAndMatchPlayer[] ;
    completed: boolean;
    teamOneScore:number;
    teamTwoScore:number;
    isPlayoff: boolean;

    
  }

  export interface MixAndMatchGameDragAndDrop{
  

 
    
    roundId?:number;
    courtNumber:number;
    teamOne:MixAndMatchPlayer[] ;
    teamTwo:MixAndMatchPlayer[] ;
    gameId:number;
    

    
  }

  export class MixAndMatchGameDragAndDrop implements MixAndMatchGameDragAndDrop{

    constructor(game: MixAndMatchGame) {

      this.teamOne=game.players.filter(p=>p.team==1);
      this.teamTwo=game.players.filter(p=>p.team==2);
      this.courtNumber=game.courtNumber;
      this.roundId=game.roundId;
      this.gameId=game.id!;


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
  
  