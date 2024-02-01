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


            <>
               <HomeSlider/>
      
      <Container>
     
      
     
        <Segment vertical>
        <ActivityHomeTab  />
        </Segment>

       
      
      </Container>
   
            </>
        
        
        

      </div>
     
       
    )
})