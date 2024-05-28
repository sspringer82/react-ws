import express from 'express';
import jwt from 'jsonwebtoken';
import jsonServer from 'json-server';

const app = express();
const PORT = 3001;
const SECRET_KEY = 'your_secret_key';

app.use(express.json());

const users = [
  {
    username: 'admin',
    password: 'test',
  },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '5h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

app.use('/', authenticateToken, middlewares, router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
