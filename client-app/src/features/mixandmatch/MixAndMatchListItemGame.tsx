import React from 'react';
import { Card, Image, List, Divider, Feed } from "semantic-ui-react";
import { MixAndMatchGame } from "../../app/models/mixandmatchround";
import { Profile } from "../../app/models/profile";
import { Link } from 'react-router-dom';

interface Props {
  game: MixAndMatchGame;


}

export default function MixAndMatchListItemGame({ game }: Props) {

  return (

    <Card>
      <Card.Content>
        <Card.Header> {game.courtid}</Card.Header>
      </Card.Content>

      <Card.Content>
        <Feed>
          {game.teamOne?.map(attendee => (

            <Feed.Event>



              <Feed.Label >
                <Image size='mini'

                  bordered
                  circular
                  src={attendee.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${attendee.username}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>


          ))}
        </Feed>

        <div className="ui divider"></div>
        <Feed>
          {game.teamTwo?.map(attendee => (

            <Feed.Event>



              <Feed.Label >
                <Image size='mini'

                  bordered
                  circular
                  src={attendee.image || `/assets/user.png`} />
              </Feed.Label>
              <Feed.Content>

                <Feed.Summary>
                  {`${attendee.username}`}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>


          ))}
        </Feed>
      </Card.Content>
    </Card>




  )
}