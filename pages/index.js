import Head from "next/head";
import "../scss/style.scss";
import Navbar from "../components/Navbar";
import Top from "../components/Top";

const Index = () => (
  <section>
    <Head>
      <title>SportySpots - Laagdrempelig sporten in je stad</title>
    </Head>
    <Navbar />   
    <Top />
  </section>
);

export default Index;
