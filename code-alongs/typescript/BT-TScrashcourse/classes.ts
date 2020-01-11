class User{
     name:string;
     email:string;
     age: number;

    constructor(name:string,email:string,age:number){
this.name = name;
this.email = email;
this.age = age;

console.log('User created: '+this.name);

    }

    register(){
        console.log(this.name+'is now registered');
    }
}


let John = new User('John','jdoe@gmail.com', 49);

John.register();

