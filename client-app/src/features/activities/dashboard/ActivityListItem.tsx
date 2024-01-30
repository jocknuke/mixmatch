import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Item, Button, Icon, Image, Segment, Label, Form, SegmentGroup, Grid, GridColumn, Container, GridRow, Header } from "semantic-ui-react";
import { Activity, CreateCheckoutSessionRequest } from "../../../app/models/activity";
import ActivityListItemAttendee from "./ActivityListItemAttendee";
import ActivityListItemAttendeesFollowing from "./ActivityListItemAttendeesFollowing";
import { useStore } from "../../../app/stores/store";

interface Props {
    activity: Activity
}

const activityImageStyle = {
    filter: 'brightness(50%)',
    hieght: '50px important!'
};

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};




export default function ActivityListItem({ activity }: Props) {

    const { activityStore } = useStore();

   


    return (


<Segment raised>
            <Grid stackable>
              <Grid.Column width={6} >
                <Segment vertical basic>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid  />
               
                </Segment>
                <Segment vertical basic>
                {activity.isCancelled &&
                    <Label attached='top' color='red' content='Cancelled' style={{ textAlign: 'center' }} />}
                </Segment>
               

              </Grid.Column>
              <Grid.Column width={10}>
              <Segment vertical basic>
                <Header as={Link} to={`/activities/${activity.id}`}>
            
                                {activity.title}
                         
               
              
                  

                  
               
              
         
                </Header>
                <p>
               
                </p>
                <p>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue}
                </span>
                </p>
                <span>Hosted by <Link to={`/profiles/${activity.hostUsername}`}>{activity.host?.displayName}</Link></span>

                <Button
                as={Link}
                to={`/activities/${activity.id}`}
                color='teal'
                floated='right'
                content='View Details'
            />

             
                <Item.Group>

                    <Item>
                     
                        <Item.Content>
                           
                          
                            {activity.isHost && (
                                <Item.Description>
                                    <Label basic color='orange'>
                                        You are hosting this event!
                                    </Label>
                                </Item.Description>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <Item.Description>
                                    <Label basic color='green'>
                                        You are going to this event!
                                    </Label>
                                </Item.Description>
                            )}
                        </Item.Content>
                    </Item>
                    <Item>
                 
                    




   

  
  
           
         

  
      
                  
                    </Item>
                </Item.Group>

                </Segment>

              </Grid.Column>
            </Grid>

          </Segment>





        
     
    )
}