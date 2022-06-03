import express from 'express';
import { program } from 'commander';
import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const port = 3001;
const secret = 'topSecret';

function isAuthEnabled() {
  program.option('--auth');
  program.parse();
  const { auth } = program.opts();
  return auth;
}

const server = express();

server.use(express.json());
server.use(cors());

if (isAuthEnabled()) {
  server.post('/login', (req, res, next) => {
    if (req.body.username === 'admin' && req.body.password === 'test') {
      res.send(
        jwt.sign({ user: req.body.username }, secret, { expiresIn: '1800s' })
      );
    }
  });

  server.use('/', (req, res, next) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      jwt.verify(token, secret);
      next();
    } catch (e) {
      res.sendStatus(403);
    }
  });
}

server.use('/', jsonServer.router('data.json'));

server.listen(port, () =>
  console.log(`server is listening to http://localhost:${port}`)
);
