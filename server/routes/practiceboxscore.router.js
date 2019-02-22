const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    // const queryText = (` SELECT * FROM "player" JOIN "person" ON "person"."id" = "player"."person_id";`)
    const queryText = (`SELECT "box_score".*, "player"."player_name" FROM "box_score" 
    JOIN "player" ON "player"."id" = "box_score"."player_id" WHERE "box_score"."game_mode" = 'practice' 
    AND "player"."person_id" = $1 ORDER BY "id" DESC;`)
    // "player"."person_id" = $1

    pool.query(queryText, [req.user.id])
        // [req.user.id]
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('in GET api/boxscore error', error);
        })
})
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in put route req.body', req.body);

    const boxscore = req.body
    const queryText = `UPDATE "box_score" SET "FGA"=$1, "FGM"=$2, "THREEPA"=$3, "THREEPM"=$4,
    "REB"=$5, "AST"=$6, "TO"=$7, "PTS"=$8 WHERE id= $9`;
    pool.query(queryText, [boxscore.FGA, boxscore.FGM, boxscore.THREEPA, boxscore.THREEPM,
    boxscore.REB, boxscore.AST, boxscore.TO, boxscore.PTS, req.params.id])
        .then((responseFromDatabase) => {
            console.log('in put PRACTICE ROUTER responseFromdatabase', responseFromDatabase);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error completing put PRACTICE boxscore query', error);
            res.sendStatus(500);
        });
})
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const boxscore = req.params
    const queryText = `DELETE FROM "box_score" WHERE id=$1;`;
    pool.query(queryText, [boxscore.id])
        .then((responseFromDatabase) => {
            console.log('in delete responseFromdatabase', responseFromDatabase);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error completing DELETE boxscore query', error);
            res.sendStatus(500);
        });
})

module.exports = router;