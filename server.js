const express = require("express")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/artists", require("/routes/artistRouter.js"))

app.use(9000, () => {
    console.log("successfully running on port 9000")
})