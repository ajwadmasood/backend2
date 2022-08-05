let express = require('express');
let app = express();
// const http = require('http')
// const server = http.createServer()

// console.log('Hello World')

// app.get('/',function(req, res) {
//     res.send("Hello Express");
//   })

// absolutePath = __dirname + relativePath/file.ext

app.get('/',function(req, res) {
    res.sendFile('/Users/ajwadmasood/Desktop/boilerplate-express/views/index.html');
  })
// app.get('/', '/Users/ajwadmasood/Desktop/boilerplate-express/views/index.html')

// app.listen(5000)
































 module.exports = app;
