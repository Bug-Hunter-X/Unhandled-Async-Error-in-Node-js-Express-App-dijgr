# Unhandled Asynchronous Error in Node.js Express Application

This repository demonstrates a common error in Node.js applications: unhandled exceptions within asynchronous callbacks.  The example uses Express.js, but the principle applies to any asynchronous operation (e.g., database queries, network requests).

The `bug.js` file contains code that intentionally throws an error inside a `setTimeout` callback. Because the error occurs asynchronously, it's not immediately caught by the Express error-handling middleware and thus crashes the server silently.

The `bugSolution.js` file provides a corrected version that uses `try...catch` blocks to handle potential errors within the asynchronous operation, ensuring graceful failure and preventing unexpected crashes.