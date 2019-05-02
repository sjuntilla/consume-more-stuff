const express = require('express');
const bodyParser = require('body-parser');
const

const PORT = process.env.PORT;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }

app.use(bodyParser.json());

// start server
app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`);
});