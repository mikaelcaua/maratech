let nums = [1,1,2,2,3,4,5,5,6,6,6,7,7,7,8,9]

result = []

nums.forEach(Element => {
    if(!(result.includes(Element))){
        result.push(Element)
        
    }
})

document.write(result)
