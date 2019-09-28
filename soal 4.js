function thirdHighest(arr){
    var arrObject3 = 4
    var arr3 = arr.slice(0, arrObject3)
    console.log(arr3)
    if(typeof arr3 == 'string'){
        console.log('Parameter should be an array!')
    }else if(arr3.length < arrObject3){
        console.log('Minimal array length is 3!')
    }else{
        console.log(arr3)
    }
}

console.log(thirdHighest([1,2,3,4,5,6]))
console.log(thirdHighest("bukan array nih"))
console.log(thirdHighest([1,2]))
console.log(thirdHighest([107,1,-4,'a','true',0,-77]))