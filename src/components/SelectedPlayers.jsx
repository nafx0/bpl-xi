import React from 'react';
import SingleSelectedPlayer from './SingleSelectedPlayer';
const SelectedPlayers = ({chosenPlayers, handleRemovePlayer, handleIsAvailablePlayers}) => {
    return (
        <div className='grid gap-4'>
            {chosenPlayers.map((c) => {
               return <SingleSelectedPlayer chosenPlayer={c} handleRemovePlayer={handleRemovePlayer}></SingleSelectedPlayer>
            })}
            <button 
            className='bg-[#E7FE29] text-black px-3 py-2 rounded-xl cursor-pointer ring-2 ring-inset ring-black w-50'
            onClick={() => {
                handleIsAvailablePlayers("Available Players")
            }}>
                Add More Players
            </button>
        </div>
    );
};

export default SelectedPlayers;