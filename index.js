const express = require("express")
const app = express()

app.get("/:name/:age", function (req, res) {
  res.send("welcom to world nodjs" + req.params.name + "are you" + req.params.name)
})

app.listen(1234)
console.log("server start")