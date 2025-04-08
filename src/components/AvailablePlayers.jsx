import React, { useState } from 'react';
import { useEffect } from 'react';
import SinglePlayer from './SinglePlayer';

const AvailablePlayers = ({handleChoosePlayer}) => {
    
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setPlayers(data.players))
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => {
                return <SinglePlayer key={player.id} player={player} handleChoosePlayer={handleChoosePlayer}/>
                
            })}
        </div>
    );
};

export default AvailablePlayers;