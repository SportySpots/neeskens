import * as React from 'react'

interface IProps {
    sport: string
    className?: string
}

const sportToFilename: { [key: string]: string } = {
    basketball: 'basketball.png',
    beach_volleyball: 'beach_volleyball.png',
    soccer: 'soccer.png',
    boules: 'boules.png',
    skating: 'skating.png',
    table_tennis: 'table_tennis.png',
    tennis: 'tennis.png',
    bootcamp: 'bootcamp.png',
}

const defaultSport = 'soccer'

const SportIcon = ({ sport, className }: IProps) => {
    const iconFilename = sportToFilename[sport] || sportToFilename[defaultSport]
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
