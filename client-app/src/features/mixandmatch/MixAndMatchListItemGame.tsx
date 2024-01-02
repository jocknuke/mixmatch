
import { Card, Image, Divider, Feed, Grid, Input, Header } from "semantic-ui-react";
import { MixAndMatchGame } from "../../app/models/mixandmatchround";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";


interface Props {
  game: MixAndMatchGame;


}


export default observer(function MixAndMatchListItemGame({ game }: Props) {

  const { mixandmatchStore } = useStore();

  const styles = {
    borderColor: 'violet',
    borderWidth: 3,
   
  }

  return (

    <Card>
      <Card.Content>
        <Card.Header> Court {game.courtNumber}</Card.Header>
      </Card.Content>

      <Card.Content>
      <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
        

      <Feed>
          {game.players?.filter(p=>p.team===1).map(player => (

            <Feed.Event key={player.username}>



              <Feed.Label >
                <Image size='mini'
                  style={player.gender=='F' ? styles : null}
                  bordered
                  circular
                  src={player.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${player.username}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>




          ))}
        </Feed>

        
     
     
      </Grid.Column>
      <Grid.Column>
       
      <Feed>
          {game.players?.filter(p=>p.team===2).map(player => (

            <Feed.Event key={player.username}>



              <Feed.Label >
                <Image size='mini'
 style={player.gender=='F' ? styles : null}
                  bordered
                  circular
                  src={player.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${player.username}`}
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
      <Input style={{ width: '50%' }} value={game.teamOneScore} placeholder='0' />
      </Grid.Column>
      <Grid.Column>
      <Input style={{ width: '50%' }} value={game.teamTwoScore}  placeholder='0' />
      </Grid.Column>
    
    </Grid.Row>

    </Grid>
  
      
       
      </Card.Content>

       
      </Card.Content>
    </Card>




  )
})