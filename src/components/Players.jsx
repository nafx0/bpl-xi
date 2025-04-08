import React, { useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const Players = ({isAvailablePlayers, handleIsAvailablePlayers, setCoin}) => {
    
    const [chosenPlayers, setChosenPlayers] = useState([]);

    const handleChoosePlayer = (p) => {

        if (chosenPlayers.some(player => player.id === p.id)) {
            window.alert("This player is already selected.");
            return;
        }
        
        if (chosenPlayers.length >= 6) {
            window.alert("You can only select up to 6 players.");
            return;
        }
        
        setChosenPlayers(prevChosenPlayers => [...prevChosenPlayers, p]);

        setCoin(c => c - p.price);
        
    }

    const handleRemovePlayer = (idx) => {
        const newChosenPlayer = chosenPlayers.find((c) => c.id === idx);
        setCoin(c => c + newChosenPlayer.price);

        const newChosenPlayers = chosenPlayers.filter((c) => c.id !== idx);
        setChosenPlayers(newChosenPlayers);
    }

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col sm:flex-row justify-between mt-10 sm:mt-20 mb-6'>
                <h3 className='font-bold text-xl sm:text-2xl text-center sm:text-left mb-4 sm:mb-0'>{isAvailablePlayers.availablePlayers ? "Available Players" : "Selected Players"}</h3>
                <div className='flex justify-center sm:justify-between border border-gray-200 rounded-xl overflow-hidden'>
                    <button 
                        onClick={() => handleIsAvailablePlayers("Available Players")}
                        className={`px-4 py-2 text-sm sm:text-base ${
                            isAvailablePlayers.availablePlayers 
                                ? 'bg-[#E7FE29] border-r border-[rgba(19,19,19,0.10)] rounded-l-xl w-full' 
                                : 'bg-white'
                        }`}
                    >
                        Available Players
                    </button>
                    <button 
                        onClick={() => handleIsAvailablePlayers("Selected Players")}
                        className={`px-4 py-2 text-sm sm:text-base ${
                            !isAvailablePlayers.availablePlayers 
                                ? 'bg-[#E7FE29] rounded-r-xl w-full' 
                                : 'bg-white'
                        }`}
                    >
                        Selected Players ({chosenPlayers.length}/6)
                    </button>
                </div>
            </div>
            {isAvailablePlayers.availablePlayers ? 
            <AvailablePlayers handleChoosePlayer={handleChoosePlayer}></AvailablePlayers> : 
            <SelectedPlayers chosenPlayers={chosenPlayers} handleRemovePlayer={handleRemovePlayer} handleIsAvailablePlayers={handleIsAvailablePlayers}></SelectedPlayers>}
        </div>
    );
};

export default Players;