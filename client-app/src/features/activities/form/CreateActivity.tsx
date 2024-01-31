import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Segment} from "semantic-ui-react";


import "semantic-ui-css/semantic.min.css";
import ActivityForm from './ActivityForm';





export default observer(function CreateActivity() {
   
   
    
     
    
    return (





        <div >


            <>
           
      
      <Container>
      <Segment vertical style={{  marginTop: 25 }}>


       <ActivityForm/>

     </Segment>
      
     
      

     
      
      </Container>
   
            </>
        
        
        
          
      </div>
     
       
    )
})