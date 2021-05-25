const jwt = require('jsonwebtoken');
const client = require('../configs/db');
exports.verifyToken=(req,res,next)=>
{
    const token=req.headers.authorization;
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err)
        {
            console.log(err);
            res.status(500).json({error:"Server error occured"});
        }
        const email=decoded.email;
        client
        .query(`SELECT * FROM users WHERE email = '${email}';`)
        .then((data)=>{
            if(data.rows.length===0){
                res.status(400).josn({
                    message:"INvalid Token",
                });
            }else{
                // console.log(email);
                req.email=email;
                next();
            }
        })
        .catch((err)=>{
            res.status(500).json({
                message:"Databse error occured",
            });
        });

    });
    // next();

};