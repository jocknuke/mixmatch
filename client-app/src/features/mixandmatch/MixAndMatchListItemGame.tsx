
import { Card, Image, Divider, Feed, Grid, Input, Header, Button, RevealContent, Reveal, ButtonContent, Icon, List, ListItem } from "semantic-ui-react";
import { MixAndMatchGame } from "../../app/models/mixandmatchround";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { SyntheticEvent, useState } from "react";
import { Form } from "react-router-dom";
import { getuid } from "process";


interface Props {
  game: MixAndMatchGame;



}


const show = {

  display: 'block'
 
}
const hide = {
  display:'none'
 
}


export default observer(function MixAndMatchListItemGame({ game }: Props) {

  const { mixandmatchStore } = useStore();



  const [_game, setGameScore] = useState<MixAndMatchGame>(game);
// React state to manage visibility
  const [showForm, setShowForm] = useState(false);
 
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setGameScore({ ..._game, [name]: parseInt(value) });
  }

  // function to toggle the boolean value
  

  const toggleShow: React.MouseEventHandler<HTMLButtonElement> = (e) => {
 
    e.preventDefault();

   
    setShowForm(!showForm);
    
};


  

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

   
      

      const data={

        mixAndMatchGame:_game,
       

      }

      console.log(data);

      

      

    mixandmatchStore.updateGame(data);

    setShowForm(!showForm);

  }



  const female = {
    borderColor: 'violet',
    borderWidth: 3,
   
  }
  const male = {
    borderColor: 'lightblue',
    borderWidth: 3,
   
  }

  return (

    <Card  >
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
                  style={player.gender=='F' ? female : male}
                  bordered
                  circular
                  src={player.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${player.displayName}`}
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
 style={player.gender=='F' ? female : male}
                  bordered
                  circular
                  src={player.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${player.displayName}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>


          ))}
        </Feed>
       
        
       
      </Grid.Column>
      
    </Grid.Row>
</Grid>
<Divider clearing horizontal>
      <Header as='h4'>
        
        Score
      </Header>
    </Divider>


  
   

    <Card.Content  style={showForm? hide : show}>
   

    <Grid >
    <Grid.Row>
      <Grid.Column width={4}>
      
      </Grid.Column>
      <Grid.Column width={8}>
   
   
      <List horizontal>
    <ListItem>   <Header>{_game.teamOneScore}</Header></ListItem>
    <ListItem> <Header as='h3'>X</Header></ListItem>
    <ListItem> <Header>{_game.teamTwoScore}</Header></ListItem>
  </List>

      </Grid.Column>

      <Grid.Column width={2}>
      <Button animated='vertical' size="mini" onClick={toggleShow}>
      <ButtonContent hidden>Edit</ButtonContent>
      <ButtonContent visible>
        <Icon name='pencil' />
      </ButtonContent>
    </Button>
      </Grid.Column>
    
    </Grid.Row>

    </Grid>
   
     
     
 


     
    



     
      </Card.Content>
    <Card.Content  style={showForm? show : hide}>
   
    

  
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
  
        <button className="ui button">Save score</button>
        <button onClick={toggleShow} className="ui button">Cancel</button>
        </Card.Content>





</Form>


 </Card.Content>




 


    

       
      </Card.Content>
    </Card>




  )
})