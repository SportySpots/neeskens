import React from 'react'
import { Game } from '../../types/game'
import SportIcon from '../SportIcon'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import WatchLater from '@material-ui/icons/WatchLater'

import moment from 'moment'
import 'moment-timezone'
import StaticMap from '../StaticMap'

interface IProps {
    game: Game
}

const ActivityDetails = ({ game }: IProps) => {
    const localStartTime = moment(game.start_time).tz('CET')

    return (
        <div className="mx-2 bg-chalk rounded-lg">
            <div className="p-8">
                <h2 className="font-sans text-3xl pb-8">{game.name}</h2>
                <div>
                    <div className="flex flex-row mb-8 h-6 w-6">
                        <SportIcon className="mr-4" sport={game.sport} />
                        <p className="font-sans text-xl">{game.sport.name}</p>
                    </div>
                    <div className="flex flex-row mb-8">
                        <WatchLater className="mr-4" />
                        <p className="font-sans text-xl">
                            {localStartTime.format('MMMM Do - HH:mm')}
                        </p>
                    </div>
                    <div className="flex flex-row ">
                        <LocationOnIcon className="mr-4" />
                        <p className="font-sans text-xl">
                            {game.spot.address.formatted_address}
                        </p>
                    </div>
                </div>
            </div>
            <StaticMap className="w-full" coords={game.spot.address} />
            <div className="p-8 mb-8"></div>
        </div>
    )
}

export default ActivityDetails
