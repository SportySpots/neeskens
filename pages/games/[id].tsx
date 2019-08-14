import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NextPageContext } from 'next';
import GET_GAME_DETAILS from '../../GraphQL/Games/Queries/GET_GAME_DETAILS';
import { Game } from '../../types/game';
import moment from 'moment';
import 'moment-timezone';

interface IProps {
  id: string;
}

const game = (props: IProps) => {
  const query = useQuery<{game: Game}>(GET_GAME_DETAILS, { variables: { uuid: props.id } });

  if (!query.data || !query.data.game) {
    return (
      <div>Not found... {props.id}</div>
    );
  }

  const game = query.data.game;

  console.log(game.start_time, moment(game.start_time).tz(game.start_timezone).format());

  return (
    <div>
      {game.start_time}
      {game.start_timezone}
    </div>
  );
};


// forward query { id: id } as a props
game.getInitialProps = ( ctx: NextPageContext ) => ctx.query;

export default game;
