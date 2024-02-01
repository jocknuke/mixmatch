import { Header, Segment } from "semantic-ui-react";

const divStyle = {
    
    height: '100% important!',
    
     
      

};


export default function FeedbackForm() {
  
    
  

   
     
    
    return (

<div style={divStyle}>

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
     
        </div>
     
       
    )
}