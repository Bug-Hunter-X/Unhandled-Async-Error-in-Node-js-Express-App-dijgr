const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate an asynchronous operation that might throw an error
      const result = 10 + 5; // Fixed: Removed nonExistentVariable
      res.send('Hello World!');
    } catch (error) {
      console.error('Error in asynchronous operation:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));