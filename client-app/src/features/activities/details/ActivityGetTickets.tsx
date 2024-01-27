import { Segment, List, Label, Item, Image, Button, Icon, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../../app/models/activity'
import { useState } from 'react'
import { useStore } from '../../../app/stores/store'

interface Props {
    activity: Activity
}

export default observer(function ActivityGetTickets ({activity}: Props) {

    const { activityStore: { updateAttendeance, loading, cancelActivityToggle } } = useStore();

    const IncrementDecrementBtn = {
        minValue : 0,
        maxValue : 100 

    }
    const [count, setCount] = useState(IncrementDecrementBtn.minValue);


    if (!activity) return null;

    
        
      
        const handleIncrementCounter = () => {
          if (count < IncrementDecrementBtn.maxValue) {
            setCount((prevState) => prevState + 1);
          }
        };
      
        const handleDecrementCounter = () => {
          if (count > IncrementDecrementBtn.minValue) {
            setCount((prevState) => prevState - 1);
          }
        };

    

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
    
    
        const request={

            priceId : 'price_1Obw2KJ95Zs7Wt6OtutfNARH',
		
            successUrl : '',
            
            failureUrl : ''

        }
       
      //const result= activityStore.createStripePayment(request);

      
          
    
      }

    return (
        <>






            <Segment 
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                Tickets
            </Segment>
            <Segment clearing attached >


                <Segment>
                    <Segment basic>
                    <Header floated='left' as="h3">General admission</Header>

                    <div style={{float:'right'}} >

                    <Button size='mini' onClick={handleDecrementCounter} icon >
      
      <Icon name='minus' />
    </Button>
    <span style={{ fontSize: '1.5em', lineHeight:'1.2em', fontWeight:'700', verticalAlign:'bottom', paddingLeft:'5px',  paddingRight:'8px'}} >{count}</span>
  
    <Button size='mini'  onClick={handleIncrementCounter} icon >
      <Icon name='plus' />
      
    </Button>
    </div>
  
                    </Segment>
             
                <Segment basic floated='right'>
  
  </Segment>
  <Segment basic>
  <Header as="h3">$20</Header>
  </Segment>

          
                </Segment>

            <Button fluid onClick={updateAttendeance}  color='purple' type="submit">
          Get Tickets
        </Button>
              
            </Segment>
        </>

    )
})
