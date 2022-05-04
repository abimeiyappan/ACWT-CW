import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userrating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
},
{
    timestamps: true
})

const pSchema = mongoose.Schema({
    user:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name:{
        required: true,
        type: String,
    },
    image:{
        required: true,
        type: String,
    },
    brand:{
        required: true,
        type: String,
    },
    category:{
        required: true,
        type: String,
    },
    description:{
        required: true,
        type: String,
    },
    review: [reviewSchema],
    rating:{
        required: true,
        type: Number,
        default: 0,
    },
    numReviews:{
        required: true,
        type: Number,
        default: 0,
    },
    price:{
        required: true,
        type: Number,
        default: 0,
    },
    stock:{
        required: true,
        type: Number,
        default: 0,
    },
},
{
    timestamps: true
})

const Prod = mongoose.model('Prod', pSchema)

export default Prod