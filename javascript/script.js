function Team(){
	this.lista = [];
}

team = new Team();

function Player(pos, name, age, foot, point, stamina){
	this.pos =pos;
	this.name =name;
	this.age =age;
	this.foot =foot;
	this.point =point;
	this.stamina =stamina;
}

//jogadores

team.lista.push(new Player(1,"popo",24, "E", 76, 88));
team.lista.push(new Player(2,"maguila", 21, "D", 82, 93));
team.lista.push(new Player(3,"junior", 27, "D", 88, 90));
team.lista.push(new Player(4,"pimba", 32, "D", 81, 99));
team.lista.push(new Player(5,"robson", 38, "E", 89, 92));
team.lista.push(new Player(6,"jaja", 39, "D", 72, 96));
team.lista.push(new Player(7,"releu", 30, "E", 73, 95));
team.lista.push(new Player(8,"papagaio", 32, "E", 74, 97));
team.lista.push(new Player(9,"lima", 22, "D", 93, 94));
team.lista.push(new Player(10,"pipa", 24, "D", 56,98));
team.lista.push(new Player(11,"matias", 23, "D", 85, 88));

var table = '';
var rows = 33;
var cols = 6;

function save(team,id){
	localStorage.setItem(id, JSON.stringify(team));
}

function retrieve(team,id){
	this.team = JSON.parse(localStorage.getItem(id));
}

//save(team);
//retrieve(team);

table += '<tr>' + '<th>' + "Pos" + '</th>' + '<th>' + "Name" + '</th>' + '<th>' + "Age" + '</th>' + '<th>' + "Foot" + '</th>' + '<th>' + "Point" + '</th>' + '<th>' + "stamina" + '</th>';

for(var r in team.lista)
{
	table += '<tr>';
	table += '<td>' + team.lista[r].pos + '</td>';
	table += '<td>' + team.lista[r].name + '</td>';
	table += '<td>' + team.lista[r].age + '</td>';
	table += '<td>' + team.lista[r].foot + '</td>';
	table += '<td>' + team.lista[r].point + '</td>';
	table += '<td class="energy">' + team.lista[r].stamina + '</td>';
	table += '</tr>';
}

document.write('<table align = "center">' + table + '</table>');