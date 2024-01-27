import { Segment, List, Label, Item, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity
}

export default observer(function ActivityDetailedSidebar ({activity: {attendees, host}}: Props) {
    if (!attendees) return null;
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
                {attendees.length} {attendees.length === 1 ? 'Person' : 'People'} going
            </Segment>
            <Segment attached  style={{overflow: 'auto', maxHeight: 600 }}>
                <List relaxed divided style={{width:'95%'}}>
                    {attendees.map(attendee => (
                        <Item key={attendee.username} style={{ position: 'relative' }}>
                            {attendee.username === host?.username &&
                            <Label
                                style={{ position: 'absolute' }}
                                color='orange'
                                ribbon='right'
                            >
                                Host
                            </Label>}
                            <Image size='mini' src={'/assets/user.png'} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header >
                                    <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                </Item.Header>
                                {attendee.following &&
                                <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>}
                            </Item.Content>
                        </Item>
                    ))}
                </List>
            </Segment>
        </>

    )
})
