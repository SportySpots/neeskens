import 'intersection-observer';
import Head from 'next/head';
import '../scss/style.scss';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import ActivityCardBig from '../components/ActivityCardBig';
import { game } from '../types/game';
// import Footer from '../components/Footer';

const Overview = ({ game }) => (
<section className="container min-w-full bg-concrete-100">
        <Head>
            <title>SportySpots - Sportactiviteiten</title>
        </Head>
        <Navbar />
        <Filter />
        <ActivityCardBig game={game} />
        {/* <Footer /> */}
    </section>
)

export default Overview