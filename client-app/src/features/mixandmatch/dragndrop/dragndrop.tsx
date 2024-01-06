import { Container, Grid, Header, Sticky } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams, useSearchParams } from "react-router-dom";
import { createRef, useEffect, useState } from "react";

import { DragDropContext, Droppable, Draggable, DropResult, DragUpdate, DraggableLocation } from 'react-beautiful-dnd'; 




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
  
  const getItems = (count: number, offset = 0): Item[] =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k + offset}-${new Date().getTime()}`,
      content: `item ${k + offset}`,
    }));

    
  
  const reorder = (list: Item[], startIndex: number, endIndex: number): Item[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  const move = (
    source: Item[],
    destination: Item[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ): { [key: string]: Item[] } => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
  
    destClone.splice(droppableDestination.index, 0, removed);
  
    const result:any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
  
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
    padding: grid,
    width: 250,
  });


export default observer(function MixAndMatchEditRoundDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    

   

   

    


   
    const [state, setState] = useState<Item[][]>(data);

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
  
        setState(newState.filter((group) => group.length));
      }
    };
  
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            setState([...state, []]);
          }}
        >
          Add new group
        </button>
        <button
          type="button"
          onClick={() => {
            setState([...state, getItems(1)]);
          }}
        >
          Add new item
        </button>
        <div style={{ display: "flex" }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (
              <Droppable key={ind} droppableId={`${ind}`}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                  >
                    {el.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
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
                              {item.content}
                              <button
                                type="button"
                                onClick={() => {
                                  const newState = [...state];
                                  newState[ind].splice(index, 1);
                                  setState(
                                    newState.filter((group) => group.length)
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
            ))}
          </DragDropContext>
        </div>
      </div>
    );


  
    
            })