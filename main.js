function snapCrackle(maxValue) {
    let resultado = "";
    for (let i = 1; i <= maxValue; i++) {
        if (i > 1) {
            resultado += ", "
        }
        if (i % 2 !== 0 && i % 5 === 0) {
            resultado += "SnapCrackle"
        } else if (i % 5 === 0) {
            resultado += "Crackle"
        } else if (i % 2 !== 0) {
            resultado += "Snap"
        } else {
            resultado += i
        }


    }

    const corpo = document.getElementById("corpo");
    const criarResultado = document.createElement("div");
    criarResultado.innerHTML = resultado;
    corpo.appendChild(criarResultado);
    return resultado;
}

function snapCracklePrime(maxValue) {
    let resultado = "";
    for (let i = 1; i <= maxValue; i++) {
        if (i > 1) {
            resultado += ", "
        }
        if (i % 2 !== 0 && i % 5 === 0 && i % 3 !== 0) {
            resultado += "SnapCracklePrime"
        } else if (i > 3 && i % 2 !== 0 && i % 3 !== 0) {
            resultado += "SnapPrime"
        } else if (i === 3) {
            resultado += "SnapPrime"
        } else if (i % 2 !== 0 && i % 5 === 0) {
            resultado += "SnapCrackle"
        } else if (i % 5 === 0) {
            resultado += "Crackle"
        } else if (i % 2 !== 0) {
            resultado += "Snap"
        } else if (i > 2 && i % i === 0 && i % 2 !== 0 && i % 3 !== 0) {
            resultado += "Prime"
        } else if (i === 2) {
            resultado += "Prime"
        } else {
            resultado += i
        }

    }
    const corpo1 = document.getElementById("corpo");
    const criarResultado1 = document.createElement("div");
    criarResultado1.innerHTML = resultado;
    corpo1.appendChild(criarResultado1);
    return resultado;

}