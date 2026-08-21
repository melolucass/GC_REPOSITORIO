import http from "http"
const server = http.createServer((req, res) =>{
    res.writeHead(200,{ "content-type": "text/plain;charset=utf-8"})
    res.write("Instituto de Computação")
    res.end
    
}) 

server.listen(5555)
