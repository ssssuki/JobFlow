import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {

  const authHeader=req.headers.authorization
  console.log(req.headers)

  if (!authHeader) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
  const token= authHeader.split(' ')[1]
  // console.log(token)
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // const testUser = payload.userId === '63628d5d178e918562ef9ce8';
    req.user = { userId: payload.userId};
    next();
  } catch (error) {
    // console.log(error)
    throw new UnAuthenticatedError('Authentication Invalid');
  }
};

export default auth;

