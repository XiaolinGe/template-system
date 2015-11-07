import express from 'express';
import webpack from 'webpack';
import config from './webpack.config';
import path from 'path';
import favicon from 'static-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import debug from 'debug';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import session from 'express-session';
import uuid from 'uuid';

import user_routes from './src/routes/users';
import test_routes from './src/routes/test';
import customer_routes from './src/routes/customers';
import generator_routes from './src/routes/generator_router';
import home_routes from './src/routes/home';
import website_routes from './src/routes/websites';
import simple_info_routes from './src/routes/simple_infos';
import gallery_routes from './src/routes/gallerys';
import working_hour_routes from './src/routes/working_hours';
import template_routes from './src/routes/templates';
import log_routes from './src/routes/logs';
import admin_menu_routes from './src/routes/admin_menus';
import role_routes from './src/routes/roles';
import {login_checker,action_logger} from './middlewares';

const app = express();
const compiler = webpack(config);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());
app.use(session({
  genid: function(req) {
    return uuid.v1();
  },
  secret: 'keyboard cat'
}));

app.use(login_checker);
app.use(action_logger);
app.use("/",website_routes);

app.use(express.static(path.join(__dirname, 'public')));


app.use("/",home_routes);
app.use('/api',user_routes);
//app.use('/api',role_routes);
app.use('/test',test_routes);
app.use('/api',customer_routes);
app.use('/generator',generator_routes);
app.use('/website',website_routes);
app.use('/api',simple_info_routes);
app.use('/api',gallery_routes);
app.use('/api',working_hour_routes);
app.use('/api',template_routes);
app.use('/api',log_routes);
app.use('/api',admin_menu_routes);
app.use('/api',role_routes);


app.get("/host", function (req, res){
    console.log("REQ:: "+req.headers.host);
    res.send(req.headers.host.replace(/:.*$/,""));
});



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



app.set('port', process.env.PORT || 3000);

let  server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
