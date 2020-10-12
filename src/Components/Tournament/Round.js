import React from "react";

import Bracket from "./Bracket";
import Margin from "./Margin";

import "./Tournament.css"

const getMarginTop = index => {
    switch(index) {
        case 0:
            return 0;
        case 1:
            return 55;
        case 2:
            return 170;
        case 3:
            return 400;
        case 4:
            return 850;
        default:
            return 0;
    }
}

const getMarginBottom = index => {
    switch(index) {
        case 0:
            return 50;
        case 1:
            return 165;
        case 2:
            return 400;
        case 3:
            return 850;
        default:
            return 0;
    }
}

const Round = ({ index, round }) => {
    return (
        <Margin
            marginTop={getMarginTop(index)}
        >
            <div className="round">
                {
                    round.map(bracket => {
                        return (
                            <Margin 
                                marginBottom={getMarginBottom(index)} 
                            >
                                <Bracket bracket={bracket}/>
                            </Margin>
                        )
                    })
                }
            </div>
        </Margin>
    )
}

export default Round;