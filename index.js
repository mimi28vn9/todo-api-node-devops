const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do API!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
