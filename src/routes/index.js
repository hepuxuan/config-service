const express = require("express");
const _ = require("lodash");
const { config } = require("../model/config");
const router = express.Router();

/* GET home page. */
router.get("/public", function(req, res, next) {
  const { application } = req.query;
  config.find({ application, isPublic: true }, (err, config) => {
    if (err) {
      res.status = 500;
      res.json({
        err
      });
    } else {
      const data = _.mapValues(_.keyBy(config, "key"), v => v.value);
      res.json({ data });
    }
  });
});

module.exports = router;
