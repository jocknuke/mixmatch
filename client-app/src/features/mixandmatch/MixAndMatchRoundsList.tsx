import { Card, Feed, Header, Segment } from "semantic-ui-react";
import { MixAndMatchGame, MixAndMatchRound } from "../../app/models/mixandmatchround";
import MixAndMatchListItemGame from "./MixAndMatchListItemGame";
import { Activity } from "../../app/models/activity";



interface Props {
  round:MixAndMatchRound;
  activity: Activity
}


export default function MixAndMatchRoundsList({round, activity}: Props){

  




return (

    <Segment
                textAlign='center'
                attached='top'
                inverted
                color='teal'
                style={{ border: 'none' }}
            >
                <Header>Round {round.id}</Header>
            
        


        
    <Card.Group>

    {round.games && round.games.map(match => (
                        <MixAndMatchListItemGame game={match}/>
                    ))}
      


   

  </Card.Group>

  </Segment> 
)
}