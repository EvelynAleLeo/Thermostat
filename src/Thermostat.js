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
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;

  this.up = function up(){
    if (this.powerSavingMode == true) {
      if (this.temperature < 25) {
        this.temperature ++;
      }
    } else {
      if (this.temperature < 35) {
        this.temperature ++;
      }
    }
  }

  this.down = function down(){
    if (!this.isMinTemp()) {
      this.temperature --;
    }
  }

  this.isMinTemp = function isMinTemp(){
    return this.temperature === this.MIN_TEMP;
  }

};
