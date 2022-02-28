const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const resourceRouter = require('./routes/display.route');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser);

app.get('/todolist', resourceRouter);
app.post('/addTodoList' /* */);
app.put('/updateList' /* */);
app.delete('deleteTask' /* */);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
