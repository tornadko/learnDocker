'use strict';

const express = require("express")
const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';

app.get("/test", (req, res) => {
	res.send("Server is working correctly")
})

app.listen(PORT, HOST, () => {
	console.log("API-service is working")
})