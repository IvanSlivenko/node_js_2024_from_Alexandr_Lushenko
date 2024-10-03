// Підключаємо модулі для роботи з файловою системо

const fs = require('fs');
const path = require('path');

// Перевіряємо існування директорії fs.existsSync(pathToDir)

function f01 (){
    const pathToDir = './test';
    if(fs.existsSync(pathToDir)){
        console.log('yes');
        
    }else{
        console.log('No');
        
    }
}
// f01();

 // Перевірка існувіання файла  fs.existsSync(pathToFile)

 function f02 () {
    const pathToFile = './test/Святослав Вакарчук - Оберіг.mp3'

    if(fs.existsSync(pathToFile)){
        console.log('yes');
        
    }else{
        console.log('No');
        
    }

 }

//  f02();

// Обрахування розміру файла

function f03(){
    const pathToFile = './test/Святослав Вакарчук - Оберіг.mp3'
    const fileInfo = fs.statSync(pathToFile);
    console.log(fileInfo);
    
}

// f03();

//Ім'я  та розширення файлу

function f04 (){
    const pathToFile = './test/Святослав Вакарчук - Оберіг.mp3';
    console.log(path.basename(pathToFile));
    console.log(path.dirname(pathToFile));
    console.log(path.extname(pathToFile));
    console.log(path.parse(pathToFile));
    

}

// f04();

// Отримуємо файли та папки в директорії

function f05() {
    const pathToDir = './test';
    if(fs.existsSync(pathToDir)){
        console.log('yes');
        const allFiles = fs.readdirSync(pathToDir);
        console.log(allFiles);
        let out ='';
        allFiles.forEach(item => out += item+'\n');
        console.log(out);
        
        
        
    }else{
        console.log('No');
        
    }
}
 
// f05();

// Отримати  абсолютний шлях

const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath);
console.log(__dirname);
console.log(__filename);



