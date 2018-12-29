const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

console.log(publicPath);
var app = express();

app.use(express.static(publicPath));
// app.get('/', (req, res) => {
//     // res.send('<h1>Hello Express!</h1>');
//     res.send({
//         name: 'Meera',
//         likes: [
//             'biking',
//             'eatings'
//         ]
//     });
// });

app.listen(port, () => {
    console.log(`server is up on ${port}`);
});