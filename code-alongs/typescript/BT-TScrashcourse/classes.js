var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created: ' + this.name);
    }
    return User;
}());
{
}
var John = new User('John', 'jdoe@gmail.com', 49);
console.log(John.age);
