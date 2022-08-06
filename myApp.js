let express = require('express');
let app = express();
const path = require('path')

app.use('/public',express.static(path.resolve(__dirname, 'public')))
// app.use(express.static('/Users/ajwadmasood/Desktop/boilerplate-express/public'));
// app.use('/public', express.static('./public'));
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

app.get('/json',function(req, res) {
    res.json({"message": "Hello json"});
  })

// app.listen(5000)
































 module.exports = app;
