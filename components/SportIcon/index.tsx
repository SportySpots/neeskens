import * as React from 'react'
import { Sport } from '../../types/sport'

interface IProps {
    sport: Sport;
    className?: string;
}

const sportCategoryToFilename: { [key: string]: string } = {
    BASKETBALL: 'basketball.png',
    BEACH_VOLLEYBALL: 'beach_volleyball.png',
    SOCCER: 'soccer.png',
    BOULES: 'boules.png',
    SKATING: 'skating.png',
    TABLE_TENNIS: 'table_tennis.png',
    TENNIS: 'tennis.png',
    BOOTCAMP: 'bootcamp.png',
}

const defaultSport = 'SOCCER'

const SportIcon = ({ sport, className }: IProps) => {
    const sportCategory = sport.category
    const iconFilename =
        sportCategoryToFilename[sportCategory] ||
        sportCategoryToFilename[defaultSport]
    return (
        <img
            className={className}
            alt="Sport Icon"
            src={`/static/icons/${iconFilename}`}
        />
    )
}

export default SportIcon

// use as:
// <SportIcon sport="soccer" />
