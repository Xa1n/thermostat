'use strict';

describe("Thermostat", function() {

    var thermostat;

    beforeEach(function(){
     thermostat = new Thermostat();
    });

    it("has a default temp of 20 C", function() {
        expect(thermostat.temp).toEqual(20);
    });

    it("can be turned up", function(){
        thermostat.increaseTo(22);
        expect(thermostat.temp).toEqual(22);
    });

    it("can be turned down", function(){
        thermostat.decreaseTo(18);
        expect(thermostat.temp).toEqual(18);
    });

    it("has a min temp of 10 C", function(){
      thermostat.decreaseTo(9);
      expect(thermostat.temp).toEqual(10);
    });

    it("changes power save mode", function(){
      expect(thermostat.powerSaveMode).toBe(true);
      thermostat.togglePSM();
      expect(thermostat.powerSaveMode).toBe(false);
    });

    describe('maximum temperature', function(){

      var thermostat;

      beforeEach(function(){
       thermostat = new Thermostat();
      });

      it('has max temp of 25 if power save mode is on', function(){
        // thermostat power save mode is on by default
        thermostat.increaseTo(26);
        expect(thermostat.temp).toEqual(25);
      });

      it('has a max temp of 32 if power save mode is off', function(){
        thermostat.togglePSM(); // turns PSM off
        thermostat.increaseTo(33);
        expect(thermostat.temp).toEqual(32);
      });

    });

    describe("energy usage", function(){

      var thermostat;

      beforeEach(function(){
       thermostat = new Thermostat();
      });

      it("shows 'low-usage' if temp is less than 18 C", function(){
        thermostat.decreaseTo(17);
        expect(thermostat.energyUsage()).toEqual("low-usage");
      });

      it("shows 'medium-usage' if temp is between 18 and 25 C", function(){
        expect(thermostat.energyUsage()).toEqual("medium-usage");
      });

      it("shows 'high-usage' if temp is more than 25 C", function(){
        thermostat.togglePSM();
        thermostat.increaseTo(26);
        expect(thermostat.energyUsage()).toEqual("high-usage");
      });
    });
});
