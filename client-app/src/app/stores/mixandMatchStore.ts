import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { makeAutoObservable, runInAction } from "mobx";
import { store } from "./store";
import { MixAndMatchGame } from "../models/mixandmatchround";

export default class MixAndMatchStore {
    games: MixAndMatchGame[] = [];
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

            
        }
    }

    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => console.log('Error stopping connection: ', error));
    }

    clearGames = () => {
        this.games = [];
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





   
}

