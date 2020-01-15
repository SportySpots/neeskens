import { observer } from "mobx-react";
import { useQuery } from "@apollo/react-hooks";
import { Sport } from "types/sport";
import GET_SPORTS from "GraphQL/Sports/Queries/GET_SPORTS";
import React from "react";
import spotFiltersStore from "stores/SpotFilters";

const SportsFilterSmall = () => {
    const sports = useQuery<{ sports: Sport[]}>(GET_SPORTS);
    if (!sports.data) { return null; }
    const select = React.useRef<HTMLSelectElement>(null);
    const handler = () => {
        if (select.current) {
            const options = Array.from(select.current.options);
            spotFiltersStore.selectedSportIds = options.filter(option => option.selected).map(option => option.value);
        }
    }

    return (
            <select value={spotFiltersStore.selectedSportIds} ref={select} multiple={true} onChange={handler}>
                {sports.data.sports.map(sport => (
                    <option key={sport.id} value={sport.id}>{sport.name}</option>
                ))}
            </select>
    )
}

export default observer(SportsFilterSmall);