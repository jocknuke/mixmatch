import { observer } from "mobx-react-lite";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Form } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";



interface Props {
  handleUpdateRound():void;
}



export default observer(function MixAndMatchEdiotForm({ handleUpdateRound }: Props) {
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleUpdateRound();
  }

  

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
   
 <Button type="submit">Update Matches</Button>
        </Form>
      </Segment>
    </>
  );
});
