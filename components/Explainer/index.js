import React from 'react';
import Card from '../Card';
import intoViewEffect from '../../effects/intoView';
import { TweenLite } from 'gsap';

const Explainer = () => {
//   const refs = (new Array(3)).fill(null).map(() => React.createRef());

//   const animate = (elm) => {
//     TweenLite.to(elm, 1, { x: "+=100" });
//   };

//   React.useEffect(() => {
//     refs.forEach(ref => TweenLite.to(ref.current, 0, { x: "-=100" }));
//   }, []);

//   intoViewEffect(refs, animate);

  return (
    <React.Fragment>
      <h2 className="font-sans text-center text-5xl mt-16 lg:mt-32">The city as your playground</h2>
      <section className="flex flex-col sm:flex-row justify-around mb-24 mt-8 lg:mt-24 lg:mb-32 pl-24 pr-24">
        <Card
        //   ref={refs[0]}
          svg={'/static/discover-icon.svg'}
          title={'Discover spots'}
          body={'Find spots that you never knew existed in your neighbourhood.'}
        >
        </Card>
        <Card
        //   ref={refs[1]}
          svg={'/static/join-icon.svg'}
          title={'Join activities'}
          body={'Participate in sport activities organized around you'}
        >
        </Card>
        <Card
        //   ref={refs[2]}
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
