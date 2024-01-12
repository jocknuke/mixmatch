import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, reaction, runInAction } from "mobx";
import { store } from "./store";
import { MixAndMatchGame, MixAndMatchPlayer } from "../models/mixandmatchround";
import agent from "../api/agent";

export default class MixAndMatchStore {
    games: MixAndMatchGame[] = [];
    gamesRegistry = new Map<string, MixAndMatchGame[]>();
    gamesDetails: MixAndMatchGame[] = [];
    players: MixAndMatchPlayer[]=[];
    groupedRound:[string, MixAndMatchGame][]=[];
    gameLoadingInitial = false;
    roundActiveIndex=0;
    hubConnection: HubConnection | null = null;
    activityId:string='';

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

                    this.gameLoadingInitial=true;

                    this.activityId=activityId;

                    this.gamesRegistry.set(activityId, games );
                   
                    
                    this.games = games;
                    this.gameLoadingInitial=false;

                });

                
            });


            this.hubConnection.on('ReceiveRounds', newgames => {
              
             

                runInAction(() => {
                    this.roundActiveIndex=newgames.roundId;




                    this.games.push.apply(this.games, newgames);
                })
            })

            this.hubConnection.on('RemoveRound', roundDeleted => {
              
               

                runInAction(() => {
                    
                    this.games=this.games.filter(item => item.roundId !== roundDeleted);;
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

    private getGamesFromRegistry = (id: string) => {
        return this.gamesRegistry.get(id);
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => console.log('Error stopping connection: ', error));
    }

    clearGames = () => {
        this.games = [];
        this.players=[];
        this.stopHubConnection();
    }

    clearGamesDetails = () => {
        this.gamesDetails = [];
    }

    addGame = async (values: any) => {
        values.activityId = store.activityStore.selectedActivity?.id;
        try {

          
         
            await this.hubConnection?.invoke('SendRound', values);

          


        } catch (error) {
            console.log(error);
        }
    }
    deleteGame = async (values: any) => {
       
        try {

            
         
            await this.hubConnection?.invoke('DeleteRound', values);

            

          


        } catch (error) {
            console.log(error);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.gameLoadingInitial = state;
    }

    loadGames= async (games:MixAndMatchGame[]) => {
        this.gameLoadingInitial = true;
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

    loadGamesDetails = async (activityId: string, roundId:number) => {

       
       
            this.setLoadingInitial(true);

            const params = new URLSearchParams();
            params.append('activityId', activityId.toString());
            params.append('roundId', roundId.toString())
            try {
                const result = await agent.Games.list(params);
               
                this.setLoadingInitial(false);

              

                runInAction(() => {
        
                    this.gamesDetails=result.data;
                      });
                
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
   
       
       



                 return this.players;

   
}

   





   
}

