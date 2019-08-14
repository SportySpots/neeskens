import React from "react";
import { Game } from "../../types/game";

interface IProps {
  game: Game;
}

const ActivityDescription = ({ game }: IProps) => {
  return (
    <div className="bg-chalk rounded-lg p-8 mb-8">
      <h2 className="pb-4">Description</h2>
      <p className="text-xl">{game.description}</p>
    </div>
  );
};

export default ActivityDescription;
