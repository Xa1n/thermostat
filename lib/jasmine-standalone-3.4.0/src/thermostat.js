function Thermostat() {
    this.temp = 20;
};

Thermostat.prototype.increaseBy = function(num){
    return this.temp = this.temp + num;
};

Thermostat.prototype.decreaseBy = function(num){
  if (this.temp - num >= 10) { return this.temp = this.temp - num }
  else { return this.temp = 10; }
};
