const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    // const queryText = (` SELECT * FROM "player" JOIN "person" ON "person"."id" = "player"."person_id";`)
    const queryText = (`SELECT "box_score".*, "player"."player_name" FROM "box_score" 
    JOIN "player" ON "player"."id" = "box_score"."player_id" WHERE "box_score"."game_mode" = 'practice' AND "player"."person_id" = $1;`)
    // "player"."person_id" = $1

    pool.query(queryText, [req.user.id])
        // [req.user.id]
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('in GET api/boxscore error', error);
        })
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