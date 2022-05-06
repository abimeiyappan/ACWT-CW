import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const uSchema = mongoose.Schema({
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
    timestamps: true
})

uSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

uSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next()
    }
    const salt =await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt )

    
})

const User = mongoose.model('User', uSchema)



export default User