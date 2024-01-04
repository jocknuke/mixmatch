import { Card, Feed, Header, Segment } from "semantic-ui-react";
import { MixAndMatchGame, MixAndMatchPlayer, MixAndMatchRound } from "../../app/models/mixandmatchround";
import MixAndMatchListItemGame from "./MixAndMatchListItemGame";
import { Activity } from "../../app/models/activity";
import { Formik, Form, Field, FieldProps } from 'formik';
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns';
import { useStore } from "../../app/stores/store";



interface Props {
  activity: Activity
}



export default observer(function MixAndMatchRoundsList({activity}: Props){

  const { mixandmatchStore } = useStore();
  const { groupedGamesByRoundId } = mixandmatchStore;
 
  useEffect(() => {
    if (activity.id) {
       
        mixandmatchStore.createHubConnection(activity.id);

    };
    return () => {
     mixandmatchStore.clearGames();
    }
}, [mixandmatchStore, activity.id]);


return (

  
<>


  {groupedGamesByRoundId.map(([group, games]) => (

 

    <Segment key={group}
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{ border: 'none' }}
            >
                <Header>Round {group}</Header>
            
        


        
    <Card.Group>


    {games && games.map(match => (
                        <MixAndMatchListItemGame key={`${match.roundId}-${match.courtNumber}`} game={match} />
                    ))}
    
      
   

  </Card.Group>

  </Segment> 



))}
</>

)
})