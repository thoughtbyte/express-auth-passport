const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');

/* GET user profile page. */
// add route here
router.get('/', authHelpers.loginRequired, (req, res) => {
  res.render('user/index', {
    user: req.user.dataValues
  });
});


module.exports = router;
