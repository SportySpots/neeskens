import Head from "next/head";
import "../scss/style.scss";
import Navbar from "../components/Navbar";

const Index = () => (
  <section>
    <Head>
      <title>Hello World</title>
    </Head>
    <Navbar />
  </section>
);

export default Index;
