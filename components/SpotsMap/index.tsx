import React from "react";
import SpotsMapController from "components/SpotsMap/controller";

import { useQuery } from "@apollo/react-hooks";
import { Spot } from "types/spot";
import GET_SPOTS from "GraphQL/Spots/Queries/GET_SPOTS";
import SpotCardSmall from "components/SpotCardSmall";
import { observer } from "mobx-react";
import spotFiltersStore from "stores/SpotFilters";

const SpotsMap = () => {
    const mapContainer = React.useRef<HTMLDivElement>(null);
    const controllerRef = React.useRef<SpotsMapController | null>(null);

    const [selectedMarker, setSelectedMarker] = React.useState<string | null>(null);

    const spotsQuery = useQuery<{ spots: Spot[] }>(GET_SPOTS, {
        variables: {
            limit: 1000,
            // eslint-disable-next-line @typescript-eslint/camelcase
            sports__ids: spotFiltersStore.selectedSportIds,
        },
    })

    React.useEffect(() => {
        const controller = controllerRef.current;
        if (spotsQuery.data && controller) {
            controller.setMarkers(spotsQuery.data.spots.map(
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

        controller.onSelected.on(setSelectedMarker)

        return () => {
            // runs on onmount
            if (controller) {
                // leaflet cleanup
                controller.map.off();
                controller.map.remove();
            }
        }
    }, []);


    return (
        <div className="h-full v-full">
            <div ref={mapContainer} className="h-full v-full"/>
            {selectedMarker && (
                <div className="absolute w-104 h-32 mb-8 mr-8 bottom-0 right-0 " style={{zIndex: 1000}}>
                    <SpotCardSmall uuid={selectedMarker}/>
                </div>
            )}
        </div>
    );
}

export default observer(SpotsMap);