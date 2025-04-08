import React from 'react';
import user from '../assets/user 1.jpg'
import flag from '../assets/report 1.jpg'
const SinglePlayer = ({player, handleChoosePlayer}) => {

    const {id, name, image, country, type, battingHand, price} = player;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-[15rem] object-cover" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-2 px-3 place-items-center'>
                        <img src={user} alt="" className='w-5 h-5'/>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex px-3 place-items-center gap-3'>
                            <img src={flag} alt="" />
                            <p>{country}</p>
                        </div>
                        <div >
                            <p className='pr-5'>{type}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='flex'>
                        <p className='font-bold'>Batting Hand:</p>
                        <p className='text-right pr-5'>{battingHand}</p>
                    </div>
                    <div className='flex justify-between place-items-center'>
                        <p className='font-bold'>Price: <span className='font-light px-2'>${price}</span></p>
                        <button className='mr-1 px-3 py-2 border border-gray-500 rounded-2xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 cursor-pointer' 
                        onClick={() => handleChoosePlayer(player)}>
                            Choose Player
                        </button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SinglePlayer;