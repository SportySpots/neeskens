import React from 'react'
import { useState } from 'react'
import { Game } from '../../types/game'
import Link from 'next/link'

import Modal from '../Modal'
import SportIcon from '../SportIcon'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import WatchLater from '@material-ui/icons/WatchLater'

import moment from 'moment'
import 'moment-timezone'

// import StaticMap from '../StaticMap'
import { useQuery } from '@apollo/react-hooks'
import GET_GAME_DETAILS from '../../GraphQL/Games/Queries/GET_GAME_DETAILS'

interface IProps {
    gameID: string
}

const ActivityCardBig = ({ gameID }: IProps) => {
    const gameQuery = useQuery<{ game: Game }>(GET_GAME_DETAILS, {
        variables: { uuid: gameID },
    })
    if (gameQuery.loading) {
        return <div>loading...</div>
    }
    if (!gameQuery.data) {
        return <div>Not found...</div>
    }
    const game = gameQuery.data.game

    const localStartTime = moment(game.start_time).tz('CET')

    if (!game.spot) {
        return null
    }

    const firstImage = game.spot.images[0]
    if (!firstImage) {
        return null
    }

    const [show, setShow] = useState(false)
    const openModal = () => setShow(true)
    const closeModal = () => setShow(false)



    return (
        <>
        <Link href="/games/[id]" as={`/games/${game.uuid}`}>
            <a>
                <div className="mx-8 my-8 bg-chalk rounded-lg flex flex-col lg:flex-row shadow hover:shadow-lg cursor-pointer translate-y">
                    <div className="lg:w-2/4">
                        <div className="absolute z-0 rounded-tl-lg lg:rounded-br-lg lg:rounded-tl-lg bg-notify-100 w-24">
                            <p className="font-sans py-2 px-4 text-2xl font-medium text-chalk text-center">
                                {localStartTime.format('MMM Do')} 
                            </p>
                        </div>
                        <img
                            className="w-full h-80 object-cover lg:rounded-l-lg rounded-tl-lg"
                            src={firstImage.image}
                            alt="activity image"
                        ></img>
                    </div>
                    <div className="lg:w-2/4 py-4 px-8">
                        <h2 className="font-sans text-3xl pb-4">{game.name}</h2>
                        <div>
                            <div className="flex flex-row mb-4">
                                <SportIcon
                                    sport={game.sport}
                                    className="mr-4 h-5 w-5"
                                />
                                <p className="font-sans text-xl">
                                    {game.sport.name}
                                </p>
                            </div>
                            <div className="flex flex-row mb-4">
                                <WatchLater className="mr-4" />
                                <p className="font-sans text-xl">
                                    {localStartTime.format('MMMM Do - HH:mm')}
                                </p>
                            </div>
                            <div className="flex flex-row mb-4 ">
                                <LocationOnIcon className="mr-4 mb-8" />
                                <p className="font-sans text-xl">
                                    {game.spot.address.formatted_address}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <button
                                onClick={e => {
                                    openModal()
                                    e.preventDefault()
                                }}
                                className="flex justify-center items-center bg-grass-100 rounded-lg p-4 w-full text-center hover:bg-darkgrass-100"
                            >
                                <p className="font-sans text-chalk text-xl font-medium">
                                    Join this activity
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
        {show && <Modal closeModal={closeModal}>
                <h2 className="font-sans text-night text-4xl mb-6">Join this activity</h2>
                <div className="md:w-3/4 w-full px-3 mb-6 md:mb-0">
                 <label className="font-sans block tracking-wide text-night text-l font-medium mb-2"   >
                     Full Name
                </label>
                <input autoFocus className="appearance-none block w-full bg-grey-lighter text-night border border-red outline-none rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Michael Jordan"></input>
                </div>
                <div className="md:w-3/4 w-full px-3 mb-6 md:mb-0">
                 <label className="font-sans block tracking-wide text-night text-l font-medium mb-2"   >
                     Email Address
                </label>
                <input className="appearance-none block w-full outline-none bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-6" id="grid-first-name" type="email" placeholder="michael@jordan.com"></input>
                <div className="flex flex-row mt-8"><input type="checkbox" className="form-checkbox h-6 w-6 text-darkgrass-100" required></input> <span className="font-sans ml-4">I agree and read the SportySpots <a className="underline" href="https://www.sportyspots.com/terms">Terms</a> and <a className="underline" href="https://www.sportyspots.com/privacy">Privacy policy</a>. </span></div>
                </div>
        </ Modal>}
        </>
    )
}

export default ActivityCardBig
