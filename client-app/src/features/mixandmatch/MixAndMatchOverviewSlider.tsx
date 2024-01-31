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



export default function MixAndMatchOverviewSlider() {
   
    const slickSettings = {
      autoplaySpeed:3000,
      autoplay: true,
      dots: true,
      speed: 1500,
      };

     
    return (

        <Slider {...slickSettings} >


<div>
<Image
              
              
             
              src={'/assets/mm_mobile.png'}
            />
          </div>
          <div>
          <Image
              
              
           
              src={'/assets/mm_mobile.png'}
            />
          </div>
          <div>
          <Image
              
              
             
              src={'/assets/mm_mobile.png'}
            />
          </div>
          <div>
          <Image
              
              
             
              src={'/assets/mm_mobile.png'}
            />
          </div>
         
         
            
            </Slider>




    )

    }