var thermostat = new Thermostat();

$(document).ready(function(){
  showTemp();

  $('#temperature-up').on('click',function () {
    thermostat.up();
    showTemp();
  })

  $('#temperature-down').on('click',function () {
    thermostat.down();
    showTemp();
  })

  $('#powersaving-on').on('click',function () {
    thermostat.powerSavingMode = true;
    $('#power-saving-status').html('on');
  })

  $('#powersaving-off').on('click',function () {
    thermostat.powerSavingMode = false;
    $('#power-saving-status').html('off');
  })

  $('#temperature-reset').on('click',function () {
    thermostat.reset();
    showTemp();
  })

  function showTemp() {
    $('#temperature').html(thermostat.temperature);
  }
});