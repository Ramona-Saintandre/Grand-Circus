class User{
    private name:string;
    private email:string;
    private age: number;

    constructor(name:string,email:string,age:number){
this.name = name;
this.email = email;
this.age = age;

console.log('User created: '+this.name);

    }
}

{

}
let John = new User('John','jdoe@gmail.com', 49);

console.log(John.age);