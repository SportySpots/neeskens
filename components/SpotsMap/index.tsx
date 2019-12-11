import React from "react";
import SpotsMapController from "components/SpotsMap/controller";

import { useQuery } from "@apollo/react-hooks";
import { Spot } from "types/spot";
import GET_SPOTS from "GraphQL/Spots/Queries/GET_SPOTS";

const SpotsMap = () => {
    const mapContainer = React.useRef<HTMLDivElement>(null);
    const controllerRef = React.useRef<SpotsMapController | null>(null);

    const spotsQuery = useQuery<{ spots: Spot[] }>(GET_SPOTS, {
        variables: { limit: 1000 },
    })

    React.useEffect(() => {
        if (spotsQuery.data && controllerRef.current) {
            controllerRef.current.setMarkers(spotsQuery.data.spots.map(
                    spot => ({coords: spot.address, uuid: spot.uuid})
            ))
        }
    }, [spotsQuery]);

    React.useEffect(() => {
        controllerRef.current = new SpotsMapController(mapContainer.current);
        const controller = controllerRef.current;

        // requery on move
        controller.onMove.on(({center, distance}) => {
            spotsQuery.refetch({
                distance: `${parseInt('' + distance, 10)}:${center.lat}:${center.lng}`,
                offset: 0,
                limit: 1000,
                ordering: 'distance',
            });
        });

        return () => {
            // runs on onmount
            if (controller) {
                // leaflet cleanup
                controller.map.off();
                controller.map.remove();
            }
        }
    }, []);



    return <div ref={mapContainer} className="h-full v-full"/>;
}

export default SpotsMap;