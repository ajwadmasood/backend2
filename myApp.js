let express = require('express');
let app = express();
const path = require('path')
// const http = require('http')
// const server = http.createServer()

// console.log('Hello World')

// app.get('/',function(req, res) {
//     res.send("Hello Express");
//   })

// absolutePath = __dirname + /views/index.html
const absolute = path.resolve(__dirname, 'views', 'index.html')

app.get('/',function(req, res) {
    res.sendFile(absolute);
  })
// app.get('/', '/Users/ajwadmasood/Desktop/boilerplate-express/views/index.html')

// app.listen(5000)
































 module.exports = app;
