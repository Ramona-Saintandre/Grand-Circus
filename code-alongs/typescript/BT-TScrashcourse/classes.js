var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + 'is now registered');
    };
    return User;
}());
var John = new User('John', 'jdoe@gmail.com', 49);
John.register();
