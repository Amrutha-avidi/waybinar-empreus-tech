const express = require("express")
const mysql = require('mysql')
const cors = require("cors")

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12672303',
    password: 'YRBmIjdgxx',
    database: 'sql12672303',
})

app.get("/", (req, res) => {
    return res.json("from backedn")
})

app.get("/webinars", (req, res) => {
    const sql = 'SELECT * FROM Webinar';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})
app.get('/webinars/:id', (req, res) => {
    const {id} = req.params
    const sql = 'SELECT * FROM Webinar where id=?'
    db.query(sql,id,(err,result)=>{
        if(err){
            console.log(err)
        }
        res.json(result)
    })
    

});






app.listen(8000, () => {
    console.log("listening")
})