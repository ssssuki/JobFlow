// const connectString =
// 'mongodb+srv://suki:<password>@nodeexpressprojects.4tek44e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'




import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connect(url)
}
export default connectDB