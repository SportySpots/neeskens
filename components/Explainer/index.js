import React from 'react';
import Card from '../Card';
import DiscoverImage from '../DiscoverImage';

const Explainer = () => {
    return (
        <React.Fragment>
            <h2 className="font-sans text-center text-5xl mt-16 lg:mt-24">The city as your playground</h2>
        <section className="flex flex-col sm:flex-row justify-around mb-24 mt-8 lg:mt-16 pl-24 pr-24">
                <Card
                    svg={'/static/discover-icon.svg'}
                    title={'Discover spots'} 
                    body={'Find spots that you never knew existed in your neighbourhood.'}
                    >
                </Card>
                <Card
                    svg={'/static/join-icon.svg'}
                    title={'Join activities'} 
                    body={'Participate in sport activities organized around you'}
                    >
                </Card>
                <Card
                    svg={'/static/organise-icon.svg'}
                    title={'Organise sports'} 
                    body={'Easily create open or private activities. with likeminderd sporters'}
                    >
                </Card>
        </section>
        </React.Fragment>
    )
}

export default Explainer;