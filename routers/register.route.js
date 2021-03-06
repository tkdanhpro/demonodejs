const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
  res.render('register', { success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
});

module.exports = router;
