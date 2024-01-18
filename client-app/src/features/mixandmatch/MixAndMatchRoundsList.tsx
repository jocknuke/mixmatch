import { Accordion, AccordionContent, AccordionTitle, Button, ButtonGroup, Card, Container, Dropdown, DropdownItem, DropdownMenu, Feed, Grid, Header, Icon, Menu, Segment, SegmentGroup } from "semantic-ui-react";
import { MixAndMatchGame, MixAndMatchPlayer, MixAndMatchRound } from "../../app/models/mixandmatchround";
import MixAndMatchListItemGame from "./MixAndMatchListItemGame";
import { Activity } from "../../app/models/activity";
import { Formik, Form, Field, FieldProps } from 'formik';
import { observer } from 'mobx-react-lite'
import { SyntheticEvent, useEffect, useState } from 'react'

import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns';
import { useStore } from "../../app/stores/store";
import { runInAction } from "mobx";
import { Link, NavLink } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";



interface Props {
  activity: Activity
}



export default observer(function MixAndMatchRoundsList({activity}: Props){

  const { mixandmatchStore } = useStore();
  const { gamesDetails, loadGamesDetails,  gameLoadingInitial, clearGamesDetails } = mixandmatchStore;
  const { groupedGamesByRoundId } = mixandmatchStore;
 
  useEffect(() => {
    if (activity.id) {
       
        mixandmatchStore.createHubConnection(activity.id);

    }

   
}, [mixandmatchStore, activity.id]);







const [activeIndexRound, setActiveIndexRound] = useState(mixandmatchStore.roundActiveIndex);
const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]



function handleTitleClick(event: React.MouseEvent<HTMLElement>, data:any) {

  
  event.preventDefault();
  const { index } = data

  
  const newIndex = activeIndexRound === index ? -1 : index
  setActiveIndexRound( newIndex )
  runInAction(() => {
    mixandmatchStore.roundActiveIndex=newIndex;
  });

}

function handleDeleteClick(event: SyntheticEvent, data: any) {

  
  event.preventDefault();
  const { group } = data

 
  const deleteGameCommand = {
    Id: Number(data),
    ActivityId: activity.id,
  };

 
  
  mixandmatchStore.deleteGame(deleteGameCommand);

}

if (gameLoadingInitial ) return <LoadingComponent />



return (

  
<>


  {groupedGamesByRoundId.map(([group, games]) => (

<SegmentGroup horizontal>


<Segment key={group}
textAlign='center'
attached='top'
inverted
color='teal'
style={{ border: 'none' }}
>



<Accordion  >


   
              <AccordionTitle position='left'
  active={ mixandmatchStore.roundActiveIndex === Number(group)}
  index={Number(group)}
  onClick={handleTitleClick}
>




  
 

                <Header>Round {group}</Header>


    

            
                </AccordionTitle>






                <AccordionContent active={ mixandmatchStore.roundActiveIndex === Number(group)}>
               
       
    <Card.Group>

  

    {games && games.map(match => (
                        <MixAndMatchListItemGame key={`${match.roundId}-${match.courtNumber}`} game={match} />
                    ))}
    
      
   

  </Card.Group>

  </AccordionContent>
  </Accordion>


  </Segment> 

  <Segment color='teal' inverted>  
    
  
      <Dropdown  icon='setting' >
        <DropdownMenu>
          
          <DropdownItem as={NavLink} to={`/manage/games?activityid=${activity.id}&roundid=${group}`} name='Edit Games' >Edit</DropdownItem>
          <DropdownItem  onClick={(e) => handleDeleteClick(e, group)}>Delete</DropdownItem>
         
         
        </DropdownMenu>
      </Dropdown>

     
   
    </Segment>

</SegmentGroup>
  
 
 
 



))}
</>

)
})