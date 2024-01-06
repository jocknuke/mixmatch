import { Card, Feed, Grid, Header, Segment, Sticky } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams, useSearchParams } from "react-router-dom";
import { createRef, useEffect, useState } from "react";

import ActivityDetailedSidebar from "../../activities/details/ActivityDetailedSidebar";
import MixAndMatchRoundsList from "../MixAndMatchRoundsList";
import ActivityDetailedHeader from "../../activities/details/ActivityDetailedHeader";
import ActivityDetailedInfo from "../../activities/details/ActivityDetailedInfo";
import MixAndMatchListItemGame from "../MixAndMatchListItemGame";
import Dragndrop from "./dragndrop";

import { DragDropContext, Droppable, Draggable, DropResult, DragUpdate, DraggableLocation } from 'react-beautiful-dnd'; 
import { MixAndMatchGame } from "../../../app/models/mixandmatchround";




interface Item {
    id: string;
    content: string;
  }

  const data:Item[][]=[
    [
      {
        "id": "item-0-1704498601043",
        "content": "item 0"
      },
      {
        "id": "item-1-1704498601043",
        "content": "item 1"
      },
      {
        "id": "item-2-1704498601043",
        "content": "item 2"
      },
      {
        "id": "item-3-1704498601043",
        "content": "item 3"
      },
      {
        "id": "item-4-1704498601043",
        "content": "item 4"
      },
      {
        "id": "item-5-1704498601043",
        "content": "item 5"
      },
      {
        "id": "item-6-1704498601043",
        "content": "item 6"
      },
      {
        "id": "item-7-1704498601043",
        "content": "item 7"
      },
      {
        "id": "item-8-1704498601043",
        "content": "item 8"
      },
      {
        "id": "item-9-1704498601043",
        "content": "item 9"
      }
    ],
    [
      {
        "id": "item-10-1704498601043",
        "content": "item 10"
      },
      {
        "id": "item-11-1704498601043",
        "content": "item 11"
      },
      {
        "id": "item-12-1704498601043",
        "content": "item 12"
      },
      {
        "id": "item-13-1704498601043",
        "content": "item 13"
      },
      {
        "id": "item-14-1704498601043",
        "content": "item 14"
      }
    ]
  ];

const _games:MixAndMatchGame[]=[
    {
      "id": 1,
      "roundId": 1,
      "courtNumber": 1,
      "teamOneScore": 0,
      "teamTwoScore": 0,
      "players": [
        {
          "username": "evangeline",
          "displayName": "Evangeline Fisher",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "06170fcf-16ed-4444-bd02-85cd5947a01e",
          "totalPoints": 0
        },
        {
          "username": "latoya",
          "displayName": "Latoya Craft",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "0c63a6be-a1ac-45c0-9118-9fdcac084852",
          "totalPoints": 0
        },
        {
          "username": "owens",
          "displayName": "Owens Acosta",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "1ee40b72-27e1-440a-b936-36dc8b8b3f12",
          "totalPoints": 0
        },
        {
          "username": "opal",
          "displayName": "Opal Gallegos",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "57ff24db-0fbb-496a-8684-c756b2e88cc1",
          "totalPoints": 0
        },
        {
          "username": "mcbride",
          "displayName": "Mcbride Davidson",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "647dacb7-e889-49d8-8bb3-0e9c617961c3",
          "totalPoints": 0
        },
        {
          "username": "margery",
          "displayName": "Margery Nicholson",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "7a97e2b0-a48a-4294-a1b5-6bcd8c1201cc",
          "totalPoints": 0
        },
        {
          "username": "leach",
          "displayName": "Leach Cain",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "908cff6a-0827-4370-b75e-d7b275661b62",
          "totalPoints": 0
        },
        {
          "username": "mckee",
          "displayName": "Mckee Cox",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "f195126d-7611-4b00-a9e4-5a33eab41829",
          "totalPoints": 0
        },
        {
          "username": "deanne",
          "displayName": "Deanne Mann",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "f45e8269-5165-41ee-a7c2-b38e5763759a",
          "totalPoints": 0
        },
        {
          "username": "margaret",
          "displayName": "Margaret Vaughn",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "fbe89c7b-d9d7-498f-b351-51243c9a23ea",
          "totalPoints": 0
        }
      ],
      "completed": false,
      "isPlayoff": false
    },
    {
      "id": 2,
      "roundId": 1,
      "courtNumber": 2,
      "teamOneScore": 0,
      "teamTwoScore": 0,
      "players": [
        {
          "username": "christie",
          "displayName": "Christie Rowe",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "34a7cb6a-8e82-43f1-b65d-241bd09d13a9",
          "totalPoints": 0
        },
        {
          "username": "rosales",
          "displayName": "Rosales Hayes",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "5cc565c1-3c58-4e35-a950-1eaa48a2e20b",
          "totalPoints": 0
        },
        {
          "username": "diann",
          "displayName": "Diann Nelson",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "5e5dfe86-0889-4f68-9e20-da094eff4d3f",
          "totalPoints": 0
        },
        {
          "username": "bartlett",
          "displayName": "Bartlett Armstrong",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "90b41078-5154-45e5-af2b-4ffe74389a4a",
          "totalPoints": 0
        },
        {
          "username": "decker",
          "displayName": "Decker Gilbert",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "9caf23d7-e80c-46cf-9f5e-ff9a87216383",
          "totalPoints": 0
        },
        {
          "username": "sofia",
          "displayName": "Sofia Massey",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "c8a2a0d6-1bfd-4d22-8938-7cea0d1550b1",
          "totalPoints": 0
        },
        {
          "username": "underwood",
          "displayName": "Underwood Nolan",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "cba7a068-61aa-48d3-b6a8-983105a6463b",
          "totalPoints": 0
        },
        {
          "username": "pearlie",
          "displayName": "Pearlie Sosa",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "cf96da55-6d93-426e-bde1-d7345d91d3f0",
          "totalPoints": 0
        },
        {
          "username": "karin",
          "displayName": "Karin Douglas",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "f349369c-1c5a-4e65-9a88-3c701a4d13c8",
          "totalPoints": 0
        },
        {
          "username": "jane",
          "displayName": "Jane",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "f7cd7294-f398-4d4c-b406-541178184239",
          "totalPoints": 0
        }
      ],
      "completed": false,
      "isPlayoff": false
    },
    {
      "id": 3,
      "roundId": 1,
      "courtNumber": 3,
      "teamOneScore": 0,
      "teamTwoScore": 0,
      "players": [
        {
          "username": "foreman",
          "displayName": "Foreman Jackson",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "126b6e31-a9f7-418c-b898-53fa82f53615",
          "totalPoints": 0
        },
        {
          "username": "hazel",
          "displayName": "Hazel Garner",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "1da21359-cb40-4907-b241-f38c4b42ce81",
          "totalPoints": 0
        },
        {
          "username": "rosemary",
          "displayName": "Rosemary Fitzpatrick",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "2ebf29f6-0ba5-4ce3-81d4-9ca600c9b411",
          "totalPoints": 0
        },
        {
          "username": "camacho",
          "displayName": "Camacho Mcguire",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "341fa388-d09b-423c-95fc-2d401c01e066",
          "totalPoints": 0
        },
        {
          "username": "shepard",
          "displayName": "Shepard Floyd",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "6628d722-a9a9-445a-9bc6-9a000aa23b07",
          "totalPoints": 0
        },
        {
          "username": "arnold",
          "displayName": "Arnold Carter",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "7ec5071c-d1db-4f20-ac36-11f289ba9c82",
          "totalPoints": 0
        },
        {
          "username": "ronda",
          "displayName": "Ronda Riddle",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "85de61ad-5795-4f62-9f7b-a910a651ce23",
          "totalPoints": 0
        },
        {
          "username": "mcfadden",
          "displayName": "Mcfadden Howe",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "93bc76f3-2eef-4141-9d49-22b5879a312e",
          "totalPoints": 0
        },
        {
          "username": "myrtle",
          "displayName": "Myrtle Stokes",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "aea7889e-a4d7-4566-9a38-a05f98f83b73",
          "totalPoints": 0
        },
        {
          "username": "mason",
          "displayName": "Mason Woods",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "b5283b11-5cd3-47f7-81b6-2bec3ad4cb55",
          "totalPoints": 0
        }
      ],
      "completed": false,
      "isPlayoff": false
    },
    {
      "id": 4,
      "roundId": 1,
      "courtNumber": 4,
      "teamOneScore": 0,
      "teamTwoScore": 0,
      "players": [
        {
          "username": "raquel",
          "displayName": "Raquel Holman",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "181371df-9a6d-41b8-91d2-8f51f4f0425f",
          "totalPoints": 0
        },
        {
          "username": "mattie",
          "displayName": "Mattie Landry",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "3ba80825-34ea-4ccc-b906-c29e36a374ee",
          "totalPoints": 0
        },
        {
          "username": "farrell",
          "displayName": "Farrell Medina",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "51210c31-c4c2-4e76-849d-5b945ce554bf",
          "totalPoints": 0
        },
        {
          "username": "waters",
          "displayName": "Waters Adkins",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "600a02b0-505a-40af-96e8-bc4a78d8f14f",
          "totalPoints": 0
        },
        {
          "username": "mae",
          "displayName": "Mae Scott",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "8491962a-a9d1-4197-a756-33e59629d593",
          "totalPoints": 0
        },
        {
          "username": "jewel",
          "displayName": "Jewel Silva",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "ad013d71-219d-4e7e-b031-08ec6ea80ed0",
          "totalPoints": 0
        },
        {
          "username": "solomon",
          "displayName": "Solomon Houston",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "ae00597b-be48-4222-a848-b0decd27e8a6",
          "totalPoints": 0
        },
        {
          "username": "gaines",
          "displayName": "Gaines Carson",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "c64998fc-8900-4d5b-915c-edd74ccf4fa4",
          "totalPoints": 0
        },
        {
          "username": "whitney",
          "displayName": "Whitney Winters",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "ca5bc0dd-67a9-4441-bb63-94c2ccda7012",
          "totalPoints": 0
        },
        {
          "username": "gates",
          "displayName": "Gates Mccoy",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "dbaf1e1e-3abc-46c0-b9df-069e7adaa2c4",
          "totalPoints": 0
        }
      ],
      "completed": false,
      "isPlayoff": false
    },
    {
      "id": 5,
      "roundId": 1,
      "courtNumber": 5,
      "teamOneScore": 0,
      "teamTwoScore": 0,
      "players": [
        {
          "username": "jacqueline",
          "displayName": "Jacqueline Camacho",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "2f86be93-ce12-47ed-826e-0d9258bb919a",
          "totalPoints": 0
        },
        {
          "username": "schroeder",
          "displayName": "Schroeder Brewer",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "49a29266-4e1d-48ab-a27c-09faba46ecec",
          "totalPoints": 0
        },
        {
          "username": "kelly",
          "displayName": "Kelly Lewis",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "51fdba54-3a65-4c64-abc5-46550a75af06",
          "totalPoints": 0
        },
        {
          "username": "edwards",
          "displayName": "Edwards Walls",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "5c6c50df-921b-4ba9-a7d6-6a13815f2edc",
          "totalPoints": 0
        },
        {
          "username": "tom",
          "displayName": "Tom",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "98af03e4-656e-47ce-aff2-289e2ab54390",
          "totalPoints": 0
        },
        {
          "username": "francis",
          "displayName": "Francis Potter",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "bab84954-c88e-4918-bd21-26367569e6de",
          "totalPoints": 0
        },
        {
          "username": "hampton",
          "displayName": "Hampton Nash",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "cf67781b-80c1-4bed-983d-5f946de99c31",
          "totalPoints": 0
        },
        {
          "username": "knowles",
          "displayName": "Knowles Norton",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "d256e2f8-6473-47b6-9a75-191e5964d581",
          "totalPoints": 0
        },
        {
          "username": "miles",
          "displayName": "Miles Porter",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "e385c903-3077-4fa8-933e-53b09b2aa0a9",
          "totalPoints": 0
        },
        {
          "username": "bob",
          "displayName": "Bob",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "eb895eca-6c70-4571-af8d-824bd907e589",
          "totalPoints": 0
        }
      ],
      "completed": false,
      "isPlayoff": false
    },
    {
      "id": 6,
      "roundId": 1,
      "courtNumber": 6,
      "teamOneScore": 0,
      "teamTwoScore": 0,
      "players": [
        {
          "username": "holland",
          "displayName": "Holland Mckinney",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "3461b53a-061f-447b-ae32-e34496ae71a4",
          "totalPoints": 0
        },
        {
          "username": "jerry",
          "displayName": "Jerry Forbes",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "54949f21-fc65-443a-a283-39ad13501a2c",
          "totalPoints": 0
        },
        {
          "username": "judy",
          "displayName": "Judy Stone",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "57b6d29f-0e5d-4f95-9177-c6ec3e970d2a",
          "totalPoints": 0
        },
        {
          "username": "salinas",
          "displayName": "Salinas Petersen",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "59523beb-5465-41b8-86fd-f4edc85f1f2f",
          "totalPoints": 0
        },
        {
          "username": "jeannette",
          "displayName": "Jeannette Lancaster",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "8ea16f8a-d5a3-457d-9389-e94d000c1478",
          "totalPoints": 0
        },
        {
          "username": "leonor",
          "displayName": "Leonor Cervantes",
          "gender": "F",
          "image": null,
          "team": 1,
          "appUserId": "b8b82435-fcc8-487f-88ef-995b0777be10",
          "totalPoints": 0
        },
        {
          "username": "jonhonor",
          "displayName": "jonhonor",
          "gender": "M",
          "image": null,
          "team": 2,
          "appUserId": "c3163562-7850-486b-9b6c-9fc1639a67b7",
          "totalPoints": 0
        },
        {
          "username": "cote",
          "displayName": "Cote Rose",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "e2da3170-29ee-42be-86a0-598d27d7863f",
          "totalPoints": 0
        },
        {
          "username": "melva",
          "displayName": "Melva Allison",
          "gender": "F",
          "image": null,
          "team": 2,
          "appUserId": "ef3c47cb-8798-48b9-a2ef-b8c47502a8f8",
          "totalPoints": 0
        },
        {
          "username": "donovan",
          "displayName": "Donovan Moss",
          "gender": "M",
          "image": null,
          "team": 1,
          "appUserId": "f1d60c74-f647-4668-9de6-88f87fbd8b83",
          "totalPoints": 0
        }
      ],
      "completed": false,
      "isPlayoff": false
    }
  ];


//dragndrop



const getItems = (count: number, offset = 0): Item[] =>
Array.from({ length: count }, (v, k) => k).map((k) => ({
  id: `item-${k + offset}-${new Date().getTime()}`,
  content: `item ${k + offset}`,
}));



const reorder = (list: MixAndMatchGame, startIndex: number, endIndex: number): MixAndMatchGame => {
const result = Array.from(list.players);
const [removed] = result.splice(startIndex, 1);
result.splice(endIndex, 0, removed);

list.players=result;

return list;
};

const move = (
source: MixAndMatchGame,
destination: MixAndMatchGame,
droppableSource: DraggableLocation,
droppableDestination: DraggableLocation
): { [key: string]: MixAndMatchGame } => {

    
const sourceClone = Array.from(source.players);
const destClone = Array.from(destination.players);
const [removed] = sourceClone.splice(droppableSource.index, 1);

destClone.splice(droppableDestination.index, 0, removed);

source.players=sourceClone;
destination.players=destClone;
const result:any = {};
result[droppableSource.droppableId] = source;
result[droppableDestination.droppableId] = destination;

return result;
};

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
userSelect: "none",
padding: grid * 2,
margin: `0 0 ${grid}px 0`,
background: isDragging ? "lightgreen" : "grey",
...draggableStyle,
});

const getListStyle = (isDraggingOver: boolean) => ({
background: isDraggingOver ? "lightblue" : "lightgrey",

});
//dragndropend


export default observer(function MixAndMatchEditRoundDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    const { mixandmatchStore } = useStore();
    const { gamesDetails, loadGamesDetails,  clearGamesDetails } = mixandmatchStore;
    
    
    const [searchParams, setSearchParams] = useSearchParams();
   
   const activityid=searchParams.get('activityid');
   const roundid=searchParams.get('roundid');


   useEffect(() => {
    if (activityid) {
        
        loadActivity(activityid);
    
    };
    return () => {clearSelectedActivity();
   
    }
   
  }, [activityid,loadActivity, clearSelectedActivity]);

    
  
   
  useEffect(() => {
    if (Number(roundid) && activityid) {
       
        loadGamesDetails(activityid,Number(roundid));
    
    };
    return () => {clearGamesDetails();
   
    }
   
}, [roundid,loadGamesDetails, clearGamesDetails]);

   


//dragndrop

const [state, setState] = useState<MixAndMatchGame[]>(_games);

const onDragEnd = (result: DropResult) => {
  const { source, destination } = result;

  if (!destination) {
    return;
  }
  const sInd = +source.droppableId;
  const dInd = +destination.droppableId;

  if (sInd === dInd) {
    const items = reorder(state[sInd], source.index, destination.index);
    const newState = [...state];
    newState[sInd] = items;
    setState(newState);
  } else {
    const result = move(state[sInd], state[dInd], source, destination);
    const newState = [...state];
    newState[sInd] = result[sInd];
    newState[dInd] = result[dInd];

    setState(newState.filter((group) => group.players.length));
  }
};
//dragndrop







    
   
    if (loadingInitial || !activity || !gamesDetails ) return <LoadingComponent />

    console.log(JSON.stringify(gamesDetails));

   
    

    return (
        <Grid columns={2} stackable>
            <Grid.Column width='10'>
            <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />

                <Segment
textAlign='center'
attached='top'
inverted
color='teal'
style={{ border: 'none' }}
>

                <Card.Group>

                    

                <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (

<Card>
<Card.Content>
  <Card.Header> Court {el.courtNumber}</Card.Header>
</Card.Content>

<Card.Content>
<Grid columns={2} divided>
<Grid.Row>
<Grid.Column>
  

<Feed>


              <Droppable key={ind} droppableId={`${ind}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    {el.players.map((item, index) => (
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
                                justifyContent: "space-around",
                              }}
                            >
                              {item.displayName}
                              <button
                                type="button"
                                onClick={() => {
                                  const newState = [...state];
                                  newState[ind].players.splice(index, 1);
                                  setState(
                                    newState.filter((group) => group.players.length)
                                  );
                                }}
                              >
                                delete
                              </button>
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
<label>hi</label>
</Feed>
              </Grid.Column>
     
     


      
      </Grid.Row>
  </Grid>
  </Card.Content>
    </Card>

            ))}
          </DragDropContext>


{/* {gamesDetails && gamesDetails.map(match => (
                    <MixAndMatchListItemGame key={`${match.roundId}-${match.courtNumber}`} game={match} />



                ))} */}

  


</Card.Group>

<Card.Group>

    
</Card.Group>
                  
</Segment>     

            </Grid.Column>
            <Grid.Column width='6'>
           
              

             
               


<ActivityDetailedSidebar activity={activity}/>




            </Grid.Column>
        </Grid>
    )
})