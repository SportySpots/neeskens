import React from 'react'
import { Spot } from '../../types/spot'

interface IProps {
    spot: Spot
}

const SpotImage = ({ spot }: IProps) => {
    const firstImage = spot.images[0]
    if (!firstImage) {
        return null
    }

    return (
        <div className="rounded-lg shadow mb-8 lg:h-96">
            <img
                className="rounded-lg object-cover h-full w-full"
                src={firstImage.image}
                alt="spot image"
            />
        </div>
    )
}

export default SpotImage
