function Thermostat() {
    this.temp = 20;
    this.powerSaveMode = true;
};

Thermostat.prototype.setPowerSaveMode = function() {
    if (this.powerSaveMode == true) { return this.powerSaveMode = false;}
   else if (this.powerSaveMode == false) { return this.powerSaveMode = true;}
};

Thermostat.prototype._isOn = function() {
    return this.powerSaveMode === true
};

Thermostat.prototype._isOff = function() {
    return this.powerSaveMode === false
};

Thermostat.prototype.increaseBy = function(num){
    if (this._isOn() && this.temp + num <= 25 ) {
      return this.temp = this.temp + num;
    } else if ( this._isOn() && this.temp + num > 25) {
      return this.temp = 25;
    } else if ( this._isOff() && this.temp + num <= 32 ) {
      return this.temp = this.temp + num;
    } else if ( this._isOff() && this.temp + num > 32 ) {
      return this.temp = 32;
    } else { return this.temp = this.temp + num }
};

Thermostat.prototype.decreaseBy = function(num){
  if (this.temp - num >= 10) { return this.temp = this.temp - num }
  else { return this.temp = 10; }
};
