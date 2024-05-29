const express = require('express');
const app = express();
const router = require('./route/route')
const serverConfig = require('./config/server.config')

app.use(express.json());

app.use('/spares', router)


app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port num : ${serverConfig.PORT}`);
})