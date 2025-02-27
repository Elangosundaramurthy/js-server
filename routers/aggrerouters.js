const express = require('express');
const router = express.Router();
const {aggregation1}=require("../controllers/aggregationcontrollets")
router.get('/match', aggregation1);
module.exports = router;