import { Router } from "express";
import Product from "../../frontend/src/components/Product";

Router.get(
    '/',
    asyncHandler(async(req, res) => {
        const products = await Product.find({})
        res.json(products)
    }
    
    )
)