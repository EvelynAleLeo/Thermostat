describe('Thermostat', function() { 
 
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('Shows initial temperature of 20 degrees', function() {
    expect( thermostat.temperature ).toEqual(20);
  });

  it('Can increase temperature by 1 degree', function () {
    thermostat.up();
    expect( thermostat.temperature ).toEqual(21);
  });

  it('Can decrease temperature by 1 degree', function () {
    thermostat.down();
    expect( thermostat.temperature ).toEqual(19);
  });

  it('Set the minimum temperature to 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect( thermostat.temperature).toEqual(10);
  });

  it('If power saving mode is on, the maximum temperature is 25 degrees', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect( thermostat.temperature).toEqual(25);
  });

  it('If power saving mode is off, the maximum temperature is 35 degrees', function() {
    thermostat.powerSavingMode = false;
    for (var i = 0; i < 16; i++) {
      thermostat.up();
    }
    expect( thermostat.temperature).toEqual(35);
  });
  
});

