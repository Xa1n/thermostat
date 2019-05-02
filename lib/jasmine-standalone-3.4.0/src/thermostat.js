function Thermostat() {
    this.temp = 20;
    this.powerSaveMode = true;
    this.MAX_LIMIT_PSM = 25;
    this.MINIMUM_TEMP = 10;
};

Thermostat.prototype.reset = function() {
  return this.temp = 20;
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

Thermostat.prototype.increaseTo = function(num){
  if (this._isPSMOn() && num <= this.MAX_LIMIT_PSM ) {
    return this.temp = num;
  } else if (!this._isPSMOn() && num <= this.MAX_LIMIT_PSM ) {
    return this.temp = num;
  }
    return this.temp = this.MAX_LIMIT_PSM;
};

Thermostat.prototype.decreaseTo = function(num){
  if (num >= this.MINIMUM_TEMP) { return this.temp = num }
  else { return this.temp = this.MINIMUM_TEMP; }
};
