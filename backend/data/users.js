import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'abi',
        email: 'abi@email.com',
        password: bcrypt.hashSync('abi', 10),
        isAdmin: true
    },
    {
        name: 'karthik',
        email: 'karthik@email.com',
        password: bcrypt.hashSync('karthik', 10),
        isAdmin: true
    },
    {
        name: 'samuel',
        email: 'samuel@email.com',
        password: bcrypt.hashSync('samuel', 10),
        isAdmin: true
    },
    {
        name: 'giorgos',
        email: 'giorgos@email.com',
        password: bcrypt.hashSync('giorgos', 10),
        isAdmin: true
    },
    {
        name: 'kojo',
        email: 'kojo@email.com',
        password: bcrypt.hashSync('kojo', 10),
        isAdmin: true
    }
    

]

export default users
