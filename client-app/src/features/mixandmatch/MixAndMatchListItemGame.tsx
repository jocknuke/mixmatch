import React from 'react';
import { Card, Image, List, Divider, Feed, Grid, Input, Header, Icon } from "semantic-ui-react";
import { MixAndMatchGame } from "../../app/models/mixandmatchround";
import { Profile } from "../../app/models/profile";
import { Link } from 'react-router-dom';

interface Props {
  game: MixAndMatchGame;


}

export default function MixAndMatchListItemGame({ game }: Props) {

  return (

    <Card>
      <Card.Content>
        <Card.Header> Court {game.courtid}</Card.Header>
      </Card.Content>

      <Card.Content>
      <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
        

      <Feed>
          {game.teamOne?.map(attendee => (

            <Feed.Event>



              <Feed.Label >
                <Image size='mini'

                  bordered
                  circular
                  src={attendee.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${attendee.username}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>




          ))}
        </Feed>

        
     
     
      </Grid.Column>
      <Grid.Column>
       
      <Feed>
          {game.teamTwo?.map(attendee => (

            <Feed.Event>



              <Feed.Label >
                <Image size='mini'

                  bordered
                  circular
                  src={attendee.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${attendee.username}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>


          ))}
        </Feed>
       
        
       
      </Grid.Column>
      
    </Grid.Row>
</Grid>
<Divider horizontal>
      <Header as='h4'>
        
        Score
      </Header>
    </Divider>
<Card.Content>

<Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
      <Input style={{ width: '60px' }} placeholder='0' />
      </Grid.Column>
      <Grid.Column>
      <Input style={{ width: '60px' }} placeholder='0' />
      </Grid.Column>
    
    </Grid.Row>

    </Grid>
  
      
       
      </Card.Content>

       
      </Card.Content>
    </Card>




  )
}