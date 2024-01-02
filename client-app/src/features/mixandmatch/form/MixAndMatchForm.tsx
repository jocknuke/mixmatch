import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Button, Checkbox, Dropdown, Form, Menu, Segment } from "semantic-ui-react";
import { useEffect } from 'react'
import { courtsNumberOptions, roundTypeOptions } from '../../../app/common/options/mixandmatchOptions';
import { MixAndMatchGame, MixAndMatchPlayer, MixAndMatchRound } from '../../../app/models/mixandmatchround';
import { Activity } from '../../../app/models/activity';
import { useStore } from "../../../app/stores/store";
import { observer } from 'mobx-react-lite';
import { Console } from 'console';

interface Props {
    
   
    activity: Activity;
    
}

interface FormData {
    courtsTotal: number;
    roundType: number;
  }


export default observer(function MixAndMatchForm( { activity}: Props){


    const { mixandmatchStore } = useStore();

 

   










    const handleAddRound = (data:FormData) => {

       
        const people= [...activity.attendees];

        


        let mygames:MixAndMatchGame[]=[];

      

        for (let i = 1; i < data.courtsTotal+1; i++) {
           


            mygames.push({ 
                
                courtNumber:i,
                players:[],
                isPlayoff:data.roundType==roundTypeOptions.find(x=>x.text=='Playoffs Coed')?.value?true:false,
                completed: false,
                teamOneScore:0,
                teamTwoScore:0
  
  
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

            
             
            

        const addGameCommand ={

        
            MixAndMatchGames:newgames,
            ActivityId:activity.id
    
        }


        console.log("ADD GAME");
       
       

        mixandmatchStore.addGame(addGameCommand);
       



        
        
    };



    const [formData, setFormData] = React.useState<FormData>({ roundType:1,  courtsTotal: 6 });

  function handleInputChange(event: SyntheticEvent<HTMLElement | HTMLTextAreaElement>, data:any) {
    const { name, value } = data;
    setFormData({ ...formData, [name]: value });
   
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleAddRound(formData);
  }

    

    return(
        <>
        <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                secondary
                inverted
                color='teal'
            >
                Mix and match 
                </Segment>
<Segment attached>
    

<Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                 
    <Form.Field>
      <label>Available courts</label>
      <Menu compact>
      <Dropdown defaultValue={6} options={courtsNumberOptions} name='courtsTotal' simple item onChange={handleInputChange}  />
  </Menu>
    
    </Form.Field>
    <Form.Field>
      <label>Round Type</label>
      <Menu compact>
      <Dropdown multiple={false} selectedLabel={roundTypeOptions[0].text} name='roundType' defaultValue={roundTypeOptions[0].value} onChange={handleInputChange} options={roundTypeOptions} simple item />
  </Menu>
    
    </Form.Field>
    <Button type='submit'>Submit</Button>
   

     </Form>

   
   
    </Segment>
    </>
    )


})