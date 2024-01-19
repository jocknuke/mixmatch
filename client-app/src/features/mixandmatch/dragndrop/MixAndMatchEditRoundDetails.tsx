import { Button, Card, Feed, Grid, Header, Icon, Image, Label, Segment, Sticky } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams, useSearchParams } from "react-router-dom";
import { createRef, useEffect, useState } from "react";

import ActivityDetailedSidebar from "../../activities/details/ActivityDetailedSidebar";
import MixAndMatchRoundsList from "../MixAndMatchRoundsList";
import ActivityDetailedHeader from "../../activities/details/ActivityDetailedHeader";
import ActivityDetailedInfo from "../../activities/details/ActivityDetailedInfo";
import MixAndMatchListItemGame from "../MixAndMatchListItemGame";
import Dragndrop from "./dragndrop";

import { DragDropContext, Droppable, Draggable, DropResult, DragUpdate, DraggableLocation } from 'react-beautiful-dnd'; 
import { MixAndMatchGame, MixAndMatchGameDragAndDrop } from "../../../app/models/mixandmatchround";
import MixAndMatchEditRoundList from "./MixAndMatchEditRoundList";
import MixAndMatchEditForm from "./MixAndMatchEditForm";




interface Item {
    id: string;
    content: string;
  }

 








function getCourtsAndTeams(games:MixAndMatchGame[]){


    
    const courts: MixAndMatchGameDragAndDrop[]=[]; // result
    games.forEach((game) =>
      
    courts.push(new MixAndMatchGameDragAndDrop(game))
    );

   

    return courts;
    



}







export default observer(function MixAndMatchEditRoundDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    const { mixandmatchStore } = useStore();
    const { gamesDetails, loadGamesDetails,  gameLoadingInitial, clearGamesDetails } = mixandmatchStore;
    
    
    const [searchParams, setSearchParams] = useSearchParams();
   
   const activityid=searchParams.get('activityid');
   const roundid=searchParams.get('roundid');
 

   useEffect(() => {
    if (activityid) {
        
        loadActivity(activityid);
        
        ;
        return () => {clearSelectedActivity();
           
        }
    }
   
   
  }, [activityid,loadActivity]);

    
  
   
  useEffect(() => {
    if (Number(roundid) && activityid) {
       
        loadGamesDetails(activityid,Number(roundid));
    
    };
    return () => {clearGamesDetails();
       
    }
    
   
}, [roundid,loadGamesDetails, clearGamesDetails]);

   
const updateRound = () => {

alert()



}


 if (loadingInitial || gameLoadingInitial || !activity || !gamesDetails ) return <LoadingComponent />

    

   
    

    return (


        <Grid columns={2} stackable>
            <Grid.Column width='10'>
            <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />

                <Segment
textAlign='center'
attached='top'
inverted
color='teal'
style={{ border: 'none', outerWidth:'' }

}
>

                <Card.Group>

                    <MixAndMatchEditRoundList activityid={activity.id}  games={getCourtsAndTeams(gamesDetails)}/>

  



</Card.Group>

<Card.Group>

    
</Card.Group>
                  
</Segment>     

            </Grid.Column>
            <Grid.Column width='6'>
           
              

             
               
<MixAndMatchEditForm handleUpdateRound={updateRound}  />

<ActivityDetailedSidebar activity={activity}/>




            </Grid.Column>
        </Grid>
    )
})