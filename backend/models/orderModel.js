import mongoose from 'mongoose'

const oSchema = ({
    name:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    orderItems:[{
        product: {
            required: true,
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Prod'
        },
        name:{
            type: String,
            required: true,
        },
        qty:{
            type: Number,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        shippingAddress:[{
            address: {
                type: String,
                required: true,
            },
            city:{
                type: String,
                required: true,
            },
            postalCode: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
        }],
    }
    ],
    paymentType:{
        required: true,
        type: String,
    },
    paymentResult:[{
        id: {
            type: String,
        },
        payStatus: {
            type: String,
        },
        email: {
            type: String,
        },
        time: {
            type: String,
        }
    }],
    taxPrice:{
        required: true,
        type: Number,
        default: 0.0,
    },
    shippingPrice:{
        required: true,
        type: Number,
        default: 0.0,
    },
    totalPrice:{
        required: true,
        type: Number,
        default: 0.0,
    },
    isPaid: {
        required: true,
        type: Boolean,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        required: true,
        type: Boolean,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },

},
{
    timestamps: true,
})

const Order = mongoose.model('Order', oSchema)

export default Order