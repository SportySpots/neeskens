import Head from "next/head";
import "../scss/style.scss";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explainer from "../components/Explainer";
import Conversion from "../components/Conversion";

const Index = () => (
  <section className="container min-w-full">
    <Head>
      <title>SportySpots - Laagdrempelig sporten in je stad</title>
      <link href="https://fonts.googleapis.com/css?family=Rajdhani::400,500,600,700&display=swap" rel="stylesheet"></link>
    </Head>
    <Navbar />  
    <Hero />
    <Explainer />
    <Conversion />
  </section>
);

export default Index;
