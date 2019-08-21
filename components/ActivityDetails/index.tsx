import React from 'react'
import { Game } from '../../types/game'

interface IProps {
    game: Game
}

const ActivityDetails = ({ game }: IProps) => {
    return (
        <div className="bg-chalk rounded-lg p-8 mb-8">
            <h2 className="pb-4">{game.name}</h2>
            <div>
                <div>
                    <icon />
                    <p>Hier komen details</p>
                </div>
                <div>
                    <icon />
                    <p>Hier komen details</p>
                </div>
                <div>
                    <icon />
                    <p>Hier komen details</p>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails
