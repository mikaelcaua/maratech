function transforma(valorRomano) {
    if (valorRomano === 'M') {
        return 1000;
    } else if (valorRomano === 'D') {
        return 500;
    } else if (valorRomano === 'C') {
        return 100;
    } else if (valorRomano === 'L') {
        return 50;
    } else if (valorRomano === 'X') {
        return 10;
    } else if (valorRomano === 'V') {
        return 5;
    } else if (valorRomano === 'I') {
        return 1;
    } else {
        return 0; 
    }
}

function romano(roman) {
    if (typeof roman !== 'string') return 0; 

    let result = 0;
    let atual, proximo;

    for (let i = 0; i < roman.length; i++) {
        atual = transforma(roman[i]);
        proximo = transforma(roman[i + 1]);

        if (proximo > atual) {
            result += proximo - atual;
            i++;
        } else {
            result += atual;
        }
    }

    return result;
}


const numeralRomano = 'MIV';
document.write(romano(numeralRomano)); 
