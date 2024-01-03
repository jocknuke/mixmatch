
import { Card, Image, Divider, Feed, Grid, Input, Header, Button } from "semantic-ui-react";
import { MixAndMatchGame } from "../../app/models/mixandmatchround";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent, useState } from "react";
import { Form } from "react-router-dom";
import { getuid } from "process";


interface Props {
  game: MixAndMatchGame;



}


export default observer(function MixAndMatchListItemGame({ game }: Props) {

  const { mixandmatchStore } = useStore();



  const [_game, setGameScore] = useState<MixAndMatchGame>(game);

 
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setGameScore({ ..._game, [name]: parseInt(value) });
  }



  

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

   
      

      const data={

        mixAndMatchGame:_game,
       

      }

     

      

      

    mixandmatchStore.updateGame(data);

  }



  const styles = {
    borderColor: 'violet',
    borderWidth: 3,
   
  }

  return (

    <Card>
      <Card.Content>
        <Card.Header> Court {_game.courtNumber}</Card.Header>
      </Card.Content>

      <Card.Content>
      <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
        

      <Feed>
          {_game.players?.filter(p=>p.team===1).map(player => (

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
          {_game.players?.filter(p=>p.team===2).map(player => (

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

<Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>


<Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
      <Input name='teamOneScore' style={{ width: '50%' }} value={_game.teamOneScore} onChange={handleInputChange} placeholder='0' />
      </Grid.Column>
      <Grid.Column>
      <Input name='teamTwoScore' style={{ width: '50%' }} value={_game.teamTwoScore} onChange={handleInputChange} placeholder='0' />
      </Grid.Column>
    
    </Grid.Row>

    </Grid>

    <Divider horizontal>
      
      </Divider>
  
        <Card.Content>
  
        <button className="ui fluid button">Save score</button>
        </Card.Content>

</Form>


      </Card.Content>
    

       
      </Card.Content>
    </Card>




  )
})