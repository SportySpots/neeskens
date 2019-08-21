import React from 'react';
import { TweenLite, TweenMax } from 'gsap';

import HeroImageSvg from '../../static/sportyspotsmainimage.svg';

const HeroImage = () => {
  const selfRef = React.createRef();

  const animate = () => {
    const svg = selfRef.current.firstChild;
    const ball10 = svg.querySelectorAll('#Oval-10');
    TweenMax.to(ball10, 1, {y: -10}).yoyo(true).repeat(-1).play();
    const ball4 = svg.querySelectorAll('#Oval-4');
    TweenMax.to(ball4, 1, {y: -10}).yoyo(true).repeat(-1).play();

    const shadowball1 = svg.querySelectorAll('#Ovalshadow1');
    TweenMax.to(shadowball1, 1, {scaleX: 1.1}).yoyo(true).repeat(-1).play();
    const shadowball2 = svg.querySelectorAll('#Ovalshadow2');
    TweenMax.to(shadowball2, 1, {scaleX: 1.1}).yoyo(true).repeat(-1).play();
    const shadowball3 = svg.querySelectorAll('#Ovalshadow3');
    TweenMax.to(shadowball3, 1, {scaleX: 1.1}).yoyo(true).repeat(-1).play();

    TweenLite.fromTo(svg.querySelector("#Mountain"), 2, { x: -100 }, { x: 0 });
    TweenLite.fromTo(svg.querySelector("#Mountain-2"), 2, { x: 100 }, { x: 0 });
  };

  React.useEffect(() => {
    setTimeout(animate, 1000);
  }, []);

  return (
    <div ref={selfRef}>
      <HeroImageSvg width="100%" height="auto" className="min-w-full lg:pl-24 lg:pr-24" />
    </div>
  );
};

export default HeroImage;
