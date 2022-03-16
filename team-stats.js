const team= {
  _players: [
      {
      firstName: 'Roberto',
      lastName: 'Romero',
      age: 23
  }
],
  _games: [
      {
      opponent: 'Barcelona',
      teamPoints: 93,
      opponentPoints: 45
    
  }
],

  get players(){
      return this._players;
  },

  get games(){
    return this._games;
},

addPlayer(firstName,lastName,age){
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    this.players.push(player);
},

addGame(opponent,teamPoints,opponentPoints){
    let game={
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    }
    this.games.push(game);

}

};

team.addPlayer("Carlos","Martinez",33);
team.addPlayer("Sara","Rojo",14);
team.addPlayer("Marcos","Sanz",15);
console.log(team.players);
console.log("");

team.addGame('Sevilla', 23, 12);
team.addGame('Tenerife', 23, 11);
team.addGame('Osasuna', 45, 7);

console.log(team.games);
console.log("-----");//Para acceder a una posición concreta
console.log(team.players[0].firstName);