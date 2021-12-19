import User from './user.js';

export default class Admin extends User {
    _permissions;
    _email;

    static isAdmin(obj) {
        return obj instanceof Admin;
    }

    constructor(firstName = '', lastName = '', permissions = [], email = '') {
        super(firstName, lastName);

        this._permissions = permissions;
        this._email = email;
    }

    get permissions() {
        return this._permissions;
    }

    set permissions(value) {
        this._permissions = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    toString() {
        return `${super.toString()} [${this.permissions.join(', ')}] ${this._email}`;
    }
}
