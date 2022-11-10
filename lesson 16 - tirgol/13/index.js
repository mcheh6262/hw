function date1(date) {
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(month);
}
date1()

function random1() {
   let randoms = Math.floor( Math.random() * 11)
   if (randoms > 5) {
    console.log('randoms' * 2);
   }
   else if  (randoms < 5) {
    console.log('randoms'); 
}
}
random1()

function stam () {
    string1 = [1,2,3]
    string2 = [3,4,5]
    for (e of string1) 
        for (i of string2) {
            if (e === i) {
                console.log('true');
            }
            else {
                console.log('false');
            }
        }
    }

