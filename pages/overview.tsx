import 'intersection-observer'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ActivityCardBig from '../components/ActivityCardBig'
import { useQuery } from 'react-apollo'
import GET_GAMES_LIST from '../GraphQL/Games/Queries/GET_GAMES_LIST'
import { Game } from '../types/game'
import LoadMore from '../components/LoadMore'

const PAGE_SIZE = 10;

const Overview = () => {
    const variables = {
        // eslint-disable-next-line @typescript-eslint/camelcase
        sports__ids: [], // empty array will return all spots
        // distance: `${parseInt(1000 * maxDistance, 10)}:${coords.latitude}:${coords.longitude}`,
        offset: 0,
        limit: PAGE_SIZE,
        ordering: '-start_time'
        // ordering: 'distance',
    };
    const gamesQuery = useQuery<{ games: Game[] }>(GET_GAMES_LIST, {
        variables
    })
    if (gamesQuery.loading || !gamesQuery.data) {
        return null
    }
    const games = gamesQuery.data.games

    const onLoadMore = () => {
        gamesQuery.fetchMore({
            variables: {
                offset: (games && games.length) || 0,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return { games: [...prev.games, ...fetchMoreResult.games] };
            },
        });
    }
    return (
        <section className="container min-w-full bg-concrete-100">
            <Head>
                <title>SportySpots - Sportactiviteiten</title>
            </Head>
            <Navbar />
            {games.map(game => (
                <ActivityCardBig key={game.uuid} gameID={game.uuid} />
            ))}
            <LoadMore onClick={onLoadMore}/>
            {/* <Footer /> */}
        </section>
    )
}

export default Overview
