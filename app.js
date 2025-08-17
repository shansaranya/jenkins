const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Please provide numeric query parameters a and b');
  }
  
  const sum = a + b;
  res.json({ result: sum });
});

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
