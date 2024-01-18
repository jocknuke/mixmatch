import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegsiterForm from '../users/RegsiterForm';

import bg from '../../app/layout/images/beachvolleyball.jpg';
import ProfileContent from '../profiles/ProfileContent';
import ActivityHomeTab from '../activities/dashboard/ActivityHomeTab';

const bgStyle = {
    
    hieght: '50px important!',
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

        
        <Segment style={bgStyle} textAlign='center' vertical className='masthead text-white text-5xl md:text-8xl' >
            
            <Container text >
                <Header as='h1' style={textStyle} inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Mix and match!
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as='h2' inverted content={`Welcome back ${userStore.user?.displayName}`} />
                       
                       
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<RegsiterForm />)} size='huge' inverted>
                            Register
                        </Button>
                    </>

                )}
            </Container>
          
        </Segment>
        <Segment  >
        <Container>
            <ActivityHomeTab username={userStore.user?.username} />
            </Container>

        </Segment>
        </div>
    )
})