//se for mais de uma entrada, basta descomentar
// let n1 = parseInt(prompt('Digite a quantidade de números:'))
// let cont
// let x
// for (let i=0;i<n1;i++){
    cont = 0
    x = parseInt(prompt('insira um número: '))
    while(x>1){
        x = x/2 
        cont+=1
        
    }  
    document.write(cont + ' dias')
// }