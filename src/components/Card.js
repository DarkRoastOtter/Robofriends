import React from 'react';
import './CardCSS.css';

const Card = ({ name, username, email, id }) => {
    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 CardBG'>
            <img className= 'cardMagic' alt='robots' src={`https://robohash.org/${id}?200x200`} style={{filter: 'grayscale(60%) drop-shadow(10px 10px 10px black)'}}/>
            <div style={{textShadow: '2px 2px 2px black', color: '#717987', fontFamily: 'Inknut Antiqua'}}>
                <h2>{name}</h2>
                <p>{email}</p>
                <h2>Username: {username}</h2>
            </div>
        </div>
    );
}
export default Card;