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

});