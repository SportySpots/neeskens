import React from "react";
import { Game } from "../../types/game";

interface IProps {
  game: Game;
}

const ActivityImage = ({ game }: IProps) => {
  const firstImage = game.spot.images[0];
  if (!firstImage) {
    return null;
  }
  return (
    <div className="rounded-lg shadow mb-8 ">
      <div className="absolute rounded-br-lg rounded-tl-lg bg-notify-100 w-24">
        <p className="pt-2 px-4 text-2xl font-bold text-chalk text-center">
          {game.start_time}
        </p>
      </div>
      <img className="rounded-lg" src={firstImage.image} alt="activity image" />
    </div>
  );
};

export default ActivityImage;
