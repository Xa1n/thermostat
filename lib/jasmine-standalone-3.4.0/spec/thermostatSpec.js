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

});
