import React, { Component } from 'react'
import FilterButton from '../FilterButton'

class Filter extends Component {

    render() {
        return (
            <section className="flex items-center justify-between p-4 pl-8 bg-chalk border-b border-concrete-100 lg:w-full lg:mt-20">
                
                <div className="flex flex-row items-center">
                    <div className="mr-4" ><FilterButton /></div>
                </div>
            </section>
        )
    }
}

export default Filter
