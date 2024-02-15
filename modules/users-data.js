export default new class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

export function printName(name){
    console.log("your name is " + name);
}

export function printAge(age){
    console.log("your age now is " + age);
}