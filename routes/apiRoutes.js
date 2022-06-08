const router = require("express").Router();
const path = require("path")
const fs = require("fs")
const uuid = require("../helpers/uuid");





router.post("/notes", (req, res) => {
    // reads file
    const currentSaves = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));

    // Adds new note
    const newSaves = [...currentSaves, { title: req.body.title, text: req.body.text, id: uuid()}];

    // writes file
    fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), newSaves)
});

module.exports = router;