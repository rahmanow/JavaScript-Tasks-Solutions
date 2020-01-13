const team = {
    _players: [{firstName: 'Pablo', lastName: 'Sanchez', age: 11},
        {firstName: 'Azat', lastName: 'Rahmanow', age: 12},
        {firstName: 'Serdar', lastName: 'Orazow', age: 15}],
    _games: [{opponent: 'Broncos', teamPoints: 42, opponentPoints:27},
        {opponent: 'Samada', teamPoints: 33, opponentPoints:35},
        {opponent: 'Jelil', teamPoints: 29, opponentPoints:16}],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {firstName, lastName, age};
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {opponent, teamPoints, opponentPoints};
        this.games.push(game);
    }
}


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Strew', 13, 18);
team.addGame('Jacka', 19, 24);
team.addGame('Abbas', 36, 29);



console.log(team.players);

console.log(team.games);