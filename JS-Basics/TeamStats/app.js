const team = {
    _players : [
      {
        firstName: 'Pablo', 
        lastName: 'Sanchez',
        age: 11
      },
      {
        firstName: 'Pete', 
        lastName: 'Wheeler',
        age: 54
      },
      {
        firstName: 'Arytha', 
        lastName: 'Franklin',
        age: 59
      },
      {
        firstName: 'Paul', 
        lastName: 'Runner',
        age: 17
      },
      {
        firstName: 'Sarah', 
        lastName: 'Clark',
        age: 22
      },
      {
        firstName: 'Cathrin', 
        lastName: 'Brown',
        age: 33
      },
    ],
    _games : [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Giants',
        teamPoints: 53,
        opponentPoints: 22
      },
          {
        opponent: 'Rabbits',
        teamPoints: 40,
        opponentPoints: 30
      },
      {
        opponent: 'Kangoos',
        teamPoints: 55,
        opponentPoints: 20
      },
    ],
    get players() {
      return this._players;	
    },
    get games() {
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age,
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent, 
        teamPoints, 
        opponentPoints,
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Runners', 39, 38);
  team.addGame('Fighters', 60, 20);
  team.addGame('Highlanders', 45, 38);
  
  console.log(team._players);
  console.log(team._games);