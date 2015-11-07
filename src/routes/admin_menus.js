var express = require('express');
var router = express.Router();
import Admin_menu from '../entity/admin_menu';

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function is_admin(user) {
    let {role_id} = user;
    return role_id == 1;
}

router.route('/admin_menus')
// get all the admin_menus by conditions (accessed at GET http://localhost:8080/api/admin_menus)
    .get(function(req, res) {
        let session  = req.session;
        if(is_admin(session.user)) {
             Admin_menu.findAll().then(function(admin_menus) {
                 res.json(admin_menus);
             });
        } else {
            Admin_menu.findAll({
                where:{"is_admin":0}
            }).then(function(admin_menus) {
                res.json(admin_menus);
            });
        }
    });



module.exports = router;
