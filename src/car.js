function Car(make, model, year, color, state, previousOwners){
  this.year = year;
  this.state = state;
  this.previousOwners = previousOwners;
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;