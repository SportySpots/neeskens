import * as React from 'react'
import { Game } from '../../types/game'
import Attendee from '../Attendee'

interface IProps {
    game: Game
}

const ActivityAttendees = ({ game }: IProps) => {
    return (
        <div className="bg-chalk rounded-lg p-8">
            <h2 className="font-sans text-3xl pb-4">Attendees</h2>
            <ul>
                {game.attendees
                    .filter(attendee => attendee.status === 'ATTENDING')
                    .map(attendee => (
                        <li className="mb-4" key={attendee.uuid}>
                            <Attendee user={attendee.user} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default ActivityAttendees
