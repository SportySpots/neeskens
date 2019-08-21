import React, { Component } from 'react'
import Logo from '../Logo'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <section className="flex items-center justify-between p-4 pl-8 bg-chalk border-b border-concrete-100 lg:w-full lg:fixed lg:z-10 lg:top-0 ">
                <Logo />
                <div className="flex flex-row items-center">
                    <p className="hidden lg:block font-sans text-xs lg:text-lg mr-4">
                        Download the app
                    </p>
                    <a href="https://itunes.apple.com/nl/app/sportyspots/id1391625376">
                        <img
                            src="/static/Appstore.svg"
                            alt="AppImage"
                            className="hidden lg:block h-8 lg:h-10 mr-2 lg:mr-4"
                        />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.sportyspots.android">
                        <img
                            src="/static/Playstore.svg"
                            alt="AppImage"
                            className="hidden lg:block h-8 lg:h-10 mr-2 lg:mr-8"
                        />
                    </a>
                </div>
            </section>
        )
    }
}

export default Navbar
