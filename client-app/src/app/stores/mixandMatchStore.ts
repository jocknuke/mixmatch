import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";
import { MixAndMatchGame, MixAndMatchPlayer } from "../models/mixandmatchround";
import agent from "../api/agent";

export default class MixAndMatchStore {
    games: MixAndMatchGame[] = [];
    gamesDetails: MixAndMatchGame[] = [];
    players: MixAndMatchPlayer[]=[];
    groupedRound:[string, MixAndMatchGame][]=[];
    loadingInitial = false;
    roundActiveIndex=0;
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
                    this.roundActiveIndex=newgames.roundId;
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

    loadGamesDetails = async (activityId: string, roundId:number) => {
       
            this.setLoadingInitial(true);

            const params = new URLSearchParams();
            params.append('activityId', activityId.toString());
            params.append('roundId', roundId.toString())
            try {
                const result = await agent.Games.list(params);
               
                this.setLoadingInitial(false);
                return result.data;
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

