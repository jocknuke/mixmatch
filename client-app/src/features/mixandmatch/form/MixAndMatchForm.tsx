import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Button, Checkbox, Dropdown, Form, Menu, Segment } from "semantic-ui-react";

import { courtsNumberOptions, roundTypeOptions } from '../../../app/common/options/mixandmatchOptions';
import { MixAndMatchRound } from '../../../app/models/mixandmatchround';


interface Props {
    
    createRound: (thisround:MixAndMatchRound) => void;

    
}


export default function MixAndMatchForm( { createRound}: Props){


    const initialState ={

        id: 1,
        courtsTotal: 6,
        roundType:1,
        games:[],

    }

    const [round, setRound] = useState(initialState);

    function handleSubmit() {

        createRound(round);
    }

    function handleInputChange(event: SyntheticEvent<HTMLElement | HTMLTextAreaElement>, data:any) {
       

       


        const { name, value } = data;
        setRound({ ...round, [name]: value })
        
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
      <Dropdown selectedLabel={roundTypeOptions[0].text} name='roundType' defaultValue={roundTypeOptions[0].value} onChange={handleInputChange} options={roundTypeOptions} simple item />
  </Menu>
    
    </Form.Field>
    <Button type='submit'>Submit</Button>
   

     </Form>

   
   
    </Segment>
    </>
    )


}