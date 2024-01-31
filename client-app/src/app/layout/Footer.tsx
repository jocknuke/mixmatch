import { NavLink } from "react-router-dom";
import { Container, Divider, Grid, Header, List, Segment } from "semantic-ui-react";


export default function Footer() {
   
    return (

      <>





        <Segment inverted vertical style={{ marginTop: '5em' }}>

    
<Container>

  <Grid divided inverted stackable>
  
  <Grid.Row>
  <Grid.Column width={16}>
  <Segment  vertical>
          <Grid columns={2}>
            <Grid.Column>
            
            </Grid.Column>
            <Grid.Column textAlign="right">
              <a href="#root">Back to top</a>
            </Grid.Column>
          </Grid>
        </Segment>
        </Grid.Column>
  </Grid.Row>
    <Grid.Row>
      <Grid.Column width={3}>
        <Header inverted as='h4' content='About' />
        <List link inverted>
       
          <List.Item as={NavLink} to='/contact'>Contact Us</List.Item>
       
        </List>
      </Grid.Column>
     
      
    </Grid.Row>
  </Grid>
</Container>
</Segment>
      
      
      </>



    )

    }