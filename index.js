const http = require ("http");
http.createServer((req,res)=>{
    let user={name:'prajwal',age:23,branch:'ITI Electrician'}
    res.write(JSON.stringify(user))
    res.write("hello rinkal ! ");
    res.write("<h1>hello rinkal !</h1>");

    res.end();
}).listen(4000);
