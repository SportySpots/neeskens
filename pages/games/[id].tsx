import * as React from "react";
import "../../scss/style.scss";
import { useQuery } from "@apollo/react-hooks";
import { NextPageContext } from "next";
import GET_GAME_DETAILS from "../../GraphQL/Games/Queries/GET_GAME_DETAILS";
import { Game } from "../../types/game";
import Head from "next/head";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ActivityImage from "../../components/Activityimage";
import ActivityDescription from "../../components/Activitydescription";
import ActivityAttendees from "../../components/ActivityAttendees";

interface IProps {
  id: string;
}

const game = (props: IProps) => {
  const query = useQuery<{ game: Game }>(GET_GAME_DETAILS, {
    variables: { uuid: props.id }
  });

  if (!query.data || !query.data.game) {
    return <div>Not found... {props.id}</div>;
  }

  const game = query.data.game;

  // console.log(game.start_time, moment(game.start_time).tz(game.start_timezone).format());

  return (
    <section id="activity" className="bg-concrete-100">
      <Head>
        <title>SportySpots - gratis sporten in je stad</title>
      </Head>
      <Navbar />
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="mx-4 my-8 lg:mr-48 lg:ml-16 lg:w-1/4">
          <p>ActivityDetails</p>
        </div>
        <div className="mx-4 my-8 lg:ml-48 lg:mr-16 lg:w-3/4 flex flex-col">
          <ActivityImage game={game} />
          <ActivityDescription game={game} />
          <ActivityAttendees game={game} />
        </div>
      </div>

      <Footer />
    </section>
  );
};

// forward query { id: id } as a props
game.getInitialProps = (ctx: NextPageContext) => ctx.query;

export default game;
