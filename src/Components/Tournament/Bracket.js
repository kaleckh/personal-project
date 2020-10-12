import React from 'react';

import "./Tournament.css"

const Bracket = ({ bracket }) => {
    return (
        <div className="bracket">
            <div className="player-game">
                { bracket.player1 }
            </div>
            <div className="player-game">
                { bracket.player2 }
            </div>
        </div>
    )
};

export default Bracket;