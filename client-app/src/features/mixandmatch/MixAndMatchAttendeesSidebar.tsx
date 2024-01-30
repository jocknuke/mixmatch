import { Segment, List, Label, Item, Image, Button, Checkbox, Container, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../app/models/activity'
import { Profile } from '../../app/models/profile'
import { MixAndMatchPlayer } from '../../app/models/mixandmatchround'
import { useState } from 'react'


interface Props {
    activity: Activity
}

export default observer(function MixAndMatchAttendeesSidebar ({activity: {attendees, host, isHost}}: Props) {

    const [players, setPlayers] = useState(getPlayers(attendees));
    const [selectAllPlayers, setselectAllPlayers] = useState(true);
  
    const updateCheckInStatus = (userId: string) => {
        setPlayers(
            players.map((player) =>
              player.appUserId === userId ? { ...player, isCheckedIn: !player.isCheckedIn } : player
            )
          );
      
          setselectAllPlayers(players.filter((x) => x.isCheckedIn === false).length < 0);
     
    };

  
    const selectAll = () => {
        setPlayers(players.map((player) => ({ ...player, isCheckedIn: true })));
      };
      const unSelectAll = () => {
        setPlayers(players.map((player) => ({ ...player, isCheckedIn: false })));
      };
    
      const handleSelectAllChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        if (event.currentTarget.checked) {
          selectAll();
        } else {
          unSelectAll();
        }
    
        setselectAllPlayers(event.currentTarget.checked);
      };

    function getPlayers(attendees:Profile[]){


       
        const players: MixAndMatchPlayer[]=[]; // result
        attendees.forEach((user) =>
          
              players.push(new MixAndMatchPlayer(user))
         
          
        );
    
        
        return players;
        
    
    
    
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
                {players.filter((x) => x.isCheckedIn === true).length} {players.filter((x) => x.isCheckedIn === true).length=== 1 ? 'Person' : 'People'} playing
            </Segment>
            <Segment attached  style={{overflow: 'auto', maxHeight: 600 }}>
            {isHost &&
                            <div className="ui checkbox">
                            <input
                              type="checkbox"
                              onChange={(e) => handleSelectAllChange(e)}
                              checked={selectAllPlayers}
                            />
                            <label>Select All</label>
                          </div>}
           


            <Table style={{width:'100%'}} basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Player</Table.HeaderCell>

        {isHost &&
        <Table.HeaderCell >Checked In</Table.HeaderCell>
}
      
      </Table.Row>
    </Table.Header>

    <Table.Body>

    {players.map(attendee => (

<Table.Row key={attendee.appUserId}>
   
                        
                        
                   


     
        <Table.Cell>
        
        <Item key={attendee.appUserId} style={{ position: 'relative' }}>
                            
                            
                            <Item.Content verticalAlign='middle'>
                                <Item.Header >
                                {attendee.username === host?.username &&
                            <Label
                                
                                color='orange'
                                
                            >
                                Host
                            </Label>}
                                    <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                </Item.Header>
                   
                            </Item.Content>
                        </Item>

         
        </Table.Cell>
        {isHost &&
        <Table.Cell>


        <Checkbox
                  className=""
                  toggle
                 
                  checked={attendee.isCheckedIn}
                  onChange={() => updateCheckInStatus(attendee.appUserId)}
                
                />


        </Table.Cell>
}
      </Table.Row>

))}




</Table.Body>
</Table>

                   
            </Segment>
        </>

    )
})
