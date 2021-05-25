const client = require("../configs/db");
exports.addNote=(req,res)=>{
    const {heading,content}=req.body;
    // console.log(req);
    client.query(
    `INSERT INTO notes (email, heading, content) VALUES ('${req.email}', '${heading}' , '${content}');`)
    .then((data)=>{
        res.status(200).json({
            mesaage:"Note added successfully",
        });
    })
    .catch((err) => {
        res.status(400).json({
            mesage:"DB error occured",
        });
    });
};
exports.getallnotes=(req, res)=>{
    client.query(
        `SELECT * FROM notes where email='${req.email}';`)
        .then((data)=>{
            // console.log(data);
            const noteData = data.rows;
            const filteredData = noteData.map((note) => {
              return {
                noteId: note.noteid,
                heading: note.heading,
                content: note.content,
              };
            });
            // console.log(filteredData);
            res.status(200).json({
                mesaage:"Succes",
                data: filteredData,
            });
        })
        .catch((err) => {
            res.status(400).json({
                mesage:"DB error occured",
            });
        });


};
exports.updatenote= (req, res) => {
    const noteId=req.params.noteId;
    const { heading, content } = req.body;
    client
      .query(
        `UPDATE notes SET heading='${heading}' , content='${content}' WHERE noteid='${noteId}'`
      )
      .then((data)=>{
        res.status(200).json({
            mesaage:"Note updated successfully",
        });
    })
    .catch((err) => {
        res.status(400).json({
            mesage:"DB error occured",
        });
    });
    

};
exports.deleteNote=(req, res)=>{
    const noteId=req.params.noteId;
    client
      .query(
        `DELETE FROM notes WHERE noteid='${noteId}';`
        
      )
      .then((data)=>{
        res.status(200).json({
            mesaage:"Note deleted successfully",
        });
    })
    .catch((err) => {
        res.status(400).json({
            mesage:"DB error occured",
        });
    });
    

};
