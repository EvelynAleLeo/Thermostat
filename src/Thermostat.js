// var Thermostat = function(){};

// Thermostat.prototype.temperature = 20;

// Thermostat.prototype.up = function up(){
//   this.temperature ++;
// }; 
// The lines above cover the 2 fisrt specifications 
// of the thermostat program, which are:
// 1.- Thermostat starts at 20 degrees
// 2.- Can increase temperature with an up function
// And then, a better way to do this, from line 9 to 13:

var Thermostat = function(){
  this.temperature = 20;

  this.up = function up(){
    this.temperature ++;
  }

  this.down =function down(){
    this.temperature --;
  }

};
