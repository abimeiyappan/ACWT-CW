import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// fetch all products
// route - GET /api/products
// public route
router.get('/',asyncHandler(async (req,res) => {
    const products=await Product.find({})
    res.json(products)
}))

// fetch one product
// route - GET /api/products/:id
// public route
router.get('/:id',asyncHandler( async (req ,res) => {
    const product =await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    //res.json(product)
}))

export default router