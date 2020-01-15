import { useQuery } from "@apollo/react-hooks";
import GET_SPOT_DETAILS from 'GraphQL/Spots/Queries/GET_SPOT_DETAILS';
import React from "react";
import { Spot } from "types/spot";

const stripHTML = (unsanitized: string) => unsanitized.replace(/(<([^>]+)>)/ig,"");

export const SpotCardSmallDetails = ({spot}: {spot: Spot}) => {
    const sportsHTMLString = spot.sports.map(sport => stripHTML(sport.name)).join(' &sdot; ');

    let imageSrc = '/static/icons/soccer.png';
    if (spot.images) {
        imageSrc = spot.images[0].image;
    }

    return (
        <div className="w-full h-full bg-chalk rounded-lg shadow hover:shadow-lg cursor-pointer translate-y flex">
            <div className="flex-auto p-4">
                <h2 className="font-sans text-3xl pb-4 text-center">{spot.name}</h2>
                <div dangerouslySetInnerHTML={{__html: sportsHTMLString}}/>
            </div>
            <div className="w-1/4 bg-darkgrass-100">
                <img src={imageSrc} className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

const SpotCardSmall = (props: { uuid: string }) => {
    const spotQuery = useQuery<{spot: Spot}>(GET_SPOT_DETAILS, {variables: {uuid: props.uuid}});
    if (!spotQuery.data) {
        return null;
    }
    const spot = spotQuery.data.spot;
    return <SpotCardSmallDetails spot={spot} />;
}

export default SpotCardSmall;