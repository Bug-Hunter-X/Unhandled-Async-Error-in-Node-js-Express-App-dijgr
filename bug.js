const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    //This is a deliberate error to demonstrate the issue
    const result = nonExistentVariable + 5;
    res.send('Hello World!');
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));