import React from 'react';
import { Image, Label, List, Popup } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';
import ProfileCard from '../../profiles/ProfileCard';

interface Props {
    attendees: Profile[];
}



export default observer(function ActivityListItemAttendeeFolowing({ attendees }: Props) {
    const styles = {
        borderColor: 'orange',
        borderWidth: 2,
        width: '2em',
        height: 'auto'
    }
    return (
<>
   
       {
 attendees.filter(x=>x.following).length>0  && ( <>People I follow are going to this event:  </>)
}
         
       
        <List horizontal>
            {attendees.filter(x=>x.following).map(attendee => (
                <Popup
                    hoverable
                    key={attendee.username}
                    trigger={
                        <List.Item as={Link} to={`/profiles/${attendee.username}`}>
                            <Image size='mini'
                                style={attendee.following ? styles : {width: '1.5em', height: 'auto'}}
                                bordered
                                circular
                                src={attendee.image || `/assets/user.png`} />
                        </List.Item>
                    }
                >
                    <Popup.Content>
                        <ProfileCard profile={attendee} />
                    </Popup.Content>
                </Popup>
            ))}
        </List>

        </>
    )
})