import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import path from 'path'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'/frontend/build')))
  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}else{
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}


app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))