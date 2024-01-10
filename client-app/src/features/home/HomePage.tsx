import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegsiterForm from '../users/RegsiterForm';

import bg from '../../app/layout/images/beachvolleyball.jpg';

const bgStyle = {
    
    hieght: '50px important!',
    backgroundImage:`linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(${bg})`, 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover' 

};

const textStyle = {
    filter: 'brightness(100%)',
   

};

export default observer(function HomePage() {
    const { userStore, modalStore } = useStore();
    
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
                        <Button as={Link} to='/activities' size='huge' inverted>
                            Go to activities!
                        </Button>
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
        </div>
    )
})