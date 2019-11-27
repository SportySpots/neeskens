import 'intersection-observer'
import Head from 'next/head'
import '../scss/style.scss'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import ActivityCardBig from '../components/ActivityCardBig'
import { useQuery } from 'react-apollo'
import GET_GAMES_LIST from '../GraphQL/Games/Queries/GET_GAMES_LIST'
import { Game } from '../types/game'

// import Footer from '../components/Footer';

const Overview = () => {
    const gamesQuery = useQuery<{ games: Game[] }>(GET_GAMES_LIST, {
        variables: { limit: 20 },
    })
    if (gamesQuery.loading || !gamesQuery.data) {
        return null
    }
    const games = gamesQuery.data.games

    return (
        <section className="container min-w-full bg-concrete-100">
            <Head>
                <title>SportySpots - Sportactiviteiten</title>
            </Head>
            <Navbar />
            <Filter />
            {games.map(game => (
                <ActivityCardBig key={game.uuid} gameID={game.uuid} />
            ))}
            {/* <Footer /> */}
        </section>
    )
}

export default Overview
