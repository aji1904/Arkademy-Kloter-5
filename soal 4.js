const thirdHighest = arr => {
    if(typeof arr == 'string'){
        console.log('Parameter should be an array!')
    }else if(arr.length < 3){
        console.log('Minimal array length is 3!')
    }else{
        const int = arr.sort(function (a) {
            return !/^\d+$/.test(a);
        });
        const sorting = int.sort(function(a, b){
            return b-a
        })
        console.log(sorting[2])
    }
}

console.log(thirdHighest([1,2,3,4,5,6]))
console.log(thirdHighest("bukan array nih"))
console.log(thirdHighest([1,2]))
console.log(thirdHighest([107,1,-4,'a','true',0,-77]))