import { useQuery } from "@apollo/react-hooks";

import GET_SPORTS from 'GraphQL/Sports/Queries/GET_SPORTS';
import React from "react";
import { Sport } from "types/sport";
import { observer } from "mobx-react";
import spotFiltersStore from "stores/SpotFilters";

interface SportButtonProps {
    name: string;
    onClick: () => void;
    active: boolean;
}

const activeClassNames = ['border-darkgrass-100', 'bg-grass-100'];
const defaultClassNames = ['border-dusk'];

const SportButton = ({name, onClick, active}: SportButtonProps) => (
    <button
        className={`${(active ? activeClassNames:defaultClassNames).join(' ')} text-xs lg:text-base py-2 px-4 mr-4 border focus:outline-none rounded flex flex-row`}
        onClick={onClick}
    >
        {name}
    </button>
)

const SportsFilterWide = () => {
    const sports = useQuery<{ sports: Sport[] }>(GET_SPORTS);
    if (!sports.data) {
        return null;
    }
    const handleClick = (id: string) => {
        if (spotFiltersStore.selectedSportIds.includes(id)) {
            spotFiltersStore.selectedSportIds = spotFiltersStore.selectedSportIds.filter(i => i!==id)
        } else {
            spotFiltersStore.selectedSportIds = [...spotFiltersStore.selectedSportIds, id];
        }
    }
    const removeAll = () => {
        spotFiltersStore.selectedSportIds = [];
    }
    return (
        <div className="flex flex-row flex-wrap w-full">
            {sports.data.sports.map(sport => (
                <SportButton
                    active={spotFiltersStore.selectedSportIds.includes(sport.id)}
                    key={sport.id}
                    name={sport.name}
                    onClick={() => handleClick(sport.id)}
                />
            ))}

            { spotFiltersStore.selectedSportIds.length > 0 && <button onClick={removeAll}>Remove filter</button> }
        </div>
    );
}

export default observer(SportsFilterWide);
