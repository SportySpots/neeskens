import React, { useContext } from 'react'
import FilterButton from '../FilterButton'
import { FilterContext } from '../../context/filters';
import { useScrollFilter } from '../../hooks/useScrollFilter'

function Filter() {    
    const { date, setDate, dates, sport, setSport, sports, location, setLocation, locations } = useContext(FilterContext);

    // const visible = useScrollFilter();
    // if (!visible) {
    //     return null;
    // }
    return (
        <section className="flex items-center justify-between p-4 pl-8 bg-chalk border-b border-concrete-100 lg:w-full lg:mt-20 mb-4">
            <div className="flex flex-row items-center">
                <div className="flex flex-row" >
                    <FilterButton placeholder="Choose location" options={locations} onChange={setLocation} value={location} icon="marker" />
                    <FilterButton placeholder="Pick a sport" options={sports} onChange={setSport} value={sport} />
                    <FilterButton placeholder="Any date" options={dates} onChange={setDate} value={date} />
                </div>
            </div>
        </section>
    )
}

export default Filter
