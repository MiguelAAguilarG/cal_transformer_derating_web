const tableAltitud =  [0.4, 0.0, 0.5, 0.5, 0.0];
const tableTemperature = [[1.5, 1.5, 1.0, 1.0, 1.0], [1.0, 1.0, 0.75, 0.75, 0.75]];

window.addEventListener("DOMContentLoaded", calc_main, false);
document.getElementById("form0").addEventListener("change", calc_main);
document.getElementById("form1").addEventListener("change", calc_main);
document.getElementById("form2").addEventListener("change", calc_main);
document.getElementById("form3").addEventListener("change", calc_main);

function calc_main() {
    console.log("cambio");

    /*data */
    /*form0 */
    var decimals = Number.parseInt(document.getElementById("decimals").value);
    /*form1 */
    var size = Number.parseFloat(document.getElementById("size").value);
    var cooling = Number.parseInt(document.getElementById("cooling").value);
    /*form2 */
    var altitud = Number.parseFloat(document.getElementById("altitud").value);
    var temperature = Number.parseFloat(document.getElementById("temperature").value);

    let flag = 0;
    if (temperature < -30 || temperature > 50) {
        temperature = 30;
        flag = 1;
    } if (altitud < 1000) {
        altitud = 1000;
        flag = 1;
    }
    
    if ( flag === 1 ) {
        document.getElementById("temperature").value = temperature.toFixed(decimals-2);
        document.getElementById("altitud").value = altitud.toFixed(decimals-2);
    } else {
        
    }

    /*computation */
    var temperatureDerating = 100.0;
    if (temperature < 30) {
        var auxtemperatureDerating = 1;
    } else if (temperature > 30) {
        var auxtemperatureDerating = 0;
    }else {
        var auxtemperatureDerating = -1;
    }

    if (auxtemperatureDerating === -1) {
        
    } else {
        temperatureDerating = 100 - (temperature-30)*tableTemperature[auxtemperatureDerating][cooling];
    }

    var altitudDerating = 100.0;
    altitudDerating = 100 - (altitud-1000)/100*tableAltitud[cooling];

    var derating = altitudDerating*temperatureDerating/100;
    var sizeDerating = size*derating/100;

    /*results */
    document.getElementById("altitudDerating").value = altitudDerating.toFixed(decimals);
    document.getElementById("temperatureDerating").value = temperatureDerating.toFixed(decimals);
    document.getElementById("sizeDerating").value = sizeDerating.toFixed(decimals);
    document.getElementById("derating").value = derating.toFixed(decimals);

}
