const express = require("express")
const app = express();
const port = process.env.PORT || 3001
require("dotenv")

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//routes
app.use(require("./routes/index"))





app.listen(port)
console.log("server on port", port)