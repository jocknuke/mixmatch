import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";
import { MixAndMatchGame, MixAndMatchPlayer } from "../models/mixandmatchround";

export default class MixAndMatchStore {
    games: MixAndMatchGame[] = [];
    players: MixAndMatchPlayer[]=[];
    groupedRound:[string, MixAndMatchGame][]=[];
    loadingInitial = false;
    hubConnection: HubConnection | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    createHubConnection = (activityId: string) => {

      
        
        if (store.activityStore.selectedActivity) {
            
            this.hubConnection = new HubConnectionBuilder()
                .withUrl('http://localhost:5000/mixandmatchhub?activityId=' + activityId, {
                    accessTokenFactory: () => store.userStore.user?.token!
                })
                .withAutomaticReconnect()
                .configureLogging(LogLevel.Information)
                .build();

            this.hubConnection.start().catch(error => console.log('Error establishing connection: ', error));

            this.hubConnection.on('LoadRounds', (games: MixAndMatchGame[]) => {

               
                runInAction(() => {
                    
                    this.games = games;

                });
            });


            this.hubConnection.on('ReceiveRounds', newgames => {
              

                runInAction(() => {
                    this.games.push.apply(this.games, newgames);
                })
            })

            this.hubConnection.on('ReceiveGame', game => {

                
             

                runInAction(() => {
                    const _g=this.games.find(x=>x.id==game.id);
                    if(_g ){

                        _g.teamOneScore=game.teamOneScore;
                        _g.teamTwoScore=game.teamTwoScore;
                    }
                    

                })
            })

            
        }
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => console.log('Error stopping connection: ', error));
    }

    clearGames = () => {
        this.games = [];
        this.players=[];
        this.stopHubConnection();
    }

    addGame = async (values: any) => {
        values.activityId = store.activityStore.selectedActivity?.id;
        try {

          
         
            await this.hubConnection?.invoke('SendRound', values);

          


        } catch (error) {
            console.log(error);
        }
    }
    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    loadGames= async (games:MixAndMatchGame[]) => {
        this.loadingInitial = true;
        try {


            runInAction(() => {
        
                this.games=games;
                  });


            
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }


    updateGame = async (values: any) => {
       
        values.ActivityId = store.activityStore.selectedActivity?.id;
        try {

           
           
           
         
            await this.hubConnection?.invoke('UpdateGame', values);

           


        } catch (error) {
            console.log(error);
        }
    }


    get groupedGamesByRoundId() {
        


        return Object.entries(
            

            this.games.reduce((group: {[key: string]: MixAndMatchGame[]}, item) => {
                if (!group[item.roundId!]) {
                 group[item.roundId!] = [];
                }
                group[item.roundId!].push(item);
                return group;
               }, {} )

        )
    }


    get getUpdatedPlayers () {
   
       
        const playersIdx:any = {}; // variables for indexing
        
        
        runInAction(() => {
        
      this.players=[];
        });


        
this.games.map((game) =>

  game.players.map((player) => {

 

    const findPlayer = playersIdx[player.appUserId] ?? -1;
    const point =  player.team === 1 ? game.teamOneScore : game.teamTwoScore;
    if (findPlayer > -1) {
        runInAction(() => {
      this.players[findPlayer].totalPoints += point;
        });
     
    } else {
       
      const newPlayer = { ...player, totalScore: point }
      delete newPlayer.team
      runInAction(() => {
      this.players.push(newPlayer);
      });
      playersIdx[player.appUserId] = this.players.length - 1;
    }
  })
);





  return this.players;

   
}

   





   
}

