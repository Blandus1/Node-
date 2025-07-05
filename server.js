import http from 'http'

const PORT= process.env.PORT;

const server= http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>Hello world! Now it is working</h1><P> I am so SO happy!!!!');
}).listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})