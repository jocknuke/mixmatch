import { Segment, List, Label, Item, Image, Feed, Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../app/models/activity'


interface Props {
    activity: Activity
}


export default observer(function MixAndMatchPlayersSidebar ({activity: {attendees, host}}: Props) {
    const styles = {
        borderColor: 'violet',
        borderWidth: 3,
       
      }
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
            <Segment attached style={{overflow: 'auto', maxHeight: 600 }}>

            <Table style={{width:'100%'}} basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Player</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

    {attendees.map(attendee => (

<Table.Row>
   
                        
                        
                   


     
        <Table.Cell>
        
        <Item key={attendee.username} style={{ position: 'relative' }}>
                            
                            <Image 
                             style={attendee.gender=='F' ? styles : null}
                             bordered
                             circular
                            size='mini' 
                            src={'/assets/user.png'} />
                            <Item.Content verticalAlign='middle'>
                                <Item.Header >
                                    <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                </Item.Header>
                                {attendee.following &&
                                <Item.Extra style={{ color: 'orange' }}>Following</Item.Extra>}
                            </Item.Content>
                        </Item>

         
        </Table.Cell>
        <Table.Cell>


21


        </Table.Cell>
      </Table.Row>

))}




</Table.Body>
</Table>
            <Feed>
                <List relaxed divided>
                   
                </List>
                </Feed>
            </Segment>
        </>

    )
})
