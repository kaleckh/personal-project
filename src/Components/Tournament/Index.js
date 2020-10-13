import React from 'react';
import "./Tournament.css";


import Round from "./Round";
import { createFirstRound, createRoundTemplates } from "./utils";

const mock = ["Jason", "Kaleck", "Austin", "Neely", "Brooklyn", "Tristan", "Bryson", "Aliece", "Jason", "Kaleck", "Austin", "Neely", "Brooklyn", "Tristan", "Bryson", "Aliece", "Jason", "Kaleck", "Austin", "Neely", "Brooklyn", "Tristan", "Bryson", "Aliece", "Jason", "Kaleck", "Austin", "Neely", "Brooklyn", "Tristan", "Bryson", "Aliece"];

const Tournament = ({ players }) => {

    let firstRound = createFirstRound(players)
    let rounds = createRoundTemplates(firstRound);

    return (
        <>
            <div className="tournament">
                {
                    rounds.map((round, index) => {
                        return <Round round={round} index={index} />
                    })
                }
            </div>
        </>
    )
};

export default Tournament;
