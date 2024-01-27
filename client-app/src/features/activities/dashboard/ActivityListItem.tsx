import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Item, Button, Icon, Image, Segment, Label, Form, SegmentGroup, Grid, GridColumn, Container, GridRow } from "semantic-ui-react";
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

        
        <Segment.Group>
            <Segment>
                {activity.isCancelled &&
                    <Label attached='top' color='red' content='Cancelled' style={{ textAlign: 'center' }} />}
                     <Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />

                     <Segment style={activityImageTextStyle} basic>
                <Item.Group>
                    <Item>
                    
                        <Item.Content>
                            <Item.Header style={{ color: 'white' }} as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description style={{ color: 'white' }}>Hosted by <Link to={`/profiles/${activity.hostUsername}`}>{activity.host?.displayName}</Link></Item.Description>
                            {activity.isHost && (
                                <Item.Description>
                                    <Label basic color='orange'>
                                        You are hosting this activity!
                                    </Label>
                                </Item.Description>
                            )}
                            {activity.isGoing && !activity.isHost && (
                                <Item.Description>
                                    <Label basic color='green'>
                                        You are going to this activity!
                                    </Label>
                                </Item.Description>
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
                </Segment>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                    <Icon name='marker' /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendeesFollowing attendees={activity.attendees!} />
            </Segment>
            <Segment clearing>

    <span>{activity.description}</span>
   
    
       
   
      
      
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View Details'
                />
             
   
      
            </Segment>
        </Segment.Group>
    )
}