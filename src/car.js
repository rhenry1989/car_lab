function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;
  this.state = state;
  this.previousOwners = previousOwners; 
  this.currentOwner = currentOwner;
  this.passengers = passengers;
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
};


Car.prototype.paint = function(newColor){

};


module.exports=Car;