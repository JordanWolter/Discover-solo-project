const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/id', (req, res) => {
  // POST route code here
  console.log('IDIDIDIDIDIDIDIDIDID', req.body);
  const queryText = `INSERT INTO "round"(user_id, course_id, course_name)
  VALUES ($1, $2, $3) RETURNING "id";`;

  const queryParams = [req.body.user_id, req.body.course_id, req.body.course_name];

  pool.query(queryText, queryParams)

  .then(() => res.sendStatus(201))

  .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  })
});

module.exports = router;
