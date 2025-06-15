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

// 1. numPointsScored
function numPointsScored(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}

// 2. shoeSize
function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}

// 3. teamColors
function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

// 4. teamNames
function teamNames() {
  const game = gameObject();
  const names = [];
  for (let teamKey in game) {
    names.push(game[teamKey].teamName);
  }
  return names;
}

// 5. playerNumbers
function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return Object.values(team.players).map(player => player.number);
    }
  }
}

// 6. playerStats
function playerStats(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let playerName in players) {
      const player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }

  return rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let playerName in players) {
      const player = players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topPlayer = playerName;
      }
    }
  }

  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let teamScores = {
    home: 0,
    away: 0
  };

  for (let teamKey in game) {
    const team = game[teamKey];
    for (let playerName in team.players) {
      teamScores[teamKey] += team.players[playerName].points;
    }
  }

  return teamScores.home > teamScores.away
    ? game.home.teamName
    : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let playerName in players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }

  return longestName;
}

function doesLongNameStealAT() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let maxSteals = 0;
  let topThief = "";

  for (let teamKey in game) {
    const players = game[teamKey].players;
    for (let playerName in players) {
      const steals = players[playerName].steals;
      if (steals > maxSteals) {
        maxSteals = steals;
        topThief = playerName;
      }
    }
  }

  return longestName === topThief;
}


console.log(numPointsScored("Ben Gordon")); // 33
console.log(shoeSize("Jason Terry"));       // 15
console.log(teamColors("Brooklyn Nets"));   // ["Black", "White"]
console.log(teamNames());                   // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
console.log(playerStats("Mason Plumlee"));
console.log(bigShoeRebounds()); // Should log rebounds of player with largest shoe size (Mason Plumlee -> 19 shoe -> 12 rebounds)
console.log("Most points scored by:", mostPointsScored());          // Ben Gordon
console.log("Winning team:", winningTeam());                        // Brooklyn Nets or Charlotte Hornets
console.log("Player with longest name:", playerWithLongestName());  // Brendan Haywood
console.log("Does longest name steal a ton?", doesLongNameStealAT()); // true or false
