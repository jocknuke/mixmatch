import { Grid, Header, Sticky } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from "react-router-dom";
import { createRef, useEffect, useState } from "react";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import MixAndMatchRoundsList from "../../mixandmatch/MixAndMatchRoundsList";
import { MixAndMatchGame, MixAndMatchPlayer, MixAndMatchRound } from "../../../app/models/mixandmatchround";
import { Activity } from "../../../app/models/activity";
import { Profile } from "../../../app/models/profile";
import MixAndMatchForm from "../../mixandmatch/form/MixAndMatchForm";
import MixAndMatchPlayersSidebar from "../../mixandmatch/MixAndMatchPlayersSidebar";
import { roundTypeOptions } from "../../../app/common/options/mixandmatchOptions";





export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    const { id } = useParams();  
   
   


    

    useEffect(() => {
        if (id) {
            
            loadActivity(id);
        
        };
        return () => {clearSelectedActivity();
       
        }
       
    }, [id,loadActivity, clearSelectedActivity]);

   
   


    
   
    if (loadingInitial || !activity ) return <LoadingComponent />

  

   
    

    return (
        <Grid columns={2} stackable>
            <Grid.Column width='10'>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat activityId={activity.id} />

                <MixAndMatchRoundsList  activity={activity} />
                  
               

            </Grid.Column>
            <Grid.Column width='6'>
           
              
            {
 activity.category=='mixandmatch' && (<MixAndMatchForm activity={activity}/>)
}
             
               

              {
 activity.category=='mixandmatch' && (<MixAndMatchPlayersSidebar   activity={activity}/>)
}
<ActivityDetailedSidebar activity={activity}/>




            </Grid.Column>
        </Grid>
    )
})