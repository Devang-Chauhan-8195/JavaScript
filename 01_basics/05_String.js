const name ="Devang "
const repoCount = 4

// console.log((name + repoCount + "value"));

console.log(`Hello My name is ${name} and my Repo Count is ${repoCount}`);


const Gamename = new String ('Devang-c')

// console.log(Gamename[0]);
// console.log(Gamename.__proto__);

console.log(Gamename.length);
console.log(Gamename.toUpperCase());
console.log(Gamename.charAt(2));
console.log(Gamename.indexOf('n'));

let newString = Gamename.substring(0,4)
console.log(newString);

let anotherString = Gamename.slice(1,4)
console.log(anotherString);

const newStringOne = "    Devang    "
console.log(newStringOne);
console.log(newStringOne.trim());
 

const url = "https://Dvang.com/Devnag%81Chauhan"
console.log(url.replace('%81','-'))

console.log(url.includes('Chauhan'))

console.log(Gamename.split('-'))




