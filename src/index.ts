
let id : number =5;


let job: string = "Developer";

let haveJob: boolean = true;

let x:any="90";

let ids:number[]=[1,2,3,4,5];

let arr:any=[1,"io",true];



//tuple:
let person:[number,string,boolean]=[1,"John",true];   //is order main rakh skte ho

//tuple array:
let students: [string,number][];

students=[
    ["omair",1],
    ["omair aftab",2],
    ["omair aftab ali",3]
]



//union: (choice of multiple types)
let userId: string| number

userId="22";






enum direction1{
    Up=0,
    down=1,
    left=2,
    right=3
}

enum direction2{
    Up = "Up",
    down = "down",
    left = "left",
    right = "right"
}



//objects
let user : {id:number, name:string} ={

    id:3,
    name:"omair"

}


//define objects type easily like this and then use:
type student={
    name:string,
    roll:number,
    age:number
}

let std1:student={
    name:"omair",
    roll:1,
    age:22
}






//TYPE ASSERTION
let cid: any=1;
let customerod=<number>cid;  //1st way
let customerid=cid as number;  //2nd way






//FUNCTIONS
function addNum(x:number,y:number) : number {
    return x+y;
}
console.log(addNum(3,2));


//void function
function log(message:string | number):void{  //jo function void ki return type se bnnaen ge wo kuch return nhi kr skta wo sirf console.log kr skta hai ya kuch aur kr skta hai but return nhi kr skta koi value.. agar beeche main return statement likhi to error aayega
    console.log(message);
}

log("Hello");
log(22);





interface studentInterface{
    name:string,
    roll:number,
    age?:number     //madde age optional  isliye ? lagaya hai na b likho to khair h
}

let std2:studentInterface={
    name:"omair",
    roll:1,
}




//classes

interface PersonInterface{
    id:number,
    name:string,
    register():void
}

class Person implements PersonInterface{
    id:number;
    name:string;    

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    register(){
        console.log(`${this.name} is now registered`);
    }
}


const omar=new Person(1,"omair");
console.log(omar);
omar.register();





//inheritance
class Employee extends Person{
    position:string

    constructor(id:number,name:string,position:string){
        super(id,name);
        this.position=position;
    }
}



const umais=new Employee(2,"umais","ml intern");
console.log(umais);
umais.register();










//GENERICS
function getArray<T>(items:T[]) : T[] {

    return new Array().concat(items);
}

let numArray=getArray<number>([1,2,3,4]);
let strArray=getArray<string>(["omair","aftab","ali"]);

// numArray.push("hello"); now it will not allow as we mentioned generics now

strArray.push("hello");  //now it will allow as we mentioned generics of strArray as string now