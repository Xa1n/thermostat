function Thermostat() {
    this.temp = 20;
    this.powerSaveMode = true;
};

Thermostat.prototype.increaseBy = function(num){
    return this.temp = this.temp + num;
};

Thermostat.prototype.decreaseBy = function(num){
  if (this.temp - num >= 10) { return this.temp = this.temp - num }
  else { return this.temp = 10; }
};

Thermostat.prototype.setPowerSaveMode = function() {
    if (this.powerSaveMode == true) { return this.powerSaveMode = false;}
   else if (this.powerSaveMode == false) { return this.powerSaveMode = true;}
};
