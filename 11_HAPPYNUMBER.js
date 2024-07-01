// # def somarquadrado(num_list):
// #         total = 0
// #         for i in num_list:
// #             total += i ** 2
// #         return total

// # def isHappy(n):
// #     num_list = list(map(int, list(str(n))))
// #     result = []
// #     while True:
// #         soma = somarquadrado(num_list)
// #         if soma == 1:
// #             return True
// #         elif soma in result:
// #             return False
// #         else:
// #             result.append(soma)
// #             num_list = list(map(int, list(str(soma))))

function somarquadrado(num_list) {
    let total = 0;
    num_list.forEach(element => {
        total += element ** 2;
    });
    return total;
}

function isHappy(n) {
    let result = [];
    let soma;
    
    while (true) {
        let num_list = [];
        let str_n = String(n);
        
        for (let i = 0; i < str_n.length; i++) {
            num_list.push(parseInt(str_n[i]));
        }
        
        soma = somarquadrado(num_list);
        
        if (soma === 1) {
            return true;
        } else if (result.includes(soma)) {
            return false;
        } else {
            result.push(soma);
            n = soma;
        }
    }
}

let n1 = parseInt(prompt('n'))
document.write(isHappy(n1))






        