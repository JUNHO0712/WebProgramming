const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}, Method: ${req.method}`);
    next();
});
app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello, My Name is 박규나!</h1>');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
