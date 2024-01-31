import { observer } from 'mobx-react-lite';


import { Button, Container, Header, Segment } from "semantic-ui-react";
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegsiterForm from '../users/RegsiterForm';


import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import bg from '../../app/layout/images/beachvolleyball.jpg';
const bgStyle = {
    
    hieght: '100% important!',
    backgroundImage:`linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(${bg})`, 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover' ,
     
      

};





export default observer(function RegisterPage() {
    const {  modalStore } = useStore();
    
  

   
     
    
    return (



      <div >

            <div style={bgStyle}>

              <Segment  textAlign='center' vertical className='homeloggedin' >
            <Container text>
                <Header as='h1' inverted>
                   
                    Welcome to GameFlow
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
     
        </div>
     
       
    )
})