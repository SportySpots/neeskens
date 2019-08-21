import { useQuery } from '@apollo/react-hooks'
import { NextPageContext } from 'next'
import Head from 'next/head'
import * as React from 'react'
import GET_GAME_DETAILS from '../../GraphQL/Games/Queries/GET_GAME_DETAILS'
import '../../scss/style.scss'
import { Game } from '../../types/game'

import ActivityDetails from '../../components/ActivityDetails'
import ActivityAttendees from '../../components/ActivityAttendees'
import ActivityDescription from '../../components/ActivityDescription'
import ActivityImage from '../../components/ActivityImage'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

interface IProps {
    id: string
}

const gamePage = (props: IProps) => {
    const query = useQuery<{ game: Game }>(GET_GAME_DETAILS, {
        variables: { uuid: props.id },
    })

    if (!query.data || !query.data.game) {
        return <div>Not found... {props.id}</div>
    }

    const game = query.data.game

    // console.log(game.start_time, moment(game.start_time).tz(game.start_timezone).format());

    return (
        <section id="activity" className="bg-concrete-100">
            <Head>
                <title>SportySpots - gratis sporten in je stad</title>
            </Head>
            <Navbar />
            <div className="flex flex-col lg:flex-row-reverse">
                <div className="my-8 lg:mr-32 lg:w-2/5">
                    <ActivityDetails game={game} />
                </div>
                <div className="mx-2 my-8 lg:ml-32 lg:mr-16 lg:w-3/5 flex flex-col">
                    <ActivityImage game={game} />
                    <ActivityDescription game={game} />
                    <ActivityAttendees game={game} />
                </div>
            </div>

            <Footer />
        </section>
    )
}

// forward query { id: id } as a props
gamePage.getInitialProps = (ctx: NextPageContext) => ctx.query

export default gamePage
