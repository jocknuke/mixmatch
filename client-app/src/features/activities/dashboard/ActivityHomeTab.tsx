import React, { SyntheticEvent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Tab, Grid, Header, Card, Image, TabProps, Button, CardContent, CardHeader, CardMeta, CardDescription, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';
import { useStore } from '../../../app/stores/store';
import { UserActivity } from '../../../app/models/profile';
import { Activity } from '../../../app/models/activity';


const panes = [
    { menuItem: 'Popular Events', pane: { key: 'popular' } },
    { menuItem: 'Future Events', pane: { key: 'future' } },
    
    { menuItem: 'Participating', pane: { key: 'isgoing' } }
];



export default observer(function ActivityHomeTab() {


    const { activityStore } = useStore();
    const {
        loadHomeActivities,
        loadingInitial,
        homeActivities
    } = activityStore;

    useEffect(() => {
        
        loadHomeActivities();
    }, [loadHomeActivities]);

   

    const handleTabChange = (e: SyntheticEvent, data: TabProps) => {
       
        loadHomeActivities(panes[data.activeIndex as number].pane.key);
    };



    return (
        <Tab.Pane loading={loadingInitial}>
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
                    <Card.Group >
                        {homeActivities.map((activity: Activity) => (
                            <>




<Card   as={Link}
                                to={`/activities/${activity.id}`}
                                key={activity.id}>
                            <Image  src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
                            <CardContent>
                              <CardHeader>{activity.title}</CardHeader>
                              <CardMeta>  <div>{format(new Date(activity.date!), 'do LLL')}</div>
                                        <div>{format(new Date(activity.date!), 'h:mm a')}</div>
                                        </CardMeta>
                              <CardDescription>
                              {activity.description}
                              </CardDescription>
                            </CardContent>
                            <CardContent extra>
                              <a>
                                <Icon name='user' />
                                10 following
                              </a>
                            </CardContent>
                          </Card>
                            
                            </>
                           
                        ))}

                       
                    
                       
                      
                    </Card.Group>

                </Grid.Column>
            </Grid>
        </Tab.Pane>
    );
});