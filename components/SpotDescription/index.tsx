import React from 'react'
import { Spot } from '../../types/spot'

interface IProps {
    spot: Spot;
}

const SpotDescription = ({ spot }: IProps) => {
    return (
        <div className="bg-chalk rounded-lg p-8 mb-8">
            <h2 className="font-sans text-3xl pb-4">Description</h2>
            <p className="font-sans text-xl">{spot.description}</p>
        </div>
    )
}

export default SpotDescription
