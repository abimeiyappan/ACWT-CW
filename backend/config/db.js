import mongoose from 'mongoose'
const connectDB = async () => {
   /* try 
    {
    
        const conn = await mongoose.connect (process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewurlParser: true,
        }
        )
        console.log('MongoDB Connected')
    } catch (error) {
    console.error(error.message)
    process.exit(1)

    }*/
    mongoose.connect(process.env.MONGO_URI).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`.cyan.underline);
      }).catch((err)=>{
        console.log(err.red.underline.bold)
      })
}
export default connectDB