import 'intersection-observer';
import Head from 'next/head';
import '../scss/style.scss';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
// import Footer from '../components/Footer';

const Overview = () => (
<section className="container min-w-full">
        <Head>
            <title>SportySpots - Sportactiviteiten</title>
        </Head>
        <Navbar />
        <Filter />
        {/* <Footer /> */}
    </section>
)

export default Overview