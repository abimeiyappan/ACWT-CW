import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    iasAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
},{
    timestamps:true
})

const User = mongoose.model('USer', userSchema)

export default User