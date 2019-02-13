const express = require ('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res)=>{
    console.log('in req.body', req.body);
    
    const newPlayer = req.body;
    const queryText = `INSERT INTO "player" ("player_name", "person_id")
                        VALUES ($1, $2);`;
    const queryValues = [newPlayer.playerName, newPlayer.person_id];
    pool.query(queryText, queryValues)
    .then((responseFromDatabase)=>{
        console.log('in POST api/player/ responseFromDatabase', responseFromDatabase);
        res.sendStatus(201);
    }).catch((error) =>{
        console.log('error in POST api/player/', error);
        res.sendStatus(500);
    })
})

router.get('/', rejectUnauthenticated, (req, res) =>{
    const queryText = (`SELECT * FROM "player";` )
    pool.query(queryText)
    .then((result)=> {
        res.send(result.rows);
    }).catch((error)=>{
        console.log('in GET api/player error', error);
    })
})








module.exports = router;