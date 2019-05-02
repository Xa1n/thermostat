function Thermostat() {
    this.temp = 20;
    this.powerSaveMode = true;
    this.MAX_LIMIT_PSM = 25;
};

Thermostat.prototype.setPowerSaveModeOn = function() {
    this.MAX_LIMIT_PSM = 25;
     return this.powerSaveMode = true;
};

Thermostat.prototype.setPowerSaveModeOff = function() {
  this.MAX_LIMIT_PSM = 32;
  return this.powerSaveMode = false;
};

Thermostat.prototype._isPSMOn = function() {
    return this.powerSaveMode === true
};

Thermostat.prototype.increaseBy = function(num){
  if (this._isPSMOn() && this.temp + num <= this.MAX_LIMIT_PSM ) {
    return this.temp += num;
  } else if (!this._isPSMOn() && this.temp + num <= this.MAX_LIMIT_PSM ) {
    return this.temp += num;
  }
    return this.temp = this.MAX_LIMIT_PSM;
};

Thermostat.prototype.decreaseBy = function(num){
  if (this.temp - num >= 10) { return this.temp = this.temp - num }
  else { return this.temp = 10; }
};
