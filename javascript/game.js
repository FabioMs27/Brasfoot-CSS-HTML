function Game(){
	this.team = new Team();
	var score;
	this.time = [];
}

var player1 = new Game();
var player2 = new Game();

player1.team = retrieve(player1.team,"player1");
player2.team = retrieve(player2.team,"player2");

player1.score = Math.floor(Math.random() * 5);
player2.score = Math.floor(Math.random() * 5);

for(var x; x < player1.score; x++){
	player1.time.push(Math.floor(Math.random() * 45)) +1;
	console.log(player1.time[x]);
}

for(var x; x < player2.score; x++){
	player2.time.push(Math.floor(Math.random() * 45)) +1;
	console.log(player1.time[x]);
}

console.log("gol do player 1:" + player1.score);
console.log("gol do player 2:" + player2.score);
