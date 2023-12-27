import { Grid } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import MixAndMatchRoundsList from "../../mixandmatch/MixAndMatchRoundsList";
import { MixAndMatchRound } from "../../../app/models/mixandmatchround";
import { Activity } from "../../../app/models/activity";
import { Profile } from "../../../app/models/profile";
import MixAndMatchForm from "../../mixandmatch/form/MixAndMatchForm";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    const { id } = useParams();


       

        const initinalgames= [

            { 
                id:1,
                 roundType:1,
                  
                 courtsTotal:6,
                 games: [

                    { 
                        id:1,
                        roundid:1,
                        courtid:1,
                        teamOne:[],
                        teamTwo:[],
                        completed: false,
                        teamOneScore:0,
                        teamTwoScore:0,


                    },
                    { 
                        id:2,
                        roundid:1,
                        courtid:2,
                        teamOne:[],
                        teamTwo:[],
                        completed: false,
                        teamOneScore:0,
                        teamTwoScore:0,


                    }
                    ,
                    { 
                        id:3,
                        roundid:1,
                        courtid:3,
                        teamOne:[],
                        teamTwo:[],
                        completed: false,
                        teamOneScore:0,
                        teamTwoScore:0,


                    }
                 ]
  

            },
            { 
                id:2,
                roundType:1,
                  
                 courtsTotal:6,
                 games: [

                    { 
                        id:2,
                        roundid:2,
                        courtid:1,
                        teamOne:[],
                        teamTwo:[],
                        completed: false,
                        teamOneScore:0,
                        teamTwoScore:0,


                    }
                 ]
  

            }


        ];
 

        const [round, setRounds] = useState(initinalgames);

    useEffect(() => {
        if (id) loadActivity(id);
        return () => clearSelectedActivity();
    }, [id, loadActivity, clearSelectedActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />



    const handleAddRound = () => {
        setRounds((prevFriends) => [
            ...prevFriends,
            {
                id:3,
                roundType:2,
                  
                 courtsTotal:6,
                 games: [

                    { 
                        id:3,
                        roundid:2,
                        courtid:1,
                        teamOne:[],
                        teamTwo:[],
                        completed: false,
                        teamOneScore:0,
                        teamTwoScore:0,


                    }
                 ]
            },
        ]);
    };


    

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat activityId={activity.id} />

                {round.map(round => (
                        <MixAndMatchRoundsList activity={activity} round={round}/>
                    ))}
               

            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityDetailedSidebar activity={activity}/>
                <MixAndMatchForm createRound={handleAddRound}/>
            </Grid.Column>
        </Grid>
    )
})