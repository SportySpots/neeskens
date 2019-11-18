import React from 'react'
import { game } from '../../types/game'

import SportIcon from '../SportIcon'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import WatchLater from '@material-ui/icons/WatchLater'

import StaticMap from '../StaticMap'

const ActivityCardBig = ({ game }) => {
    return (
            <div className="mx-8 my-4 bg-chalk rounded-lg flex max-w-4xl">
                <div className="w-2/4">
                    <img
                        className="object-cover rounded-l-lg"
                        src="https://www.helderwerk.com/wp-content/uploads/2018/08/bootcamp-1290x860.jpg"
                    ></img>
                </div>
                <div className="w-2/4 py-4 px-8">
                    <h2 className="font-sans text-2xl pb-4">
                        Title of the activity
                    </h2>
                    <div>
                        <div className="flex flex-row mb-4">
                            <SportIcon
                                sport="soccer"
                                className="mr-4 h-5 w-5"
                            />
                            <p className="font-sans text-xl">sport</p>
                        </div>
                        <div className="flex flex-row mb-4">
                            <WatchLater className="mr-4" />
                            <p className="font-sans text-xl">time specifics</p>
                        </div>
                        <div className="flex flex-row ">
                            <LocationOnIcon className="mr-4 mb-8" />
                            <p className="font-sans text-xl">
                                Location specifics
                            </p>
                    </div>
                </div>

                <a
                    className="flex"
                    href="https://sportyspots.page.link/download"
                    target="_blank"
                >
                    <button className="flex justify-center items-center bg-grass-100 rounded-lg p-4 w-full text-center hover:bg-darkgrass-100">
                        <p className="font-sans text-chalk text-xl font-medium">
                            Join activity
                        </p>
                    </button>
                </a>
            </div>
            </div>
        
    )
}

export default ActivityCardBig
