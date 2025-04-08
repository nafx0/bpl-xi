import React from 'react';
import user from '../assets/user 1.jpg';
import flag from '../assets/report 1.jpg';

const SinglePlayer = ({ player, handleChoosePlayer }) => {
  const { id, name, image, country, type, battingHand, price } = player;

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-sm">
        <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
          <img
            src={image}
            alt="Player"
            className="rounded-xl w-full h-48 sm:h-60 object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-2 px-3 items-center">
            <img src={user} alt="User" className="w-5 h-5" />
            <h2 className="card-title text-base sm:text-lg md:text-xl">{name}</h2>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex px-3 items-center gap-3">
              <img src={flag} alt="Flag" className="w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-sm sm:text-base">{country}</p>
            </div>
            <div>
              <p className="pr-5 text-sm sm:text-base">{type}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-sm sm:text-base">
              Batting Hand: <span className="font-light">{battingHand}</span>
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="font-bold text-sm sm:text-base">
              Price: <span className="font-light">${price}</span>
            </p>
            <button
              className="mr-1 px-3 py-2 border border-gray-500 rounded-2xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 cursor-pointer text-sm sm:text-base"
              onClick={() => handleChoosePlayer(player)}
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;