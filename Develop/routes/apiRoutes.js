const router = require("express").Router();
const path = require("path")
const fs = require("fs")

router.post("/notes", (req, res) => {
    const currentSaves = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));
});