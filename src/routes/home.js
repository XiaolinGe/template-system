var express = require('express');
var router = express.Router();

router.route('/login')
    .post(function(req, res) {
        req.session.user={id: 1};
        res.redirect("/admin/index.html");
    });

module.exports = router;
