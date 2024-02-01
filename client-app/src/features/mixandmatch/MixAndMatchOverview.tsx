import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image, Grid, Menu, Dropdown, Icon, Divider, List } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegsiterForm from '../users/RegsiterForm';


import ProfileContent from '../profiles/ProfileContent';
import ActivityHomeTab from '../activities/dashboard/ActivityHomeTab';
import Slider from "react-slick";
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../../app/layout/NavBar';

import bg from '../../app/layout/images/beachvolleyball.jpg';
import MixAndMatchOverviewSlider from './MixAndMatchOverviewSlider';
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



export default observer(function MixAndMatchOverview() {
    const { userStore, modalStore } = useStore();
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile, setActiveTab} = profileStore;

   
     
    
    return (











        <div >


<Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Mix & Match Dashboard and Event Page
            </Header>
            <p style={{ fontSize: "1.33em" }}>
             Hosts of these events will have access to managemnet tools to create games with just one click. 
           
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Game scores and chats are updated real time
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Players connected to this page will recieve the games updates and notifications without refreshing.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Scoreboard updated automatically
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              When a score is modified, the points are asigned to the teams. A seeding is created and top players are qualified to playoffs.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={10}>
           

          <Image
              
              
             
              src={'/assets/mm_dash.png'}
            />
           
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
          <Segment vertical style={{  marginTop: 25 }}>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column>
              
              <Header as="h1">Dynamic Teams:</Header>
              <p  style={{textAlign:'left', fontSize: "1.33em"}}>
              
              Allow event planners to build teams dynamically based on prebuilt sports/special events templates or specific requirements.
             <br/>Drag-and-drop functionality for easy adjustments.
             <br/>Real-time score updates 
                           </p>
              
              </Grid.Column>
              <Grid.Column>
            
              <Header as="h1">Communication Hub:</Header>
              <p style={{textAlign:'left', fontSize: "1.33em"}}>
              

              Send invitations, updates, and reminders via email or SMS directly from the system.
              Instant messaging features for real-time communication during the event.
                            </p>
               
              </Grid.Column>
              <Grid.Column>
              
              <Header as="h1">Create a Community</Header>
              <p style={{textAlign:'left', fontSize: "1.33em"}}>
                Create your own private social network of friends and followers. 
              </p>
            
              
              </Grid.Column>
            </Grid>
          </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Secure Ticket Payments"
            </Header>
            <Image
              
              
             
              src={'/assets/mm_pay.png'}
            />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Players can add score"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            <Image
              
              
             
              src={'/assets/mm_mobile.png'}
            />
             
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Digital tickets"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            <Image
              
              
             
              src={'/assets/mm_checkin.png'}
            />
             
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Drag and Drop
        </Header>
        <p style={{ fontSize: "1.33em" }}>
        There are few pre built game settings but with drag and drop functionality, hosts can modify games freely.
        </p>
          <Image
              
              
             
              src={'/assets/mm_drag.png'}
            />

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#root">Live Demo</a>
        </Divider>

        <Segment style={{ padding: "1em 0em" }} vertical>
      <Container textAlign="center" >

        <Button
                as={Link}
                to={`/activities`}
                color='teal'
                content='View Events'
            />
</Container>
</Segment>



<Segment basic>
        <Header as="h3" style={{ fontSize: "2em" }}>
         This this a demo application in beta
        </Header>
        <p style={{ fontSize: "1em" }}>
        A learning experience through the integration of cutting-edge technologies. 
        including artificial intelligence, cloud services, innovative software architecture and modern frontend design.
        </p>
        </Segment>



        <Segment >
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfoBb2BgaOmu7vLsLSKKb9iVJp5WLX7278DQHdA-nMNQgWZIA/viewform?embedded=true" width="640" height="1069" frameBorder="0" >Loading…</iframe>
        </Segment>
      </Container>
    </Segment>

  
        
        

      </div>
     
       
    )
})