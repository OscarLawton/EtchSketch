const express = require('express');
var path = require('path');
const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.render('etch5.html');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})