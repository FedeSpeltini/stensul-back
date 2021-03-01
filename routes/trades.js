const express = require('express');
const router = express.Router();

const { createNewTrade, getTrades, modifyTrade  } = require('../controllers/trades')

router.get('/trades', function(req, res, next) {
    res.send('<p>HTML Data</p>');
});
  
router.post('/trades', createNewTrade );
router.get('/trades/:id', getTrades );

router.delete('/trades/:id', modifyTrade );
router.put('/trades/:id', modifyTrade );
router.patch('/trades/:id', modifyTrade );


var object_query = JSON.parse(req.params.object_query);







module.exports = router;
