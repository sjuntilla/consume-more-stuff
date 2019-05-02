const express = require('express');
const bodyParser = require('body-parser');
const

const PORT = process.env.PORT;
const REDIS_HOSTNAME = process.env.REDUS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`);
});