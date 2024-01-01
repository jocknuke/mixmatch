import { Grid, Header, Sticky } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useParams } from "react-router-dom";
import { createRef, useEffect, useState } from "react";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import MixAndMatchRoundsList from "../../mixandmatch/MixAndMatchRoundsList";
import { MixAndMatchGame, MixAndMatchPlayer, MixAndMatchRound } from "../../../app/models/mixandmatchround";
import { Activity } from "../../../app/models/activity";
import { Profile } from "../../../app/models/profile";
import MixAndMatchForm from "../../mixandmatch/form/MixAndMatchForm";
import MixAndMatchPlayersSidebar from "../../mixandmatch/MixAndMatchPlayersSidebar";
import { roundTypeOptions } from "../../../app/common/options/mixandmatchOptions";





export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    const { id } = useParams();

    
       

        const initinalgames:MixAndMatchRound[]= [

            

        ];
 

        const [round, setRounds] = useState(initinalgames);

    useEffect(() => {
        if (id) loadActivity(id);
        return () => clearSelectedActivity();
    }, [id, loadActivity, clearSelectedActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />




    const handleAddRound = (thisround:MixAndMatchRound) => {


        const people= [...activity.attendees];

        


        let mygames:MixAndMatchGame[]=[];

       

        for (let i = 1; i < thisround.courtsTotal+1; i++) {
           


            mygames.push({ 
                id:i,
                roundId:thisround.id,
                courtid:i,
                players:[],
                isPlayoff:thisround.roundType==roundTypeOptions.find(x=>x.text=='Playoffs Coed')?.value?true:false,
                completed: false,
                teamOneScore:0,
                teamTwoScore:0,
  
  
            })

            
             

        }

        people.sort( () => Math.random() - 0.5);
        
        people.sort((a, b) => (a.gender! > b.gender!) ? 1 : -1)


        while (people.length>0) {
            mygames.forEach(element => {


                   let player1=new MixAndMatchPlayer(people.splice(0,1)[0]);
                   player1.team=1;

                   let player2=new MixAndMatchPlayer(people.splice(0,1)[0]);
                   player2.team=2;



              
                    element.players.push(player1);
                    element.players.push(player2);
    
    
                   
                    
                });
    


          }

            
           
        


            

            
        

             let newgames=mygames.filter(x=>x.players.length>0);
        


      

        setRounds((prevRounds) => [
            ...prevRounds,
            {
                id:round.length+1,
                roundType:thisround.roundType,
                  
                 courtsTotal:thisround.courtsTotal,
                 games: newgames,
            },
        ]);

        const div = document.getElementById('root');
        div!.scrollIntoView({ behavior: "smooth", block: "end" })
        
    };

  

    return (
        <Grid columns={2} stackable>
            <Grid.Column width='10'>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat activityId={activity.id} />

                <MixAndMatchRoundsList activity={activity} />
                  
               

            </Grid.Column>
            <Grid.Column width='6'>
           
              
            {
 activity.category=='mixandmatch' && (<MixAndMatchForm createRound={handleAddRound}/>)
}
             
               

              {
 activity.category=='mixandmatch' ? (<MixAndMatchPlayersSidebar activity={activity}/>):(<ActivityDetailedSidebar activity={activity}/>)
}





            </Grid.Column>
        </Grid>
    )
})