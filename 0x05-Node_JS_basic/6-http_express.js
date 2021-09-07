const express = require('express');

const app = express();

const port = 1245;

app.listen(port, () => {
  console.log(`App is ruining on port ${port}`);
});
