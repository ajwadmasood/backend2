let express = require('express');
let app = express();

console.log('Hello World')

app.get('/',function(req, res) {
    res.send("Hello Express");
  })

absolutePath = __dirname + /views/index.html
// /Users/ajwadmasood/Desktop/boilerplate-express/views/index.html
// app.get('/', /Users/ajwadmasood/Desktop/boilerplate-express/views/index.html)


































 module.exports = app;
