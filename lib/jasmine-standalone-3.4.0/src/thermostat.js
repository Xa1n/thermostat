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
      this._changeMaxLimit();
     return this.powerSaveMode = !this.powerSaveMode;
  };

  Thermostat.prototype._changeMaxLimit = function() {
    if (this.powerSaveMode === true) { this.MAX_LIMIT_PSM = 25; }
    this.MAX_LIMIT_PSM = 32;
  };

  Thermostat.prototype._isPSMOn = function() {
      return this.powerSaveMode === true
  };

  Thermostat.prototype._inRange = function(num){
    return num <= this.MAX_LIMIT_PSM && num >= this.MINIMUM_TEMP;
  };

  // Thermostat.prototype._isBelow = function(num) {
    // return num < 10;                                   trying to bring this & the _isAbove version into the changeTemp function line 44, but doesn't work
  // };

  // Thermostat.prototype._isAbove = function(num) {
  //   return num > this.MAX_LIMIT_PSM
  // };

  Thermostat.prototype.changeTemp = function(num) {
    if (this._isPSMOn() && this._inRange()) {
      return this.temp = num;
    } else if (!this._isPSMOn() && this._inRange() ) {
      return this.temp = num;
    }
     return num < 10 ? this.temp = this.MINIMUM_TEMP : num > this.MAX_LIMIT_PSM ? this.temp = this.MAX_LIMIT_PSM : this.temp = num;
  };

  Thermostat.prototype.energyUsage = function() {
    if (this.temp < 18) { return "low-usage"; }
    else if (this.temp > 25 ) { return "high-usage";}
    return "medium-usage";
  };