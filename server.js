import express from 'express';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
import dotenv from "dotenv";
import connectDB from './db/connect.js';
import authRouter from './routes/authRoutes'

dotenv.config()

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  throw new Error('error')
  res.send('welcome')
})

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5005;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();