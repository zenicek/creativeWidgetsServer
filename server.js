require('dotenv').config();
const Express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3003;
const router = require('./router');
const db = require('./Models/index');

const app = new Express();

//add cors config once added the user accounts
app.use(cors());
app.use(Express.json());
app.use(router);

//add db init later on when set up

(async () => {
  await db.mongoose.connect('mongodb://localhost:27017/');
  console.log('db connected');

  app.listen(PORT, () => {
    console.log('UIIIII Port 3003');
  });
})();
