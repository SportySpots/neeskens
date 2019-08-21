import React from 'react'
import { Game } from '../../types/game'

import moment from 'moment'
import 'moment-timezone'

interface IProps {
    game: Game
}

const ActivityImage = ({ game }: IProps) => {
    const firstImage = game.spot.images[0]
    if (!firstImage) {
        return null
    }

    const localStartTime = moment(game.start_time).tz('CET')

    return (
        <div className="rounded-lg shadow mb-8 lg:h-72">
            <div className="absolute rounded-br-lg rounded-tl-lg bg-notify-100 w-24">
                <p className="font-sans py-2 px-4 text-2xl font-medium text-chalk text-center">
                    {localStartTime.format('MMMM Do')}
                </p>
            </div>
            <img
                className="rounded-lg object-cover h-full w-full"
                src={firstImage.image}
                alt="activity image"
            />
        </div>
    )
}

export default ActivityImage
