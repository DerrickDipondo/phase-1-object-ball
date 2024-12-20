 function gameObject() {
    //creating our object for this function
    const nbaObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Allan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }

            }

        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }


        }
    }
}

return nbaObject;

}
console.log(gameObject());

function numPointsScored(playerName) {
    const object = gameObject();
    const players = { ...object.home.players, ...game.away.players };
    return players[playerName].points;

}

function shoeSize(playerName) {
    const object = gameObject();
    const players = { ...object.home.players, ...game.away.players };
    return players[playerName].shoe;
}

function teamColors(teamName) {
    const object = gameObject();

    if (object.home.teamName === teamName) {
        return object.home.colors;
    }

    
    if (object.away.teamName === teamName) {
        return object.away.colors;
    }

    
    return `Team ${teamName} not found!`;
    
}

function teamNames() {
    const object = gameObject();
    return [object.home.teamName, object.away.teamName];
}

function playerNumbers(teamName) {
    const object = gameObject(); 

    // An empty array to hold the jersey numbers
    let numbers = [];

    
    if (object.home.teamName === teamName) {
        for (let player in object.home.players) {
            numbers.push(object.home.players[player].number);
        }
    }

    
    if (object.away.teamName === teamName) {
        for (let player in object.away.players) {
            numbers.push(object.away.players[player].number);
        }
    }

    return numbers;
}

    function playerStats(playerName) {
        const object = gameObject();
        
        for (let player in object.home.players) {
            if (player === playerName) {
                return object.home.players[player];
            }
        }
    
        for (let player in object.away.players) {
            if (player === playerName) {
                return object.away.players[player];
            }
        }
    
        return `Player ${playerName} not found!`;
    }
    
    function bigShoeRebounds() {
        const object = gameObject();
        let largestShoePlayer = null;
        let largestShoeSize = 0;
    
        for (let team of [object.home, object.away]) {
            for (let player in team.players) {
                let shoeSize = team.players[player].shoe;
                if (shoeSize > largestShoeSize) {
                    largestShoeSize = shoeSize;
                    largestShoePlayer = team.players[player];
                }
            }
        }
    
        return largestShoePlayer.rebounds;
    }
    