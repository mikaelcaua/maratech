function fatorial(x) {
    let f = 1;
    while (x > 0) {
        f = f * x;
        x -= 1;
    }
    return f;
}

let n = prompt('Digite um número (digite 0 para sair):');
while (n !== '0') {
    let tam = n.length;
    let result = 0;
    let i = 0;
    while (tam > 0) {
        result += parseInt(n[i]) * fatorial(tam);
        tam -= 1;
        i += 1;
    }

    document.write(result);
        
    n = prompt('Digite um número (digite 0 para sair):');
}
    