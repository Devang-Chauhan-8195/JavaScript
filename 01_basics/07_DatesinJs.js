/// Dates

let mydates = new Date()
// console.log(mydates);
// console.log(mydates.toString());
// console.log(mydates.toDateString());
// console.log(mydates.toLocaleString());

// console.log(typeof mydates);

// let mycreateDate =new Date(2004,8,25)
// console.log(mycreateDate.toDateString());

// let mycreateDate =new Date(2004,8,25,5,6)
// console.log(mycreateDate.toLocaleDateString());

let mycreateDate =new Date("09-25-2004")
// console.log(mycreateDate.toLocaleDateString());

// let mycreateDate =new Date("2004-09-25")
// console.log(mycreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdates = new Date()
console.log(newdates);
console.log(newdates.getDay());
console.log(newdates.getMonth());
