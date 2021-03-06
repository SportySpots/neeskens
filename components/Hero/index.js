import React from 'react'
import ModalVideo from 'react-modal-video'
import HeroImage from '../HeroImage'
import PlayImage from '../PlayImage'

class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <section className=" container min-w-full pt-8 lg:pt-32">
                <div className="z-10 flex flex-col lg:flex-row xxl:pl-64 xl:pl-40 lg:pl-40">
                    <div className="flex-row">
                        <h1
                            className="font-sans text-center md:text-center lg:text-left
                                 text-6xl xl:text-7xl lg:text-5xl md:text-5xl"
                        >
                            Play more sports
                        </h1>
                        <h2 className="font-sans text-center md:text-center lg:text-left  text-2xl lg:text-3xl">
                            Play sports with others in your city
                        </h2>
                        <h3 className="font-sans text-center md:text-center lg:text-left  text-xl lg:text-xl mt-4">
                            For iPhone and Android
                        </h3>
                    </div>
                    <div className="flex-col justify-center m-8 lg:ml-64 lg:mt-2 xl:mt-6">
                        <div className="text-center pb-2">
                            <h3 className="font-sans lg:text-xl lg:mt-4">
                                Watch the video
                            </h3>
                        </div>
                        <div className="flex w-200 justify-center">
                            <ModalVideo
                                channel="youtube"
                                isOpen={this.state.isOpen}
                                videoId="5ydkSgHlKWQ"
                                onClose={() => this.setState({ isOpen: false })}
                            />
                            <button onClick={this.openModal}>
                                <PlayImage />
                            </button>
                        </div>
                    </div>
                </div>
                <HeroImage />
            </section>
        )
    }
}

export default Hero
