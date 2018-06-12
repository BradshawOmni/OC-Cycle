import express from 'express';
import webpack from 'webpack';
import request from 'request';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import * as constants from './toolConstants';

/* eslint-disable no-console */

const port = constants.port;
const apiPort = constants.apiPort;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
