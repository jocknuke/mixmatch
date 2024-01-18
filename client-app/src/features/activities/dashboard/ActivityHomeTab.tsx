import React, { SyntheticEvent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Tab, Grid, Header, Card, Image, TabProps, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';
import { useStore } from '../../../app/stores/store';
import { UserActivity } from '../../../app/models/profile';


const panes = [
    { menuItem: 'Popular Events', pane: { key: 'popular' } },
    { menuItem: 'Future Events', pane: { key: 'future' } },
    
    { menuItem: 'Participating', pane: { key: 'participating' } }
];

interface Props {
    username: string | undefined
}

export default observer(function ActivityHomeTab({ username }: Props) {
    const { profileStore } = useStore();
    const {
        loadUserActivities,
        profile,
        loadingActivities,
        userActivities
    } = profileStore;

    useEffect(() => {
        if(username != undefined)
        loadUserActivities(username);
    }, [loadUserActivities, profile]);

   

    const handleTabChange = (e: SyntheticEvent, data: TabProps) => {
        alert('tab')
        loadUserActivities(profile!.username, panes[data.activeIndex as number].pane.key);
    };



    return (
        <Tab.Pane loading={loadingActivities}>
            <Grid stackable>
                <Grid.Column width={16}>
                    <Header floated='left'  content={'Best events in Charlotte'} />

                    <Button  as={Link} to='/activities' size='small' >
                            Go to all events!
                        </Button>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Tab
                        panes={panes}
                        menu={{ secondary: true, pointing: true }}
                        onTabChange={(e, data) => handleTabChange(e, data)}
                    />
                    
                    <br />
                    <Card.Group itemsPerRow={4}>
                        {userActivities.map((activity: UserActivity) => (
                            <Card
                                as={Link}
                                to={`/activities/${activity.id}`}
                                key={activity.id}
                            >
                                <Image
                                    src={`/assets/categoryImages/${activity.category}.jpg`}
                                    style={{ minHeight: 100, objectFit: 'cover' }}
                                />
                                <Card.Content>
                                    <Card.Header textAlign='center'>{activity.title}</Card.Header>
                                    <Card.Meta textAlign='center'>
                                        <div>{format(new Date(activity.date), 'do LLL')}</div>
                                        <div>{format(new Date(activity.date), 'h:mm a')}</div>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                        ))}

                       
                    
                       
                      
                    </Card.Group>

                </Grid.Column>
            </Grid>
        </Tab.Pane>
    );
});