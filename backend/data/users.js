import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Administrator',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'test1 test1',
    email: 'test1@test.com',
    password: bcrypt.hashSync('test1', 10),
  },
  {
    name: 'test2 test2',
    email: 'test2@test.com',
    password: bcrypt.hashSync('test2', 10),
  },
  {
    name: 'test3 test3',
    email: 'test3@test.com',
    password: bcrypt.hashSync('test3', 10),
  },
  {
    name: 'test4 test4',
    email: 'test4@test.com',
    password: bcrypt.hashSync('test4', 10),
  },
  {
    name: 'test5 test5',
    email: 'test5@test.com',
    password: bcrypt.hashSync('test5', 10),
  },
  {
    name: 'test6 test6',
    email: 'test6@test.com',
    password: bcrypt.hashSync('test6', 10),
  },
  {
    name: 'test7 test7',
    email: 'test7@test.com',
    password: bcrypt.hashSync('test7', 10),
  },
  {
    name: 'test8 test8',
    email: 'test8@test.com',
    password: bcrypt.hashSync('test8', 10),
  },
  {
    name: 'test9 test9',
    email: 'test9@test.com',
    password: bcrypt.hashSync('test9', 10),
  },
  {
    name: 'test10 test10',
    email: 'test10@test.com',
    password: bcrypt.hashSync('test10', 10),
  },
];

export default users;
