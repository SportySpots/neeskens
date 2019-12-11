import React from "react";
import SpotsMapController from "components/SpotsMap/controller";

import { useQuery } from "@apollo/react-hooks";
import { Spot } from "types/spot";
import GET_SPOTS from "GraphQL/Spots/Queries/GET_SPOTS";

const SpotsMap = () => {
    const mapContainer = React.useRef<HTMLDivElement>(null);
    const controller = React.useRef<SpotsMapController | null>(null);

    React.useEffect(() => {
        controller.current = new SpotsMapController(mapContainer.current);
        return () => {
            // runs on onmount
            if (controller.current) {
                // leaflet cleanup
                controller.current.map.off();
                controller.current.map.remove();
            }
        }
    }, []);

    const spotsQuery = useQuery<{ spots: Spot[] }>(GET_SPOTS, {
        variables: { limit: 1000 },
    })

    React.useEffect(() => {
        if (spotsQuery.data && controller.current) {
            controller.current.setMarkers(spotsQuery.data.spots.map(
                    spot => ({coords: spot.address, uuid: spot.uuid})
            ))
        }
    }, [spotsQuery]);

    return <div ref={mapContainer} className="h-full v-full"/>;
}

export default SpotsMap;