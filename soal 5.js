function countChar (param1, param2) {
    var counter = 0
    for(var i = 0; i < param1.length; i++){
        if(param1.charAt(i) == param2 ){
            counter += 1 
        }
    }
    if(counter==0){
        console.log('Not Found')
    }else{
        return counter
    }
}

console.log(countChar('arkademy','a'));
console.log(countChar('javascript','x'));
