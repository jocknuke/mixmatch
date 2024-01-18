import { Segment, List, Label, Item, Image, Feed, Table, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Activity } from '../../app/models/activity'
import { useStore } from '../../app/stores/store'
import { useEffect, useState } from 'react'
import { MixAndMatchGame, MixAndMatchPlayer } from '../../app/models/mixandmatchround'


interface Props {
    activity: Activity
}

function getPlayersBoard(games:MixAndMatchGame[]){


    const playersIdx:any = {}; // variables for indexing
    const players: MixAndMatchPlayer[]=[]; // result
    games.forEach((game) =>
      game.players.forEach((player) => {
        const findPlayer = playersIdx[player.appUserId] ?? -1;
        const point =  player.team === 1 ? game.teamOneScore : game.teamTwoScore;
        
        if (findPlayer > -1) {
          players[findPlayer].totalPoints += point;
        
        } else {
          const newPlayer = { ...player, totalPoints: point }
          delete newPlayer.team
          players.push(newPlayer);
          playersIdx[player.appUserId] = players.length - 1;
        }
      })
    );

    players.sort( function ( a, b ) { return b.totalPoints - a.totalPoints; } );

    return players;
    



}


export default observer(function MixAndMatchPlayersSidebar ({activity}: Props) {
    
    let players:MixAndMatchPlayer[]=[];

    const { mixandmatchStore } = useStore();






    players=getPlayersBoard(mixandmatchStore.games);

    
    

    const styles = {
        borderColor: 'violet',
        borderWidth: 3,
       
      }
    if (!activity.attendees) return null;
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
                Scoreboard
            </Segment>
            <Segment attached style={{overflow: 'auto', maxHeight: 600 }}>

            <Table style={{width:'100%'}} basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Player</Table.HeaderCell>
        <Table.HeaderCell>Total</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

    {players.map(attendee => (

<Table.Row key={attendee.appUserId}>
   
                        
                        
                   


     
        <Table.Cell>
        
        <Item key={attendee.appUserId} style={{ position: 'relative' }}>
                            
                            
                            <Item.Content verticalAlign='middle'>
                                <Item.Header >
                                    <Link to={`/profiles/${attendee.username}`}>{attendee.displayName}</Link>
                                </Item.Header>
                                
                            </Item.Content>
                        </Item>

         
        </Table.Cell>
        <Table.Cell>


        {attendee.totalPoints}


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
