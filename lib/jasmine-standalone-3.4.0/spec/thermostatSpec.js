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
        thermostat.increaseBy(2);
        expect(thermostat.temp).toEqual(22);
    });

    it("can be turned down", function(){
        thermostat.decreaseBy(2);
        expect(thermostat.temp).toEqual(18);
    });

    it("has a min temp of 10 C", function(){
      thermostat.decreaseBy(15);
      expect(thermostat.temp).toEqual(10);
    });

    it("changes power save mode", function(){
      expect(thermostat.powerSaveMode).toBe(true);
      thermostat.setPowerSaveModeOff();
      expect(thermostat.powerSaveMode).toBe(false);
    });

    describe('maximum temperature', function(){

      var thermostat;

      beforeEach(function(){
       thermostat = new Thermostat();
      });

      it('has max temp of 25 if power save mode is on', function(){
        // thermostat power save mode is on by default
        thermostat.increaseBy(6);
        expect(thermostat.temp).toEqual(25);
      });

      it('has a max temp of 32 if power save mode is off', function(){
        thermostat.setPowerSaveModeOff();
        thermostat.increaseBy(13);
        expect(thermostat.temp).toEqual(32);
      });

    });
});
