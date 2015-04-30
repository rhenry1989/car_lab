function Car(make, model, year, color, state, previousOwners, currentOwner, passengers, isParked){
  this.year = year;
  this.state = state;
  this.previousOwners = previousOwners; 
  this.currentOwner = currentOwner;
  this.passengers = passengers;
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};


Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function() {
  this.state = 'on';
}

Car.prototype.off = function() {
  this.state = 'off';
}

Car.prototype.pickUp = function(passengerName) {
  if (this.state === "on") {
    this.passengers.push(passengerName);
  }
}

Car.prototype.dropOff = function() {
  if (this.state === "on") {
      this.passengers = [];
    } 
}

Car.prototype.parked = function() {
  this.isParked = true;
}


module.exports=Car;