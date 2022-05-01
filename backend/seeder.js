import mongoose from 'mongoose'
import Prod from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import dotenv from 'dotenv'
import products from './data/products.js'
import users from './data/users.js'
import connectdb from './config/db.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async() => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Prod.deleteMany()

        const createUsers = await User.insertMany(users)
        const adminUser = createUsers[0]._id
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })
        await Prod.insertMany(sampleProducts)
        console.log('Data imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Prod.deleteMany()
        console.log('Data destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyData()
}
else{
    importData()
}
