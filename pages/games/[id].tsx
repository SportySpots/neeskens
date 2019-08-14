import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NextPageContext } from 'next';
import GET_GAME_DETAILS from '../../GraphQL/Games/Queries/GET_GAME_DETAILS';
import { Game } from '../../types/game';

interface IProps {
  id: string;
}

const game = (props: IProps) => {
  const query = useQuery<Game>(GET_GAME_DETAILS, { variables: { uuid: props.id } });
  const game = query.data;

  if (!game) {
    return (
      <div>Not found... {props.id}</div>
    );
  }
  return (
    <div>
      {game && JSON.stringify(game)}
    </div>
  );
};


// forward query { id: id } as a props
game.getInitialProps = ( ctx: NextPageContext ) => ctx.query;

export default game;
