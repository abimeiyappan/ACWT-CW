import mongoose from 'mongoose'

const uSchema = ({
    name:{
        required: true,
        type: String,
    },
    email:{
        required: true,
        unique: true,
        type: String,
    },
    password:{
        required: true,
        type: String,
    },
    isAdmin:{
        required: true,
        default: false,
        type: Boolean,
    },
},
{
    timestamps: true,
})

const User = mongoose.model('User', uSchema)

export default User