import React from 'react';
import { TweenLite, TweenMax, TimelineLite, CSSPlugin } from "gsap";

import HeroImageSvg from '../../static/sportyspotsmainimage.svg';

const HeroImage = () => {
  const selfRef = React.createRef();

  const animate = () => {
    const svg = selfRef.current.firstChild;
    const balls = svg.querySelectorAll('#Oval-4');
    TweenMax.to(balls, .5, {y: -100}).yoyo(true).repeat(-1).play();
    TweenLite.fromTo(svg.querySelector("#Mountain"), 2, { x: -100 }, { x: 0 });
    TweenLite.fromTo(svg.querySelector("#Mountain-2"), 2, { x: 100 }, { x: 0 });
    TweenLite.fromTo(svg.querySelector("#boybasketball"), 3, { x: "-=50" }, { x: "+=50" });
    TweenLite.fromTo(svg.querySelector("#boysoccer"), 3, { x: "+=50" }, { x: "-=50" });

    const girl = svg.querySelector("#girlvolleyball");

    const tl = new TimelineMax();
    tl.fromTo(girl, 3, {opacity:0}, {opacity:1});
    tl.to(girl, 3, {x: "-=200"}, 0);
    tl.to(girl, 1, {scaleX: -1});
    tl.to(girl, 3, {x: "+=500"}, 3);
    tl.to(girl, 1, {opacity: 0}, 5);
    tl.repeat(-1);
  };

  React.useEffect(() => {
    setTimeout(animate, 1000);
  }, []);

  return (
    <div ref={selfRef}>
      <HeroImageSvg className="min-w-full lg:pl-24 lg:pr-24" />
    </div>
  )
}

export default HeroImage;
