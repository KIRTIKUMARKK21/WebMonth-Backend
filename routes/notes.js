const express = require("express");
const { addNote, getallnotes, updatenote, deleteNote } = require("../controllers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();
 

router.post("/add",verifyToken,addNote);
router.get("/getallnotes",verifyToken,getallnotes);
router.put("/update/:noteId",verifyToken,updatenote);
router.delete("/delete/:noteId",verifyToken,deleteNote);

// outer.post("/delete/:noteId", signUp);
// router.post("/update/:noteId", signUp);
module.exports = router;