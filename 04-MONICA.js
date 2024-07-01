let n1 = parseInt(prompt('n1'))
let n2 = parseInt(prompt('n2'))
let n3 = parseInt(prompt('n3'))

let n4 = (n1 - (n2+n3))

max = 0
if(n2>n3){
    max = n2
}
else{
    max = n3
}

if(max>n4){
    document.write(max)
}
else{
    document.write(n4)
}