const express = require('express');
const mysql = require('mysql2')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"anmolis2405",
    database:"premier"

})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
// ADD RECORDS IN TABLES
app.post('/add_team',(req,res)=>{

    const team_name = req.body.team_name;
    const team_id = req.body.team_id;
    const rating = req.body.rating;
    const attack = req.body.attack;
    const defence = req.body.defence;
    const win_ratio = req.body.win_ratio;

    db.query("INSERT into Team(team_name,team_id,rating,attack,defence,win_ratio) VALUES(?,?,?,?,?,?)",[team_name,team_id,rating,attack,defence,win_ratio],(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Value inserted");
        }

    });
    console.log("khatam");
})
app.post('/add_match',(req,res)=>{

    const matchdate = req.body.matchdate;
    const matchid = req.body.matchid;
    const home_team = req.body.home_team;
    const away_team = req.body.away_team;
    const host = req.body.host;
    const score = req.body.score;

    db.query("INSERT into Matches(matchid,matchdate,home_team,away_team,host,score) VALUES(?,?,?,?,?,?)",[matchid,matchdate,home_team,away_team,host,score],(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Value inserted");
        }

    });
    console.log("khatam");
})
app.post('/add_venue',(req,res)=>{

    const matchid = req.body.matchid;
    const stadium_name = req.body.stadium_name;
    const city = req.body.city;
    const area_name = req.body.area_name;
    const humidity = req.body.humidity;
    const temperature = req.body.temperature;
    const weather = req.body.weather;
    const capacity = req.body.capacity;
    db.query("INSERT into Venue(stadium_name,matchid,city,area_name,humidity,temperature,weather,capacity) VALUES(?,?,?,?,?,?,?,?)",[stadium_name,matchid,city,area_name,humidity,temperature,weather,capacity],(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Value inserted");
        }

    });
    console.log("khatam");
})

app.post('/add_manage',(req,res)=>{

    const emp_id = req.body.emp_id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dept_name = req.body.dept_name;
    const phoneno = req.body.phoneno;
    const email = req.body.email;
    const gender = req.body.gender;
    const salary = req.body.salary;
    db.query("INSERT into Management(emp_id,first_name,last_name,dept_name,phoneno,email,gender,salary) VALUES(?,?,?,?,?,?,?,?)",[emp_id,first_name,last_name,dept_name,phoneno,email,gender,salary],(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Value inserted");
        }

    });
    console.log("khatam");
})
app.post('/add_player',(req,res)=>{

    const PLAYERID = req.body.PLAYERID;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const DOB = req.body.DOB;
    const Position = req.body.Position;
    const Nationality = req.body.Nationality;
    const team_id = req.body.team_id;
    const Kitnumber = req.body.Kitnumber;
    db.query("INSERT into PLAYER(PLAYERID,first_name,last_name,DOB,Position,Nationality,team_id,Kitnumber) VALUES(?,?,?,?,?,?,?,?)",[PLAYERID,first_name,last_name,DOB,Position,Nationality,team_id,Kitnumber],(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Value inserted");
        }

    });
    console.log("khatam");
})




// DISPLAY RECORD
app.get('/display_teams',(req,res)=>{
    const display_teams= "SELECT * FROM Team";
    db.query(display_teams,(error,result )=>{
        console.log("Error type:- ",error);

        res.send(result);
    })
})

app.get('/display_venue',(req,res)=>{
    const display_venue= "SELECT * FROM Venue";
    db.query(display_venue,(error,result )=>{
        console.log("Error type:- ",error);

        res.send(result);
    })
})
app.get('/display_player',(req,res)=>{
    const display_player= "SELECT * FROM PLAYER";
    db.query(display_player,(error,result )=>{
        console.log("Error type:- ",error);

        res.send(result);
    })
})

app.get('/display_matches',(req,res)=>{
    const display_match= "SELECT * FROM Matches";
    db.query(display_match,(error,result )=>{
        console.log("Error type:- ",error);
        res.send(result);
    })
})

app.get('/display_manage',(req,res)=>{
    const display_manage= "SELECT * FROM Management";
    db.query(display_manage,(error,result )=>{
        console.log("Error type:- ",error);

        res.send(result);
    })
})
// DELETE RECORDS
app.delete("/delete_team/:team_id",(req,res)=>{

    const {team_id} = req.params;
    db.query("DELETE FROM Team WHERE team_id=?",team_id,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
})
app.delete("/delete_match/:matchid",(req,res)=>{

    const {matchid} = req.params;
    db.query("DELETE FROM Matches WHERE matchid=?",matchid,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
})
app.delete("/delete_player/:PLAYERID",(req,res)=>{

    const {PLAYERID} = req.params;
    db.query("DELETE FROM PLAYER WHERE PLAYERID=?",PLAYERID,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
})
app.delete("/delete_venue/:stadium_name",(req,res)=>{

    const {stadium_name} = req.params;
    db.query("DELETE FROM Venue WHERE stadium_name=?",stadium_name,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
})
app.delete("/delete_manage/:emp_id",(req,res)=>{

    const {emp_id} = req.params;
    db.query("DELETE FROM Management WHERE emp_id=?",emp_id,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
            console.log(result);
        }
    });
})

//UPDATE RECORDS
app.put("/update_team", (req, res) => {
    // res.send("done");
    const team_name = req.body.team_name;
    const team_id = req.body.team_id;
    const rating = req.body.rating;
    const attack = req.body.attack;
    const defence = req.body.defence;
    const win_ratio = req.body.win_ratio;
    db.query(`UPDATE Team SET team_name ="${team_name}",rating=${rating},attack=${attack},defence=${defence},win_ratio=${win_ratio} WHERE team_id = "${team_id}"`,
    [team_name,team_id,rating,attack,defence,win_ratio],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log(team_name,team_id,rating,attack,defence,win_ratio);
          res.send(result);
        }
      }
    );
  });
  app.put("/update_venue", (req, res) => {
    // res.send("done");
    const matchid = req.body.matchid;
    const stadium_name = req.body.stadium_name;
    const city = req.body.city;
    const area_name = req.body.area_name;
    const humidity = req.body.humidity;
    const temperatue = req.body.temperatue;
    const weather = req.body.weather;
    const capacity = req.body.capacity;
    db.query(`UPDATE Venue SET matchid ="${matchid}",city=${city},area_name=${area_name},humidity=${humidity},temperatue=${temperatue},weather="${weather}",capacity=${capacity} WHERE stadium_name = "${stadium_name}"`,
    [matchid,stadium_name,city,area_name,humidity,temperatue,weather,capacity],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log(matchid,stadium_name,city,area_name,humidity,temperatue,weather,capacity);
          res.send(result);
        }
      }
    );
  });
  app.put("/update_player", (req, res) => {
    // res.send("done");
    const PLAYERID = req.body.PLAYERID;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const DOB = req.body.DOB;
    const Position = req.body.Position;
    const Nationality = req.body.Nationality;
    const team_id = req.body.team_id;
    const Kitnumber = req.body.Kitnumber;
    db.query(`UPDATE PLAYER SET first_name ="${first_name}",last_name="${last_name}",DOB="${DOB}",Position="${Position}",Nationality="${Nationality}",team_id="${team_id}",Kitnumber=${Kitnumber} WHERE PLAYERID = "${PLAYERID}"`,
    [PLAYERID,first_name,last_name,DOB,Position,Nationality,team_id,Kitnumber],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            // console.log(matchid,stadium_name,city,area_name,humidity,temperatue,weather,capacity);
          res.send(result);
        }
      }
    );
  });
  
  app.put("/update_match", (req, res) => {
    // res.send("done");
    const match_date = req.body.match_date;
    const match_id = req.body.match_id;
    const home_team = req.body.home_team;
    const away_team = req.body.away_team;
    const host = req.body.host;
    const score = req.body.score;
    db.query(`UPDATE Team Matches match_date ="${match_date}",home_team="${home_team}",away_team="${away_team}",host="${host}" , score=${score} WHERE match_id = "${match_id}"`,
    [match_date,match_id,home_team,away_team,host,score],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log(match_date,match_id,home_team,away_team,host,score);
          res.send(result);
        }
      }
    );
  });

  app.put("/update_manage", (req, res) => {
    // res.send("done");
    const emp_id = req.body.emp_id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dept_name = req.body.dept_name;
    const phoneno = req.body.phoneno;
    const email = req.body.email;
    const gender = req.body.gender;
    const salary = req.body.salary;
    db.query(`UPDATE Management SET first_name ="${first_name}",last_name="${last_name}",dept_name="${dept_name}",phoneno=${phoneno},email="${email}",gender="${gender}",salary=${salary} WHERE emp_id = "${emp_id}"`,
    [emp_id,first_name,last_name,dept_name,phoneno,email,gender,salary],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            console.log(emp_id,first_name,last_name,dept_name,phoneno,email,gender,capacity);
          res.send(result);
        }
      }
    );
  });

app.listen(4000,()=>{
    console.log("listening");
})