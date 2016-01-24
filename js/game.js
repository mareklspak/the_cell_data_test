function init(){

}

function 

function Cell(){
	var cell = {
		"population":1, //Number of Cells
		"lifeSpan":100, //Cycles
		"reproductionChance":0.02, //two times per life cycle
		"mutationPotential":0.0001, // the chance of evolving
		"cellStability":1, //the stability of the cell which shows how likly the chance is that the cell is healthy
		"populationHealth":1
	}
}

function copyCell(old){
	var newCell = Cell(),i;
	for(i in old){
		if(old.hasOwnProperty(i)){
			newCell[i]=old[i];
		}
	}
	newCell.population=1; //reset cell population
	return newCell;
}