var select = document.querySelector("select");

function Converter() {
    var valorMoeda = parseFloat(document.getElementById('valorMoeda').value);
    var choice = select.value;

    if (choice === "Real <-> Dólar") {
        converteRealDolar(valorMoeda);
    } else if (choice === "Dólar <-> Real") {
        converterDolarReal(valorMoeda)
    } else if (choice === "Real <-> Euro") {
        converteRealEuro(valorMoeda)
    } else if (choice === "Euro <-> Real") {
        converteEuroReal(valorMoeda)
    } else if (choice === "Dólar <-> Euro") {
        converteDolarEuro(valorMoeda)
    } else if (choice === "Euro <-> Dólar") {
        converteEuroDolar(valorMoeda)
    } else if (choice === "Real <-> Bitcoin") {
        converteRealBitcoin(valorMoeda)
    } else if (choice === "Bitcoin <-> Real") {
        converteBitcoinReal(valorMoeda)
    }
}

function converteRealDolar(moeda) {
    var realDolar = (moeda / 5.22).toFixed(2);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + realDolar + " US$"
}

function converterDolarReal(moeda) {
    var dolarReal = (moeda * 5.22).toFixed(2);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + dolarReal + " R$"
}

function converteRealEuro(moeda) {
    var realEuro = (moeda * 0.16163).toFixed(2);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + realEuro + " €"
}

function converteEuroReal(moeda) {
    var euroReal = (moeda / 0.16163).toFixed(2);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + euroReal + " R$"
}

function converteDolarEuro(moeda) {
    var dolarEuro = (moeda * 0.85).toFixed(2);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + dolarEuro + " €"
}

function converteEuroDolar(moeda) {
    var euroDolar = (moeda / 0.85).toFixed(2);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + euroDolar + " US$"
}

function converteRealBitcoin(moeda) {
    var realBitcoin = (moeda * 0.00000397);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + realBitcoin + " ₿"
}

function converteBitcoinReal(moeda) {
    var bitcoinReal = (moeda / 0.00000397);

    document.getElementById('valorConvertido').innerHTML = "Convertido para: " + bitcoinReal + " R$"
}
