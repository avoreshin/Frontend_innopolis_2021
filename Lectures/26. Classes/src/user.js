export default class User {
    _firstName;
    _lastName;

    static isUser(obj) {
        return obj instanceof User;
    }

    constructor(firstName = '', lastName = '') {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get firstName() {
        return `Имя: ${this._firstName}`;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get lastName() {
        return this._lastName;
    }

    toString() {
        return `${this._firstName} ${this._lastName}`;
    }
}
