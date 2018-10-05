require('dotenv').config();
const app = require('./src/config.js');

app.listen(process.env.PORT, () => {
  console.log(`Port is running on port ${process.env.PORT}`)
});