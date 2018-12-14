
/*
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It''s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them.
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
  _players: [
    {
    firstName: 'John', lastName: 'Donovan', age: 21 },
  	{
    firstName: 'Mark', lastName: 'Whulberg', age: 32 },
  	{
    firstName: 'Jack', lastName: 'Johnson', age: 25}
  ],
  
  _games: [
    {
    opponent: 'LA Riot', teamPoints: 34, opponentPoints: 11 },
    {
    opponent: 'NY Dolphins', teamPoints: 24, opponentPoints: 29 },
    {
    opponent: 'AZ Hammers', teamPoints: 22, opponentPoints: 21 },
  ],
  
  get players () {
  	return this._players;
	},
  
  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
}

team.addPlayer('Steph Curry Age 28','Lisa Leslie Age 44', 'Bugs Bunny Age 76');
console.log(team.players);
team.addGame('CA chariots', 30, 21);
console.log(team.games);
