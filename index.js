const express = require('express');
const app = express();


app.get('/', (req, res) => res.status(200).json({ data: "Updating from the other side." }))

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))