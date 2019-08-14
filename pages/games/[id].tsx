import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NextPageContext } from 'next';
import GET_GAME_DETAILS from '../../GraphQL/Games/Queries/GET_GAME_DETAILS';

interface IProps {
  id: string;
}

const games = (props: IProps) => {
  const { data } = useQuery(GET_GAME_DETAILS, { variables: { uuid: props.id } });

  if (!data) {
    return (
      <div>Not found... {props.id}</div>
    );
  }
  return (
    <div>
      {data && JSON.stringify(data.game)}
    </div>
  );
};


// forward query { id: id } as a props
games.getInitialProps = ( ctx: NextPageContext ) => ctx.query;

export default games;
