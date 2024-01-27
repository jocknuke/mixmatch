import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image, Grid, Menu, Dropdown, Icon } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegsiterForm from '../users/RegsiterForm';


import ProfileContent from '../profiles/ProfileContent';
import ActivityHomeTab from '../activities/dashboard/ActivityHomeTab';
import Slider from "react-slick";
import HomeSlider from './HomeSlider';
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../../app/layout/NavBar';

import bg from '../../app/layout/images/beachvolleyball.jpg';
const bgStyle = {
    
    hieght: '100% important!',
    backgroundImage:`linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(${bg})`, 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover' ,
     
      

};

const bgActivitiesStyle={

    backgroundImage: `linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )`
}


const textStyle = {
    filter: 'brightness(100%)',
   

};



export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile, setActiveTab} = profileStore;

   
     
    
    return (











        <div >

{userStore.isLoggedIn ? (
            <>
               <HomeSlider/>
      
      <Container>
        <Segment vertical>
          <Grid container stackable  columns={3}>
          <Grid.Row >
            <Grid.Column>
              
              <Header as="h1">Dynamic Teams:</Header>
              <p  style={{textAlign:'left'}}>
              
 Allow event planners to build teams dynamically based on prebuilt sports/special events templates or specific requirements.
<br/>Drag-and-drop functionality for easy adjustments.
<br/>Real-time score updates 
              </p>

           
           
                  

              
             
            
            </Grid.Column>
            <Grid.Column>

          
            <Header as="h1">Communication Hub:</Header>
              <p style={{textAlign:'left'}}>
              

Send invitations, updates, and reminders via email or SMS directly from the system.
Instant messaging features for real-time communication during the event.
              </p>

            
        
              

             
              
             
            </Grid.Column>
            <Grid.Column>
            

              <Header as="h1">Create a Community</Header>
              <p style={{textAlign:'left'}}>
                Create your own private social network of friends and followers. 
              </p>
            

             
             
                  

             
              
             
            </Grid.Column>
            </Grid.Row>
            <Grid.Row >
            <Grid.Column>
              
              
           
              <Button basic>View details &raquo;</Button>
                  

              
             
            
            </Grid.Column>
            <Grid.Column>

          
           
            
            <Button basic>View details &raquo;</Button>
              

             
              
             
            </Grid.Column>
            <Grid.Column>
            

            

             
              <Button basic>View details &raquo;</Button>
                  

             
              
             
            </Grid.Column>
            </Grid.Row>







            
          </Grid>
        </Segment>
      
     
        <Segment vertical>
        <ActivityHomeTab  />
        </Segment>
        <Segment vertical>
          <Grid columns={2}>
            <Grid.Column>
              &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
              <a href="#root">Terms</a>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <a href="#root">Back to top</a>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
   
            </>
        ) : (

            <div style={bgStyle}>

              <Segment  textAlign='center' vertical className='homeloggedin' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Mix and match!
                </Header>
                <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<RegsiterForm />)} size='huge' inverted>
                            Register
                        </Button>
            </Container>
        </Segment>
        </div>
        )}

      </div>
     
       
    )
})