const home = ['Closet','window','door','chair','wall'];
home[5] = 'floor';
home[6] = 'bed'
console.log(home);

//var delete_home = home.pop()
//console.log(delete_home);

delete home.Closet;
console.log(home.Closet);


const sort1 = home.sort()
console.log(sort1);



console.log(home.reverse());


let namber1 = [1,2,4,8,16]

namber1.forEach(x => console.log(namber1.indexOf(x)))
    

for (let i = 0; namber1.length > i; i++) {
    if(namber1[i] % 4 === 0) {
        console.log(i);
    }

}

const otiot = ['a','b','g','i','p']
let ok = otiot.toString()
console.log(ok);