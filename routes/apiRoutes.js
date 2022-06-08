const router = require("express").Router();
const path = require("path")
const fs = require("fs")
const uuid = require("../helpers/uuid");

router.get("api/notes", (req, res) => {
    const notes = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));
    const parsedNotes = JSON.parse(notes);
    res.json(parsedNotes);
})



router.post("api/notes", (req, res) => {
    // reads file
    const currentSaves = fs.readFileSync(path.join(process.cwd(), "/db/db.json"));
    // parses current saves into JSON
    const parsedSaves = JSON.parse(currentSaves);
    // Adds new note
    const newSaves = [...parsedSaves, { title: req.body.title, text: req.body.text, id: uuid()}];

    // writes file
    fs.writeFileSync(path.join(process.cwd(), "/db/db.json"), JSON.stringify(newSaves), res.json(newSaves));
});

module.exports = router;