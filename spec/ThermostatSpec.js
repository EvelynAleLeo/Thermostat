describe('Thermostat', function() { 
 
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it('Shows initial temperature of 20 degrees', function() {
    expect( thermostat.temperature ).toEqual(20);
  });

  it('Can increase temperature by 1 degree', function up() {
    thermostat.up();
    expect( thermostat.temperature ).toEqual(21);
  });

  it('Can decrease temperature by 1 degree', function down() {
    thermostat.down();
    expect( thermostat.temperature ).toEqual(19);
  });

});

