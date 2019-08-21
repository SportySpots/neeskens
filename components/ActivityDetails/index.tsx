import React from 'react'
import { Game } from '../../types/game'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import WatchLater from '@material-ui/icons/WatchLater'

interface IProps {
    game: Game
}

const ActivityDetails = ({ game }: IProps) => {
    return (
        <div className="bg-chalk rounded-lg p-8 mb-8">
            <h2 className="pb-4">{game.name}</h2>
            <div>
                <div>
                    <p>Hier komen details</p>
                </div>
                <div>
                    <WatchLater />
                    <p>Hier komen details</p>
                </div>
                <div>
                    <LocationOnIcon />
                    <p>Hier komen details</p>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails
