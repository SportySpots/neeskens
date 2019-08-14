import React from 'react';
import { Game } from '../../types/game';

interface IProps {
  game: Game;
}

const ActivityImage = ({ game }: IProps) => {
  const firstImage = game.spot.images[0];
  if (!firstImage) {
    return null;
  }
  return (
    <div className="rounded-lg shadow">
      <div className="absolute rounded-br-lg rounded-tl-lg bg-notify-100 w-24">
        <p className="pt-2 px-4 text-2xl font-bold text-chalk text-center">
          19
        </p>
        <p className="pb-2 px-4 text-xl text-chalk text-center">april</p>
      </div>
      <img
        className="rounded-lg bg-night"
        src={firstImage.image}
        alt="activity image"
      />
    </div>
  );
};

export default ActivityImage;
