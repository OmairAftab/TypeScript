"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 5;
let job = "Developer";
let haveJob = true;
let x = "90";
let ids = [1, 2, 3, 4, 5];
let arr = [1, "io", true];
//tuple:
let person = [1, "John", true]; //is order main rakh skte ho
//tuple array:
let students;
students = [
    ["omair", 1],
    ["omair aftab", 2],
    ["omair aftab ali", 3]
];
//union: (choice of multiple types)
let userId;
userId = "22";
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 0] = "Up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
//objects
let user = {
    id: 3,
    name: "omair"
};
let std1 = {
    name: "omair",
    roll: 1,
    age: 22
};
//TYPE ASSERTION
let cid = 1;
let customerod = cid; //1st way
let customerid = cid; //2nd way
//FUNCTIONS
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 2));
//void function
function log(message) {
    console.log(message);
}
log("Hello");
log(22);
let std2 = {
    name: "omair",
    roll: 1,
};
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        console.log(`${this.name} is now registered`);
    }
}
const omar = new Person(1, "omair");
console.log(omar);
omar.register();
//inheritance
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const umais = new Employee(2, "umais", "ml intern");
console.log(umais);
umais.register();
//# sourceMappingURL=index.js.map