import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_GAME_DETAILS from '../../GraphQL/Games/Queries/GET_GAME_DETAILS';

const games = (props, ctx, ctxa) => {
  const { loading, data } = useQuery(GET_GAME_DETAILS, { variables: { uuid: props.id } });

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

// forward id as a prop
games.getInitialProps = ({ query }) => query;

export default games;
