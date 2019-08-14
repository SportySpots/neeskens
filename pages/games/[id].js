import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_GAMES_LIST from '../../GraphQL/Games/Queries/GET_GAMES_LIST';

const games = (props, ctx, ctxa) => {
  const { loading, data } = useQuery(GET_GAMES_LIST);

  return (
    <div>
      {data.games && data.games.length}
    </div>
  );
};

// forward id as a prop
games.getInitialProps = ({ query }) => query;

export default games;
