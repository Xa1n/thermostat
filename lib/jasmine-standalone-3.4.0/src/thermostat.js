function Thermostat() {
    this.temp = 20;
};

Thermostat.prototype.increaseBy = function(num){
    return this.temp = this.temp + num;
};

Thermostat.prototype.decreaseBy = function(num){
    return this.temp = this.temp - num;
};

