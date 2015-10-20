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
import user_routes from './src/routes/users';
//import role_routes  from './src/routes/roles';
import test_routes from './src/routes/test';
import customer_routes from './src/routes/customers';
import generator_routes from './src/routes/generator_router';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('view engine', 'hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',user_routes);
//app.use('/api',role_routes);
app.use('/test',test_routes);
app.use('/api',customer_routes);
app.use('/generator',generator_routes);
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace




app.set('port', process.env.PORT || 3000);

let  server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
