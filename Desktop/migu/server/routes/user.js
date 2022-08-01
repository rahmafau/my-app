const express = require ('express');
const router = express.Router();
const { createToken} = require('../helper/createToken')
const crypto = require('crypto');
const transporter = require('../helper/nodemailer');
const { auth } = require('../helper/authToken');
const db = require('../database/db').promise()

router.post('/register', async (req, res) => {
    try {
        let { username, email, password} = req.body;
        password = crypto.createHmac("sha256","hash123").update(password).digest("hex");
        
        
        let checkUsername = `select * from user where username = ?`;
        let [result_checkUsername] = await db.execute(checkUsername, [username]);

        if (result_checkUsername.length > 0) return res.status(400).send("Username is already exist");
        
        let checkEmail = `select * from user where email = ?`;
        let [result_checkEmail] = await db.execute(checkEmail, [email]);

        if (result_checkEmail.length > 0) return res.status(409).send("Email is already exist");

        let addQuery = `insert into user(username, email, password, role, status) values (${db.escape(username)}, ${db.escape(email)}, ${db.escape(password)}, 'user', 'unverified')`;
        let [result_register] = await db.execute(addQuery)

        let sqlGet = `Select * from user where iduser = ${result_register.insertId}`
        let [getToken] = await db.execute(sqlGet)
        
        // //bahan data buat token
        let { iduser, role, status} = getToken[0]

        //buat token
        console.log({ iduser, username, email, role, status})
        let token = createToken({ iduser, username, email, role, status})
        
        let mail = {
            from: `Admin <shopinc.musc@gmail.com>`,
            to: `${email}`,
            subject: 'Account verification',
            html: `<a href='http://localhost:3000/authentication/${token}'>Click here for verification your email</a>`
        }

        transporter.sendMail(mail, (errMail, resMAil) => {
            if(errMail) {
                console.log(errMail)
                res.status(503).send({message:"Registration Failed!!", success: false, err: errMail})
            }
            res.status(200).send({message:"Registration Success, Check your email!", success: true})
        })

        // if(result_register.insertId) {
        //     let sqlGet = `Select * from user where iduser = ${result_register.insertId}`;
        //     db.query(sqlGet, (err2, result2) => {
        //         if(err2) {
        //          console.log(err2);
        //          res.status(502).send(err2);
        //         } 

        //         //bahan data buat token
        //         let { iduser, username, email, role, status} = result2
        //         //buat token
        //         let token = createToken({ iduser, username, email, role, status})

        //         let mail = {
        //             from: `Admin <shopinc.musc@gmail.com>`,
        //             to: `${email}`,
        //             subject: 'Account verification',
        //             html: `<a href='http://localhost:3000/authentication/${token}'>Click here for verification your email</a>`
        //         }

        //         transporter.sendMail(mail, (errMail, resMAil) => {
        //             if(errMail) {
        //                 console.log(errMail)
        //                 res.status(503).send({message:"Registration Failed!!", success: false, err: errMail})
        //             }
        //             res.status(200).send({message:"Registration Success, Check your email!", success: true})
        //         })
        //     })
        // }

    } catch (err) {
      console.log( err);
      res.status(504).send(err);
    }
})

router.patch('/verified', auth, async (req, res) => {
    try {
        console.log(req.user)
        let updateQuerry = `UPDATE user SET status = 'verified' WHERE iduser = '${req.user.iduser}';`
        // console.log(updateQuerry)
        await db.execute(updateQuerry)
        res.status(200).send( {message: "verified Account", success: true})
    } catch(err) {
        res.status(504).send(err)
    }
})

router.post("/login", async (req, res) => {
    try {
        let {username, password} = req.body;
        password = crypto.createHmac("sha256","hash123").update(password).digest("hex");
        
        let loginQuery = "SELECT * FROM user WHERE username = ?";
        let [result_loginQuery] = await db.execute(loginQuery, [username]);
        
        if(result_loginQuery.length > 0) {
            if (password == result_loginQuery[0].password) {return res.json({ loggedIn: true, message:"log in Success", username: username })}
            else { res.json({
                    loggedIn: false,
                    message: "Wrong username/password combo!",
                })
            }
        }
    } catch (err) {
        console.log( err);
        res.status(504).send(err)
    }
})
//         const {username, password} = req.body;
//         console.log({username, password})
//         password = crypto.createHmac("sha1", "has123").update(password).digest("hex");
//         console.log(password);
//         db.query(
//             "SELECT * FROM user WHERE username = ? or email = ?",
//             {username, email},
//             (err, results) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 if (result[0])
//                 let {iduser, email , role, status} = result[0];
//                 let token = createToken({iduser, username, email, password, role, status})
//             if(status != 'verified' ){
//                 res.status(200).send({message: "your account not verified"})
//             } else {res.status(200).send({datalogin: result[0], token, message: "Login success"})
//         if (results.length > 0) {
//           if (password == results[0].password) {
//             res.json({ loggedIn: true, username: username });
//           } else {
//             res.json({
//               loggedIn: false,
//               message: "Wrong username/password combo!",
//             });
//           }
//         } else {
//           res.json({ loggedIn: false, message: "User doesn't exist" });
//         }
//       }
//     );
//   });

module.exports = router