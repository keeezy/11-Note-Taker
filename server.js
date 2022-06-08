// Modules
const express = require("express")
const app = express();
const path = require("path")

// Imported Routes
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

// Call Routes
app.use("/", htmlRoutes);
app.use("/", apiRoutes);

// PORT
app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})