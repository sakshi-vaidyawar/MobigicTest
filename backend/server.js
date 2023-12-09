const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser=require('body-parser')
const multer = require("multer");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());



const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mobigic_test",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected to database");
});




app.post("/singup", (req, res) => {
  const sql = "INSERT INTO users (`name`,`username`,`password`) values (?)";
  const values = [req.body.name, req.body.username, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT id FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        if (result.length === 0) {
            res.status(401).json({ message: 'Invalid credentials' });
        } else {
            const userId = result[0].id;
            req.user = { id: userId };
            res.status(200).json({ message: 'Login Successful', userId });
        }
    });
});




    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'uploads/'); // Folder to store files
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname); // Set unique filenames
        },
      });
      const upload = multer({ dest: 'uploads/' })
      
      
      function generateRandomNumber() {
        return Math.floor(100000 + Math.random() * 900000);
      }
      
  app.post('/upload/:user_id',upload.single('file'),(req,res)=>{
    const {user_id}=req.params;
    const filename=req.file.filename;
    const generated_number=generateRandomNumber();
    const sqlquery='INSERT INTO mobigic_files (user_id,filename,generated_number) VALUES (?,?,?)';
    db.query(sqlquery,[user_id,filename,generated_number],(err,result)=>{
      if(err) throw err;
      res.json({success:true ,message:"file uploaded successfully"});
    })

    })

    app.get('/get_files/:user_id',(req,res)=>{
      const {user_id}=req.params;
      const get_sqlquery='SELECT * FROM mobigic_files WHERE user_id=?';
      db.query(get_sqlquery,[user_id],(err,result)=>{
        if(err){
          res.status(500).json({message:'server problem occure'})
          return;
        }
        res.json({files:result})
      })
    })
      
    app.delete('/files_deleted/:file_id',(req,res)=>{
      const{file_id}=req.params;

      const delete_sqlquery='DELETE FROM mobigic_files WHERE id=?';
      db.query(delete_sqlquery,[file_id],(err,result)=>{
        if(err){
          res.status(500).json({message:"server error issue"})
          return;
        }
        res.json({success:true, message:"file deleted "})
      })
    })
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  


app.listen(2023, () => {
  console.log("listing...");
});
