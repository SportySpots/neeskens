import { useQuery } from "@apollo/react-hooks";

import GET_SPORTS from 'GraphQL/Sports/Queries/GET_SPORTS';
// import FilterButton from "components/FilterButton";
import React from "react";
import { Sport } from "types/sport";
import { observer } from "mobx-react";
import spotFiltersStore from "stores/SpotFilters";

interface SportButtonProps {
    name: string;
    onClick: () => void;
    active: boolean;
}
const SportButton = ({name, onClick, active}: SportButtonProps) => (
        <button
                className={`${active?'bg-dusk':'bg-transparent'} text-xs lg:text-base py-2 px-4 mr-4 border focus:outline-none rounded flex flex-row`}
                onClick={onClick}
        >
            {name}
        </button>
)

const SportsFilterWide = () => {
    const sports = useQuery<{ sports: Sport[]}>(GET_SPORTS);
    if (!sports.data) { return null; }
    const handleClick = (id: string) => {
        if (spotFiltersStore.selectedSportIds.includes(id)) {
            spotFiltersStore.selectedSportIds = spotFiltersStore.selectedSportIds.filter(i => i !== id)
        } else {
            spotFiltersStore.selectedSportIds = [ ...spotFiltersStore.selectedSportIds, id ];
        }
    }
    const selectAll = () => {
        if (sports.data) {
            spotFiltersStore.selectedSportIds = sports.data.sports.map(sport => sport.id);
        }
    }
    return (
        <div className="flex flex-row flex-wrap w-full">
            { sports.data.sports.map(sport => (
                <SportButton
                    active={spotFiltersStore.selectedSportIds.includes(sport.id)}
                    key={sport.id}
                    name={sport.name}
                    onClick={() => handleClick(sport.id)}
                />
            ))}

            <button onClick={selectAll}>select all</button>
        </div>
    );
}

export default observer(SportsFilterWide);