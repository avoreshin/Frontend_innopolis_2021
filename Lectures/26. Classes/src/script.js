import User from './user.js';
import Admin from './admin.js';

const andrew = new User();
andrew.firstName = 'Andrew';
andrew.lastName = 'Gulin';

console.log(andrew.toString());
console.log(andrew.firstName);


const boris = new User('Boris', 'Ivanov');
console.log(boris.toString());


const permissions = [
    'WRITE_DB',
    'WRITE_USER',
    'EDIT_RIGHTS'
]
const admin = new Admin('FirstName', 'LastName', permissions, '1@1.ru');
console.log(admin.toString());

console.log(Admin.isAdmin(boris));
