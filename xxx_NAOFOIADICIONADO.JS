
// let n = parseInt(prompt("Digite a quantidade de números a verificar:"));

// for (let j = 0; j < n; j++) {
    let num = parseInt(prompt("Digite um número:"));
    let cont = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            cont += i;
        }
    }

    document.write(`Soma dos divisores de ${num}: ${cont}<br>`);
    if (cont === num) {
        document.write(`${num} é perfeito`);
    } else {
        document.write(`${num} não é perfeito`);
    }
// }
