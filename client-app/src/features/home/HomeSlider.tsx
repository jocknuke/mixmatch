import Slider from "react-slick";
import { Button, Container, Grid, Header, Image, Item, List, Segment } from "semantic-ui-react";

import bg from '../../app/layout/images/beachvolleyball.jpg';
import bg2 from '../../app/layout/images/clt_night.jpg';
import bg3 from '../../app/layout/images/soccer.jpg';

const bgStyle = {
    
    hieght: '100% important!',
    backgroundImage:`linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(${bg})`, 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover' ,
     
      

};



export default function HomeSlider() {
   
    const slickSettings = {
        autoplaySpeed:5000,
        autoplay: true,
        dots: true,
        speed: 1500,
        fade:true
      };

      const activityImageStyle = {
        filter: 'brightness(50%)',
        hieght: '50px important!'
    };
    
    const activityImageTextStyle = {
        position: 'absolute',
        bottom: '5%',
        left: '25%',
        right: '5%',
        width: '50%',
        height: 'auto',
        color: 'white',
        
        backgroundColor:'#3c373757',
        border:'0',
    };

    return (

        <Slider {...slickSettings} className="slide">



<div className="slide">
<div style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bg})`,
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>



              <Segment style={activityImageTextStyle}>
              <Container text className="active">
              <Header inverted as="h1">
               Sports and Social Events Management System
              </Header>
              <p>
              With intuitive navigation and robust functionality, 
              for event planners seeking efficiency and precision in every aspect of event management.
              </p>
            
            </Container>
              </Segment>
     

</div>

     </div>

     <div className="slide">
<div style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .0), rgba(0, 0, 0, 0)), url(${bg2})`,
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>



              <Segment style={activityImageTextStyle}>
              <Container text className="active">
              <Header inverted as="h1">
               Sports and Social Events Management System
              </Header>
              <p>
              With intuitive navigation and robust functionality, 
              for event planners seeking efficiency and precision in every aspect of event management.
              </p>
            
            </Container>
              </Segment>
     

</div>

     </div>

     <div className="slide">
<div style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bg3})`,
    width: '100%',
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  }}>



              <Segment style={activityImageTextStyle}>
              <Container text className="active">
              <Header inverted as="h1">
               Sports and Social Events Management System
              </Header>
              <p>
              With intuitive navigation and robust functionality, 
              for event planners seeking efficiency and precision in every aspect of event management.
              </p>
             
            </Container>
              </Segment>
     

</div>

     </div>


  
            
            </Slider>




    )

    }