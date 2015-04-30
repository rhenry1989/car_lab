function Car(make, model, year, color, state){
  this.year = year;
  this.state = state;
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;