function Thermostat() {
    this.temp = 20;
    this.powerSaveMode = true;
    this.MAX_LIMIT_PSM = 25;
    this.MINIMUM_TEMP = 10;
};

  Thermostat.prototype.reset = function() {
    return this.temp = 20;
  };

  Thermostat.prototype.togglePSM = function() {
     this.powerSaveMode = !this.powerSaveMode;
     this._changeMaxLimit();
  };

  Thermostat.prototype._changeMaxLimit = function() {
    if (this.powerSaveMode === false) { return this.MAX_LIMIT_PSM = 32; }
    this.MAX_LIMIT_PSM = 25;
  };

  Thermostat.prototype._isPSMOn = function() {
      return this.powerSaveMode === true
  };

  Thermostat.prototype._inRange = function(num){
    return num <= this.MAX_LIMIT_PSM && num >= this.MINIMUM_TEMP;
  };

  Thermostat.prototype._isBelow = function(num) {
    return num < 10;
  };

  Thermostat.prototype._isAbove = function(num) {
    return num > this.MAX_LIMIT_PSM
  };

  Thermostat.prototype.changeTemp = function(num) {
    if (this._isPSMOn() && this._inRange()) {
      return this.temp = num;
    } else if (!this._isPSMOn() && this._inRange() ) {
      return this.temp = num;
    }
     return this._isBelow(num) ? this.temp = this.MINIMUM_TEMP : this._isAbove(num) ? this.temp = this.MAX_LIMIT_PSM : this.temp = num;
  };

  Thermostat.prototype.energyUsage = function() {
    if (this.temp < 18) { return "low-usage"; }
    else if (this.temp > 25 ) { return "high-usage";}
    return "medium-usage";
  };