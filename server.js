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

// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
    let url = req.url;
    console.log(url);
    console.log(url.indexOf("/admin")===-1);
    if(url.indexOf("/admin")===-1||url.indexOf(".css")>-1
       ||url.indexOf(".js")>-1||url.indexOf(".gig")>-1||url.indexOf(".png")>-1){
        next();
    }else{
        let sess = req.session;
        console.log(sess);
        if(sess.user){
            next();
        }else{
            req.url = '/admin/login.html';
            next();
        }
    }
});
app.use("/",website_routes);

app.use(express.static(path.join(__dirname, 'public')));


app.use("/",home_routes);
app.use('/api',user_routes);
//app.use('/api',role_routes);
app.use('/test',test_routes);
app.use('/api',customer_routes);
app.use('/generator',generator_routes);
app.use('/website',website_routes);


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
