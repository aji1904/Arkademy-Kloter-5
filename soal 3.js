function string (int) {
     var regex = /[0-9]/g
     var getInt = int.match(regex)
     if(getInt == null){
         console.log('No number found in parameter!')
     }else{
         console.log(getInt.sort())
     }
}

console.log(string('48172a94'))
console.log(string('abc'))
console.log(string('94a'))

