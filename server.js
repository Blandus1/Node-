import http from 'http'

const PORT= process.env.PORT;

const server= http.createServer((req,res)=>{

if(req.url === '/'){

    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>Homepage</h1>');
}else if( req.url=== '/about'){
     res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>About</h1>');
}else{
    res.writeHead(404,{'Content-type':'text/html'});
    res.end('<h1>Not found</h1>'); 
}

    
   
}).listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})