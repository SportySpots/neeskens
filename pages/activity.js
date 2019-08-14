import "../scss/style.scss";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ActivityImage from '../components/Activityimage';
import ActivityDescription from '../components/Activitydescription';


const Activity = () => (
  <section id="activity" className="bg-concrete-100 pb-32">
    <Head>
      <title>SportySpots - gratis sporten in je stad</title>
    </Head>
    <Navbar/>
    <ActivityImage/>
    <ActivityDescription/>
    <Footer/>
  </section>
);

export default Activity;
