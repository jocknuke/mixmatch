import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  FormCheckbox,
  FormField,
  Input,
  Menu,
  Radio,
  Segment,
  TextArea,
} from "semantic-ui-react";
import { useEffect } from "react";
import {
  allCourtOptions,
  roundTypeOptions,
  allRoundTypeOptions,
} from "../../../app/common/options/mixandmatchOptions";
import {
  MixAndMatchGame,
  MixAndMatchPlayer,
  MixAndMatchRound,
} from "../../../app/models/mixandmatchround";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Console } from "console";
import { Profile } from "../../../app/models/profile";

interface Props {
  activity: Activity;
}

interface FormData {
  courtsTotal: number;
  roundType: number;
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


export default observer(function MixAndMatchForm({ activity }: Props) {
  const { mixandmatchStore } = useStore();
  const { groupedGamesByRoundId } = mixandmatchStore;

  const people = [...activity.attendees];
  const [courts, setCourts] = useState(allCourtOptions);
  const [selectAllCourts, setSelectAllCourts] = useState(true);
  const [roundTypes, setRoundType] = useState(allRoundTypeOptions);

  const [lastRoundPlayoffs, setLastRoundPlayoffs] = useState(false);





  let topPlayers:MixAndMatchPlayer[]=[];

  topPlayers=getPlayersBoard(mixandmatchStore.games);

  const handleAddRound = () => {
    const courtsToPlay = courts.filter((x) => x.checked == true);
    const roundType = roundTypes.find((x) => x.checked == true);

    people.sort(() => Math.random() - 0.5); //shuffle

    let filteredData: Profile[] = [];
    let filteredDataOptional: Profile[] = [];
   

    switch (roundType!.index) {
      case 1:
        setLastRoundPlayoffs(false);
        filteredData = people
          .sort((a, b) => (a.gender! > b.gender! ? 1 : -1))
          .slice(); // female first
        break;
      case 2:
        setLastRoundPlayoffs(false);
        filteredData = people.filter((a) => a.gender === "F").slice(); // girls vs girls boys vs boys
        filteredDataOptional =  people.filter((a) => a.gender === "M").slice(); // boys only
        break;
      case 3:
        setLastRoundPlayoffs(false);
        filteredData = people.filter((a) => a.gender === "F").slice(); // female only
        break;
      case 4:
        setLastRoundPlayoffs(false);
        filteredData = people.filter((a) => a.gender === "M").slice(); // boys only
        break;
     case 7: //play

        const top4Females=topPlayers.filter(x=>x.gender=="F").splice(0,4);
        const topMales=topPlayers.filter(x=>x.gender=="M").splice(0,4);

     
        const top8=top4Females.concat(topMales);
       
        top8.forEach((player) => {


           filteredData.push(people.filter(x=>x.appUserId==player.appUserId)[0])

        })
        filteredData.sort((a, b) => (a.gender! > b.gender! ? 1 : -1));
        if(lastRoundPlayoffs){
           

        [filteredData[0], filteredData[1]] = [filteredData[1], filteredData[0]];
        [filteredData[4], filteredData[5]] = [filteredData[5], filteredData[4]];
        }else{

            setLastRoundPlayoffs(true);
        }

        break;

      default:
        setLastRoundPlayoffs(false);
        filteredData = people
          .sort((a, b) => (a.gender! > b.gender! ? 1 : -1))
          .slice(); // female first
        break;
    }

    let mygames: MixAndMatchGame[] = [];
   

    //must have at least 4 players

    const totalPlayers = filteredData.length;

   

    const totalAvailCourts = courtsToPlay.filter((x) => x.checked).length;

    const peoplePerCourt = 4;



    let countCourts = totalAvailCourts;
    let avg = 0;


if(totalPlayers>4){
    for (let i = 1; i <= totalAvailCourts; i++) {
      if (totalPlayers > 0) {
        avg = Math.floor(totalPlayers / countCourts / 2);

        if (avg < peoplePerCourt) {
          countCourts--;
        }
      }
    }
}else{
    countCourts=1;


}



if(filteredData.length > 0) {
    courtsToPlay.splice(0, countCourts).forEach((court) => {
      if (court.checked) {
        mygames.push({
          courtNumber: court.index,
          players: [],
          isPlayoff: roundType!.name == "PLAYOFFS" ? true : false,
          completed: false,
          teamOneScore: 0,
          teamTwoScore: 0,
        });
      }
    });
}


  

    while (filteredData.length > 0) {
      mygames.forEach((element) => {
        const user1 = filteredData.splice(0, 1)[0];

        if (user1) {
          const p1: MixAndMatchPlayer = {
            username: user1.username,
            displayName: user1.displayName,
            image: user1.image,
            gender: user1.gender,
            appUserId: user1.appUserId,
            totalPoints: 0,
            isCheckedIn: true,
            team: 1,
          };

          element.players.push(p1);
        }


        if(filteredData.length>1){


            const user2 = filteredData.splice(0, 1)[0];
            if (user2) {
              const p2: MixAndMatchPlayer = {
                username: user2.username,
                displayName: user2.displayName,
                image: user2.image,
                gender: user2.gender,
                appUserId: user2.appUserId,
                totalPoints: 0,
                isCheckedIn: true,
                team: 2,
              };
    
              element.players.push(p2);
            }

        }

   

     
      });



    }
    let mygamesOptions: MixAndMatchGame[] = [];

    if(filteredDataOptional.length>0){

       

        
        const totalPlayersIfSplitedGroups=filteredDataOptional.length;
    
        const totalAvailCourtsLeft = courts.filter((x) => x.checked == true).length-countCourts;
    
        const peoplePerCourt = 4;
    
    
        console.log(totalAvailCourtsLeft);

        let moreCourts=totalAvailCourtsLeft;

        if(totalPlayersIfSplitedGroups> 1) {

        for (let i = 1; i <= totalAvailCourtsLeft; i++) {
            if (totalPlayersIfSplitedGroups > 0) {
              avg = Math.floor(filteredDataOptional.length / moreCourts / 2);
      
              if (avg < peoplePerCourt) {
                moreCourts--;
              }
            }
          }
        }else{
            moreCourts=1;


        }

        

         

          courts.filter((x) => x.checked == true).splice(countCourts, moreCourts).forEach((court) => {
            if (court.checked) {
                mygamesOptions.push({
                courtNumber: court.index,
                players: [],
                isPlayoff: roundType!.name == "PLAYOFFS" ? true : false,
                completed: false,
                teamOneScore: 0,
                teamTwoScore: 0,
              });
            }
          });

        

          while (filteredDataOptional.length > 0) {
            mygamesOptions.forEach((element) => {
              const user1 = filteredDataOptional.splice(0, 1)[0];
      
              if (user1) {
                const p1: MixAndMatchPlayer = {
                  username: user1.username,
                  displayName: user1.displayName,
                  image: user1.image,
                  gender: user1.gender,
                  appUserId: user1.appUserId,
                  totalPoints: 0,
                  isCheckedIn: true,
                  team: 1,
                };
      
                element.players.push(p1);
              }
      
              const user2 = filteredDataOptional.splice(0, 1)[0];

              if(filteredDataOptional.length > 0){
              if (user2) {
                const p2: MixAndMatchPlayer = {
                  username: user2.username,
                  displayName: user2.displayName,
                  image: user2.image,
                  gender: user2.gender,
                  appUserId: user2.appUserId,
                  totalPoints: 0,
                  isCheckedIn: true,
                  team: 2,
                };
      
                element.players.push(p2);
              }
            }
      
           
            });
      
      
      
          }

       

    }



    let newgames = mygames.concat(mygamesOptions).filter((x) => x.players.length > 0);

    const addGameCommand = {
      MixAndMatchGames: newgames,
      ActivityId: activity.id,
    };

    mixandmatchStore.addGame(addGameCommand);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleAddRound();
  }

  const updateCheckStatus = (index: number) => {
    setCourts(
      courts.map((court, currentIndex) =>
        currentIndex === index ? { ...court, checked: !court.checked } : court
      )
    );

    setSelectAllCourts(courts.filter((x) => x.checked === false).length < 0);
  };

  const updateRoundOption = (index: number) => {
    setRoundType(
      roundTypes.map((option, currentIndex) =>
        currentIndex === index
          ? { ...option, checked: !option.checked }
          : { ...option, checked: false }
      )
    );
  };

  const selectAll = () => {
    setCourts(courts.map((court) => ({ ...court, checked: true })));
  };
  const unSelectAll = () => {
    setCourts(courts.map((court) => ({ ...court, checked: false })));
  };

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.checked) {
      selectAll();
    } else {
      unSelectAll();
    }

    setSelectAllCourts(event.currentTarget.checked);
  };

  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        Mix and match
      </Segment>
      <Segment attached>
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <Form.Field>
            {/*      <label>Available courts</label>
      <Menu compact>
      <Dropdown defaultValue={6} options={courtsNumberOptions} name='courtsTotal' simple item onChange={handleInputChange}  />
  </Menu> */}

            <label>Round Type</label>
          </Form.Field>

          {roundTypes.map((court, index) => (
            <Form.Field>
              <Radio
                name="roundsRadioGroup"
                key={court.name}
                checked={court.checked}
                onChange={() => updateRoundOption(index)}
                label={court.name}
                index={index}
                disabled={court.disabled}
              />
            </Form.Field>
          ))}

          <Form.Field>
            {/*     <Menu compact>
      <Dropdown multiple={false} selectedLabel={roundTypeOptions[0].text} name='roundType' defaultValue={roundTypeOptions[0].value} onChange={handleInputChange} options={roundTypeOptions} simple item />
  </Menu> */}
          </Form.Field>

          <Form.Field>
            <label>Available courts</label>
            <Form.Field>
              {/*     <Button size='mini' onClick={selectAll}>Select All</Button>
    <Button size='mini' onClick={unSelectAll}>Unselect All</Button> */}

              <div className="ui checkbox">
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectAllChange(e)}
                  checked={selectAllCourts}
                />
                <label>Select All</label>
              </div>
            </Form.Field>

            {courts.map((court, index) => (
              <Form.Field>
                <Checkbox
                  className=""
                  toggle
                  key={court.name}
                  checked={court.checked}
                  onChange={() => updateCheckStatus(index)}
                  label={court.name}
                  index={index}
                />
              </Form.Field>
            ))}
          </Form.Field>

          <Button type="submit">Create Matches</Button>
        </Form>
      </Segment>
    </>
  );
});
