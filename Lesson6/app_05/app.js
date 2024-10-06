const http = require('http');
const fs = require('fs');


const PORT = 3500;

http.createServer(function(req, res){
    const url = req.url;
    console.log(url);
    res.setHeader("Content-Type", "text/html; charset=utf-8;");

    switch (url) {
        case '/' :
            console.log('main page');
            res.write('<h1>Main</h1>');
            break;
            
        case '/contact' :
            console.log('contact page');
            let data = fs.readFileSync('./public/contact.html', {encoding: 'utf8', flag: 'r'});
            res.write(data);
            res.end();
            break;


            case '/about' :
                console.log('about page');
                let dataAbout = fs.readFileSync('./public/about.html', {encoding: 'utf8', flag: 'r'});
                res.write(dataAbout);
                res.end();
                break;    
        
        default: 
            if(url.includes('/images')) {
                console.log('render images');
                fs.readFile('./public'+ url, {}, function(error, dataImg){
                    if (error){

                    }
                    console.log('============= get img ============');
                    res.setHeader("Content-Type", 'image/png');
                    res.write(dataImg);
                    res.end();
                });
                
                
            }  
            else{
                console.log('404');
                res.write('<h1>404</h1>');
                res.end();
            }

            

    }

    
}).listen(PORT);