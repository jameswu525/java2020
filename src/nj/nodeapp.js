var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var data = fs.readFileSync('..\\app.java');
    response.write(data.toString());
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

fs.readFile('..\\app.java', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
console.log("node app !");