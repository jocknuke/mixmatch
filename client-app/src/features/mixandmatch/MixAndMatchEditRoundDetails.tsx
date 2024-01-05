import { Grid, Header, Sticky } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { useParams, useSearchParams } from "react-router-dom";
import { createRef, useEffect, useState } from "react";






import ActivityDetailedSidebar from "../activities/details/ActivityDetailedSidebar";
import MixAndMatchRoundsList from "./MixAndMatchRoundsList";
import ActivityDetailedHeader from "../activities/details/ActivityDetailedHeader";
import ActivityDetailedInfo from "../activities/details/ActivityDetailedInfo";





export default observer(function MixAndMatchEditRoundDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    
    const [searchParams, setSearchParams] = useSearchParams();
   
   const activityid=searchParams.get('activityid');
   const roundid=searchParams.get('roundid');




    

    useEffect(() => {
        if (activityid) {
            
            loadActivity(activityid);
        
        };
        return () => {clearSelectedActivity();
       
        }
       
    }, [activityid,loadActivity, clearSelectedActivity]);

   
   


    
   
    if (loadingInitial || !activity ) return <LoadingComponent />

  

   
    

    return (
        <Grid columns={2} stackable>
            <Grid.Column width='10'>
            <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />

                <MixAndMatchRoundsList  activity={activity} />
                  
               

            </Grid.Column>
            <Grid.Column width='6'>
           
              

             
               


<ActivityDetailedSidebar activity={activity}/>




            </Grid.Column>
        </Grid>
    )
})