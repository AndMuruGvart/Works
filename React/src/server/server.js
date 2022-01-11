import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if (!IS_DEV) {
  app.use(compression());
  app.use(helmet({
    contentSecurityPolicy: false
  }));
}
app.use('/static', express.static('./dist/client'));  // route for static files

app.get('/auth', (req, res) => {
  console.log(`code: ${req.query.code}`);
  console.log(`uri: ${process.env.REDIRECT_URI}`);
  console.log(`secret: ${process.env.REDDIT_SECRET}`);
  console.log(`client_id: ${process.env.CLIENT_ID}`);
  axios.post(
    'https://www.reddit.com/api/v1/access_token',  // url
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.REDIRECT_URI}`,  // data
    {    // config
      auth: { username: process.env.CLIENT_ID, password: 'gqdfUTCA84r5s7i1ZDPQwSpiV2Cs0w' },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  )
    .then(({data}) => {
      // req.query.code;
      console.log(`access_token: ${JSON.stringify(data.access_token)}`);
      res.send(
        indexTemplate(    // template would send from server
          ReactDOM.renderToString(App()),
          data['access_token']
        ),
      );
    })
    .catch(console.log());
});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(    // template would send from server
      ReactDOM.renderToString(App())
    ),
  );
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
