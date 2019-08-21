import React, { Component } from 'react'
import Logo from '../Logo'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <section className="flex items-center justify-between flex-wrap p-4 pl-8 bg-chalk border-b border-concrete-100  ">
                <Logo />
            </section>
        )
    }
}

export default Navbar
