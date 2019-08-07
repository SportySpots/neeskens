import React from 'react'
import { TweenLite } from 'gsap';
import intoViewEffect from '../../effects/intoView';


const Conversion = () => {
    const ref = React.createRef();

    React.useEffect(() => {
        TweenLite.to(ref.current, 0, { x: "+=100" });
    }, []);

    const animate = (elm) => {
        TweenLite.to(elm, 1, { x: "-=100" });
    };

    intoViewEffect([ref], animate);

    return (
        <section className="bg-concrete-100 container min-w-full pt-4 lg:pt-8">
            <div className="flex flex-col lg:flex-row xxl:pl-64 xl:pl-40 lg:pl-40">
                <div className="flex flex-col flex-1 lg:mt-32">
                    <h2 className="font-sans text-center md:text-left lg:text-left text-5xl mt-8">Download the app</h2>
                    <h3 className="font-sans text-center md:text-left lg:text-left text-2xl lg:text-2xl mt-4 px-4 lg:px-0">We believe that sports is a universal language that unites people and everybody should be able to play a game of sports.</h3>
                <div className="flex flex-row mt-4 mb-16 justify-center lg:justify-start">
                    <img src="/static/Playstore.svg" alt="AppImage" className="my-4" />
                    <img src="/static/Appstore.svg" alt="AppImage" className="m-4" />
                </div>
                </div>
                <div className="flex flex-1 lg:ml-16 lg:mt-8 justify-center lg:justify-start">
                    <img ref={ref} src="/static/app-image.svg" alt="AppImage" className="h-auto w-3/5"/>
                </div>
            </div>
        </section>
    )
}

export default Conversion;
