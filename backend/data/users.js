import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@furnshop.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name:'Karthik Madheswaran',
        email:'krithikb4u@gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Sridhar',
        email:'sridhar@gmail.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'Abirami',
        email:'Abirami@gmail.com',
        password:bcrypt.hashSync('123456',10)
    }
]

export default users