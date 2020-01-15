import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Filter from "components/Filter";
import dynamic from "next/dynamic";

const SpotsMap = dynamic(
        () => import('../components/SpotsMap'),
        {ssr: false}
)

interface ContainerProps {
    children: React.ReactNode;
}

const MapsContainer = ({children}: ContainerProps) => (
        <section className="w-full h-full flex-col flex justify-start align-start bg-concrete-100">
            <Navbar />
            <Filter />
            {children}
        </section>
)

const Maps = () => {
    return (
            <>
                <Head>
                    <title>SportySpots - Maps</title>
                </Head>
                <MapsContainer>
                    <SpotsMap />
                </MapsContainer>
            </>
    )
};

export default Maps;
