import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { MixAndMatchGame, MixAndMatchGameDragAndDrop, MixAndMatchPlayer } from "../../../app/models/mixandmatchround";
import { DragDropContext, Draggable, DraggableLocation, DropResult, Droppable } from "react-beautiful-dnd";
import { Button, Card, Divider, Feed, Form, Grid, Icon, Image, Segment } from "semantic-ui-react";
import ActivityDetailedHeader from "../../activities/details/ActivityDetailedHeader";
import ActivityDetailedInfo from "../../activities/details/ActivityDetailedInfo";
import { Activity } from "../../../app/models/activity";
import ActivityDetailedSidebar from "../../activities/details/ActivityDetailedSidebar";
import MixAndMatchStore from "../../../app/stores/mixandMatchStore";
import { useStore } from "../../../app/stores/store";
import { NavLink } from "react-router-dom";
import { runInAction } from "mobx";



interface Props {
    games: MixAndMatchGameDragAndDrop[];
   activityid:string;
   
  
  }


//dragndrop

const female = {
    borderColor: 'violet',
    borderWidth: 3,
   
  }
  const male = {
    borderColor: 'lightblue',
    borderWidth: 3,
   
  }




const reorder = (court: MixAndMatchGameDragAndDrop, team:number, startIndex: number, endIndex: number): MixAndMatchGameDragAndDrop => {
   
    const list:any[]=team==1?court.teamOne:court.teamTwo
     const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    
    if(team==1){
    court.teamOne=result;
    
    }else{
        court.teamTwo=result;
    
    }
    
    
    return court;
    };
    
    const move = (
    source: MixAndMatchGameDragAndDrop,
    destination: MixAndMatchGameDragAndDrop,
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation,
    sourceTeam:number,
    destTeam:number
    ): { [key: string]: MixAndMatchGameDragAndDrop } => {
    
     
    
    const sourceClone =sourceTeam==1? Array.from(source.teamOne):  Array.from(source.teamTwo);
    const destClone = destTeam==1? Array.from(destination.teamOne):  Array.from(destination.teamTwo);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    
    
    destClone.splice(droppableDestination.index, 0, removed);
    
    const result:any = {};
    if(sourceTeam==1){
        source.teamOne=sourceClone;
    
    }else{
        source.teamTwo=sourceClone;
    
    }
    
    if(destTeam==1){
        destination.teamOne=destClone;
    
    }else{
        destination.teamTwo=destClone;
    
    }
    
    
    
    
    
    result[droppableSource.droppableId] = source;
    result[droppableDestination.droppableId] = destination;




    
    return result;
    };
    
    const grid = 8;
    
    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    userSelect: "none",
    color:"black",
    background: 'white',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '5px',
        borderBottom: '1px solid rgb(178,185,197)',
    
        ...draggableStyle,
    });
    
    const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "rgb(235,236,240)",
    
    
    padding: grid,
    });
    //dragndropend


export default observer(function MixAndMatchEditRoundList({  games, activityid }: Props) {
  const { mixandmatchStore } = useStore();
  useEffect(() => {
    if (activityid) {
       
        mixandmatchStore.createHubConnection(activityid);

    }

   
}, [mixandmatchStore, activityid]);


  const toggleShow: React.MouseEventHandler<HTMLButtonElement> = (e) => {
 
    e.preventDefault();

   
   
  
};


  

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();


    
   
  



   
    

  
      

      

  }
//dragndrop

const [state, setState] = useState<MixAndMatchGameDragAndDrop[]>(games);


const onDragEnd = (result: DropResult) => {
  const { source, destination } = result;

  if (!destination) {
    return;
  }

  const sourceTeam=Number(source.droppableId.split('-')[1]);
  const sourceId=Number(source.droppableId.split('-')[0]);

  const destTeam=Number(destination.droppableId.split('-')[1]);
  const destId=Number(destination.droppableId.split('-')[0]);

  
  const sInd = sourceId;
  const dInd = destId;


  console.log('sourceId:' + sInd + 'destId:' + dInd);

  console.log('sourceTeam:' + sourceTeam + 'destTeam:' + destTeam);


  

  if (sInd === dInd && sourceTeam==destTeam )  {
   
    const items = reorder(state.find(x=>x.courtNumber==sInd)!, sourceTeam,  source.index, destination.index);
    
    const newState = [...state];

     newState.find(x=>x.courtNumber==sInd)!.teamOne = items.teamOne;
     newState.find(x=>x.courtNumber==sInd)!.teamTwo = items.teamTwo;

    


    setState(newState);


    

  
  }
  
  else {



    const result = move(state.find(x=>x.courtNumber==sInd)!, state.find(x=>x.courtNumber==dInd)!, source, destination, sourceTeam, destTeam);
    const newState = [...state];

    

    newState.find(x=>x.courtNumber==sInd)!.teamOne=result[source.droppableId].teamOne;
    newState.find(x=>x.courtNumber==sInd)!.teamTwo=result[source.droppableId].teamTwo;

    newState.find(x=>x.courtNumber==dInd)!.teamOne=result[destination.droppableId].teamOne;
    newState.find(x=>x.courtNumber==dInd)!.teamTwo=result[destination.droppableId].teamTwo;




    setState(newState);

    const results:MixAndMatchGame[]=[];


    const courtSourcePlayers:MixAndMatchPlayer[]=[];
    const courtDestPlayers:MixAndMatchPlayer[]=[];

  
    result[source.droppableId].teamOne.forEach(player=>{

      runInAction(() => {
                    
        player.team=1;
    })
     

      courtSourcePlayers.push(player);

     

  })

  result[source.droppableId].teamTwo.forEach(player=>{

    runInAction(() => {
                    
      player.team=2;
  })

    
    courtSourcePlayers.push(player);
   

 })

 result[destination.droppableId].teamOne.forEach(player=>{


  runInAction(() => {
                    
    player.team=1;
})

  

  courtDestPlayers.push(player);

 

})

result[destination.droppableId].teamTwo.forEach(player=>{

 
  runInAction(() => {
                    
    player.team=2;
})

courtDestPlayers.push(player);


})

const court1:MixAndMatchGame={

players:courtSourcePlayers,
roundId:games[0].roundId,
courtNumber:sInd,
activityid:activityid,
completed:false,
isPlayoff:false,
id:games[0].gameId,
teamOneScore:0,
teamTwoScore:0



}

results.push(court1);

const court2:MixAndMatchGame={

  players:courtDestPlayers,
  roundId:games[0].roundId,
  courtNumber:dInd,
  activityid:activityid,
  completed:false,
  isPlayoff:false,
  id:games[0].gameId,
  teamOneScore:0,
  teamTwoScore:0
  
  
  
  }

  results.push(court2); 





    
   
     const data={

      MixAndMatchGames:results,
     

    } 

  

     mixandmatchStore.updateGamesList(data);



    
    
  }
};
//dragndrop




return (



<>
                

            <DragDropContext onDragEnd={onDragEnd}>
        {  state.map((el, ind) => (

<Card fluid>
<Card.Content>
<Card.Header> Court {el.courtNumber}</Card.Header>
</Card.Content>

<Card.Content>
<Grid columns={2} divided>
<Grid.Row>
<Grid.Column>


<Feed>


<Droppable key={`${ind}-1`} droppableId={`${el.courtNumber}-1`}>



{(provided, snapshot) => (
  <div
    ref={provided.innerRef}
    style={getListStyle(snapshot.isDraggingOver)}
    {...provided.droppableProps}
  >
    {el.teamOne.map((item, index) => (
       <Draggable
       key={item.appUserId}
       draggableId={item.appUserId}
       index={index}
     >
       {(provided, snapshot) => (
         <div
           ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}
           style={getItemStyle(
             snapshot.isDragging,
             provided.draggableProps.style
           )}
         >
           <div
             style={{
               display: "flex",
               justifyContent: "space-between"
             }}
           >


<Image size='mini'
  style={item.gender=='F' ? female : male}
  bordered
  circular
  src={item.image || `/assets/user.png`} />

{item.displayName}

<Button size="mini" icon onClick={() => {
                 const newState = [...state];
                 newState[ind].teamOne.splice(index, 1);
                 setState(
                   newState.filter((group) => group.teamOne.length +  group.teamTwo.length)
                 );
               }}> 
<Icon name='delete' />
</Button>
  




                        
                      
                       </div>

                        



                     </div>
                   )}
                 </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          </Feed>

          </Grid.Column>
          <Grid.Column>
          <Feed>

       <Droppable key={`${ind}-2`} droppableId={`${el.courtNumber}-2`}>



            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {el.teamTwo.map((item, index) => (
                   <Draggable
                   key={item.appUserId}
                   draggableId={item.appUserId}
                   index={index}
                 >
                   {(provided, snapshot) => (
                     <div
                       ref={provided.innerRef}
                       {...provided.draggableProps}
                       {...provided.dragHandleProps}
                       style={getItemStyle(
                         snapshot.isDragging,
                         provided.draggableProps.style
                       )}
                     >
                       <div
                         style={{
                           display: "flex",
                           justifyContent: "space-between"
                         }}
                       >


<Image size='mini'
              style={item.gender=='F' ? female : male}
              bordered
              circular
              src={item.image || `/assets/user.png`} />

  {item.displayName}

  <Button size="mini" icon onClick={() => {
                             const newState = [...state];
                             newState[ind].teamTwo.splice(index, 1);
                             setState(
                               newState.filter((group) => group.teamOne.length +  group.teamTwo.length)
                             );
                           }}> 
<Icon name='delete' />
</Button>
  




                        
                      
                       </div>

                        



                     </div>
                   )}
                 </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>


</Feed>
          </Grid.Column>
 
 


  
  </Grid.Row>
</Grid>
</Card.Content>
</Card>

        ))}
      </DragDropContext>

      



      </>


)

})