import React from 'react'
import { Spot } from '../../types/spot'

import SportIcon from '../SportIcon'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import WatchLater from '@material-ui/icons/WatchLater'

import StaticMap from '../StaticMap'

interface IProps {
    spot: Spot;
}

const SpotDetail = ({ spot }: IProps) => {

    return (
        <div className="mx-2 bg-chalk rounded-lg">
            <div className="p-8">
                <h2 className="font-sans text-3xl pb-8">{spot.name}</h2>
                <div>
                    <div className="flex flex-row mb-8">
                        {spot.sports.map(sport => (
                            <SportIcon
                                key={sport.uuid}
                                className="mr-4 h-6 w-6"
                                sport={sport}
                            />
                        ))}
                        <p className="font-sans text-xl">{spot.sports.map(sport => sport.name).join(' ')}</p>
                    </div>
                    <div className="flex flex-row mb-8">
                        <WatchLater className="mr-4" />
                        <p className="font-sans text-xl">
                           
                        </p>
                    </div>
                    <div className="flex flex-row ">
                        <LocationOnIcon className="mr-4" />
                        <p className="font-sans text-xl">
                            {spot.address.formatted_address}
                        </p>
                    </div>
                </div>
            </div>
            <StaticMap className="w-full" coords={spot.address} />
                <a
                    href="https://sportyspots.page.link/download"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <button className="flex justify-center items-center bg-grass-100 rounded-lg p-4 w-full mt-12 text-center hover:bg-darkgrass-100">
                        <p className="font-sans text-chalk text-xl font-medium">
                            Join activity
                        </p>
                    </button>
                </a>
            </div>
    )
}

export default SpotDetail
