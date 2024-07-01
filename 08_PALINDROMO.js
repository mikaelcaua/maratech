function isPalindrome(xConvertido){
    let tam = xConvertido.length
    let i = 0
    let j = tam-1

    while(i<j){
        if(xConvertido[i]!=xConvertido[j]){
            return false
        }
        i++
        j--
    }
    return true

};

let n = (prompt('Digite uma palavra: ').toLocaleUpperCase)
document.write(isPalindrome(n))