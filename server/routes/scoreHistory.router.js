const express = require('express');
const { array } = require('prop-types');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:userId', (req, res) => {
    // GET route code here

    console.log(req.params.userId)
    console.log('USERID', req.params.userId)

    // const sqlText = `SELECT "round".id, "score".hole_num, "score".par, "score" 
    // FROM "score"
    // JOIN "round" ON "round".id = "score".round_id
    // WHERE "user_id" = $1
    // ORDER BY "round".id DESC, "score".hole_num DESC;`;

    const sqlText = `SELECT SUM("score"), "round".id 
    FROM "score"
    JOIN "round" ON "round".id = "score".round_id
    WHERE "round".user_id = $1
    GROUP BY "round".id
    ORDER BY "round".id DESC;`

    pool.query(sqlText, [req.params.userId])

        .then((result) => {

            console.log('RESULT>ROWS', result.rows)

            let total = 0;
            let handiArr = []

            // for(let i = 0; i < 8; i++){
            //     handiArr.push(Math.max(result.rows[i].sum))
            // }

            // console.log('HANDIARRAY', handiArr)

            for (let i = 0; i < 20; i++) {
                // let num = parseInt(result.rows[i].sum)   

                //     total += num
                handiArr.push(parseInt(result.rows[i].sum))
            }

            console.log('HANDI', handiArr)

            console.log(Math.max(...handiArr))

            let array = []

            for (let i = 0; i < 8; i++) {
                // let max = Math.max(...handiArr)

                // array.push(max)
                // const max = Math.max(...handiArr)
                // handiArr.filter(handiArr => handiArr !== max)
                // console.log('ARRAY', max)

            }
            // let largest = 0
            // for (let i = 0; i < handiArr.length; i++) {
            //     if (largest < array[i]) {
            //         handiArr.push(array[i]);
            //     }
            // }

            // const newres = handiArr.filter(Math.max(handiArr))

            const points = handiArr.sort(function(a, b){return b-a});

            // for(let i = 0; i < 8)

            console.log('please work', points)
            
            // const result = handiArr.filter(checkHandi);

            // function checkHandi(handi) {
            //     return handi >= 18;
            // }



            // let resultPlusSum = {
            //     totals: result.rows,
            //     handiSum: total
            // }

            // console.log(resultPlusSum)


            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);

            res.sendStatus(500);
        });
});

module.exports = router;