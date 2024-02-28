function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
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
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());

  function homeTeamName1() {
    let object = gameObject();
    return object['home']['teamName'];
  }

  console.log("---------------------------------------");
  console.log(homeTeamName1());
 

  function homeTeamName2(){
    return gameObject()['home']['teamName'];
  }
  
  console.log("---------------------------------------");
  console.log(homeTeamName2());
  

  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].points;
        }
      }
    }
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].shoe;
        }
      }
    }
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        if (game[team].teamName === teamName) {
          return game[team].colors;
        }
      }
    }
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        if (game[team].teamName === teamName) {
          const players = game[team].players;
          return Object.values(players).map(player => player.number);
        }
      }
    }
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName];
        }
      }
    }
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = "";
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const shoeSize = players[player].shoe;
            if (shoeSize > largestShoeSize) {
              largestShoeSize = shoeSize;
              playerWithLargestShoeSize = player;
            }
          }
        }
      }
    }
    return game.home.players[playerWithLargestShoeSize].rebounds || game.away.players[playerWithLargestShoeSize].rebounds;
  }
  
  // Example usages
  console.log("---------------------------------------");
  console.log(numPointsScored("Alan Anderson")); // Output: 22
  console.log(shoeSize("Alan Anderson")); // Output: 16
  console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]
  console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]
  console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 30, 11, 1, 31]
  console.log(playerStats("Alan Anderson")); // Output: { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }
  console.log(bigShoeRebounds()); // Output: 12
  

  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = "";
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const points = players[player].points;
            if (points > maxPoints) {
              maxPoints = points;
              playerWithMostPoints = player;
            }
          }
        }
      }
    }
    return playerWithMostPoints;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const points = players[player].points;
            if (team === "home") {
              homeTeamPoints += points;
            } else if (team === "away") {
              awayTeamPoints += points;
            }
          }
        }
      }
    }
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
  }

  function playerWithLongestName() {
    const game = gameObject();
    let longestNameLength = 0;
    let playerWithLongestName = "";
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const nameLength = player.length;
            if (nameLength > longestNameLength) {
              longestNameLength = nameLength;
              playerWithLongestName = player;
            }
          }
        }
      }
    }
    return playerWithLongestName;
  }
  
// Example usage
console.log("---------------------------------------");
console.log(mostPointsScored()); // Output: "Mason Plumlee"
console.log(winningTeam()); // Output: "Brooklyn Nets"
console.log(playerWithLongestName()); // Output: "Brendan Haywood"

function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName(); // Get the player with the longest name
    let maxSteals  = 0;
    let playerWithMostSteals = "";
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            const steals = players[player].steals;
            if (steals > maxSteals) {
                maxSteals = steals;
                playerWithMostSteals = player;
            }
          }
        }
      }
    }
  
    // Compare the player with the longest name's steals with the player who has the most steals
    return longestNamePlayer === playerWithMostSteals;
  }
  
  // Example usage
  console.log("---------------------------------------");
  console.log(doesLongNameStealATon()); // Output: true or false based on the condition
  