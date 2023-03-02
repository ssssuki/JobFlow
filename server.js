import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
const app = express();


app.get('/', (req, res) => {
  res.send('welcome')
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`)
})