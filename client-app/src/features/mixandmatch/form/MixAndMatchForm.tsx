import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from "semantic-ui-react";
import { MixAndMatchRound } from '../../../app/models/mixandmatchround';
import { Profile } from '../../../app/models/profile';


interface Props {
    
    createRound: () => void;
}


export default function MixAndMatchForm( { createRound}: Props){


    return(
    <button onClick={createRound}>Add round</button>
    )


}