const fs = require('fs');

// read json file
// const data = fs.readFileSync('./d_05/example_1.json', {encoding: 'utf8', });
const data = fs.readFileSync('./d_05/example_2.json', {encoding: 'utf8', });
// console.log(data);
// console.log(typeof data);

// parse json file
const dataObj = JSON.parse(data);

// console.log(dataObj);
// console.log(typeof dataObj);
// console.log(dataObj.sports)

const data2 = dataObj.sports;

data2.map((item)=>{
    console.log(item.category);
    
})










