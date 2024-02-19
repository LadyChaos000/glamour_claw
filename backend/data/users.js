import bycrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bycrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Peter Parker',
        email: 'peter@email.com',
        password: bycrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jenna Parker',
        email: 'jenna@email.com',
        password: bycrypt.hashSync('123456', 10),
        isAdmin: false,
    }
];

export default users;