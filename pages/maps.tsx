import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import dynamic from "next/dynamic";
import SportsFilter from "components/SportsFilter";

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
            <section className="flex items-center justify-between p-4 pl-8 bg-chalk border-b border-concrete-100 lg:w-full lg:mt-20 mb-4">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row" >
                        <SportsFilter/>
                    </div>
                </div>
            </section>
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
