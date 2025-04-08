import React from 'react';
import bin from '../assets/Frame.jpg';

const SingleSelectedPlayer = ({chosenPlayer, handleRemovePlayer}) => {
    return (
        <div className="flex items-center bg-base-100 shadow-sm rounded-lg p-4">
            {/* Image on the left with 5rem dimensions */}
            <div className="flex-shrink-0 mr-4">
                <img 
                    src={chosenPlayer.image}
                    alt="Player" 
                    className="w-20 h-20 rounded object-cover"
                />
            </div>
            
            {/* Content in the middle (grows to fill space) */}
            <div className="flex-grow">
                <h2 className="text-xl font-bold">{chosenPlayer.name}</h2>
                <p className="text-gray-600">{chosenPlayer.battingHand}</p>
            </div>
            
            {/* Bin button on the right - simplified to make it pop */}
            <div className="flex-shrink-0 ml-4">
                <button className="p-2 rounded hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                onClick={() => handleRemovePlayer(chosenPlayer.id)}>
                    <img src={bin} alt="Delete" className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default SingleSelectedPlayer;