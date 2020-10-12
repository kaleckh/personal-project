export const createRoundTemplates = firstRound => {
    let result = [firstRound];
    
    while(result[result.length - 1].length !== 1) {
        const previousLength = result[result.length - 1].length;
        result.push([...Array(Math.round(previousLength / 2))].map(() => ({})))
    }

    return result;
}

export const createFirstRound = players => {
    const results = [];
    for (let index = 0; index < players.length; index++) {
        if(index % 2 === 0) {
            results.push({
                player1: players[index],
                player2: players[index + 1]
            })
        }
    }
    return results;
}