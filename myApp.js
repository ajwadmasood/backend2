let express = require('express');
let app = express();
const path = require('path')
require('dotenv').config();

const logger = (req, res, next) => {
    const method = req.method
    const path = req.path
    const ip = req.ip
    console.log(method, path, ip)
    next()
  }
app.use(logger)

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
    if (process.env.MESSAGE_STYLE=='uppercase'){
        return res.json({"message": "Hello json".toUpperCase()});
    }
    res.json({"message": "Hello json"});
  })


app.listen(5000)
































 module.exports = app;
