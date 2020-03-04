import { useQuery } from '@apollo/react-hooks'
import { NextPageContext } from 'next'
import Head from 'next/head'
import * as React from 'react'
import GET_SPOT_DETAILS from '../../GraphQL/Spots/Queries/GET_SPOT_DETAILS'
import '../../scss/style.scss'
import { Spot } from '../../types/spot'

import SpotDetail from '../../components/SpotDetail'
import SpotDescription from '../../components/SpotDescription'
import SpotImage from '../../components/SpotImage'
import DownloadApp from '../../components/DownloadApp'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

interface IProps {
    id: string;
}

const spotPage = (props: IProps) => {
    const query = useQuery<{ spot: Spot }>(GET_SPOT_DETAILS, {
        variables: { uuid: props.id },
    })

    if (!query.data || !query.data.spot) {
        return <div>Not found... {props.id}</div>
    }

    const spot = query.data.spot

    // console.log(game.start_time, moment(game.start_time).tz(game.start_timezone).format());

    return (
        <section id="activity" className="bg-concrete-100">
            <Head>
                <title>SportySpots - gratis sporten in je stad</title>
            </Head>
            <Navbar />
            <div className="flex flex-col lg:flex-row-reverse lg:pt-16">
                <div className="mt-8 lg:my-8 lg:mr-32 lg:w-2/5">
                    <SpotDetail spot={spot} />
                    <DownloadApp />
                </div>
                <div className="mt-8 mx-2 lg:my-8 lg:ml-32 lg:mr-16 lg:w-3/5 flex flex-col">
                    <SpotImage spot={spot} />
                    <SpotDescription spot={spot} />
                </div>
            </div>

            <Footer />
        </section>
    )
}

// forward query { id: id } as a props
spotPage.getInitialProps = (ctx: NextPageContext) => ctx.query

export default spotPage
