const express = require('express');
const app = express();


app.get('/', (req, res) => res.status(200).json({ data: "shit pannel." }))

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))