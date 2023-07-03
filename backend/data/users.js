import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true,
    },
    {
        name: 'Kuku',
        email: 'kuku@gmail.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false,
    },
    {
        name: 'Lulu',
        email: 'Lulu@gmail.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: false,
    }
];

export default users;