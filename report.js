let stud_name="Savio Bernard";
let roll_no=23;
const school ="Montfort School";
let percentage=90;
console.log("----Student Details----");
console.log("Name   : "+stud_name);
console.log("Roll No: "+roll_no);
console.log(`School : ${school}`);
console.log(`Percentage: ${percentage}`);
console.log(10/0);
console.log("abc"*2);
console.log(0.1+0.2);
let name="Sania Shanty";
let greet=`Hello ${name}, welcome!`;
console.log(greet);
console.log(name.length);
let isLoggedIn=true;
let hasPassed=35>40;
console.log(hasPassed);
let result;
console.log(result);
let selected=null;
console.log(selected);
let hugeno=123456789012345678901234567890n;
console.log(typeof hugeno);
let id1 =Symbol("id");
let id2 =Symbol("id");
console.log(id1==id2);
console.log(id1===id2);
let stud={
    name: "Savio Bernard",
    roll_no: 23,
    school: "Montfort School",
    percentage: 90
};
console.log(stud.name);
console.log(stud.roll_no);
let friuts=["apple","Banana","Mango"];
console.log(friuts[0]);
console.log(friuts[1]);
console.log(friuts.length);
console.log(friuts[0][3] && friuts[1][2]);

for (let i = 0; i < Math.max(friuts[0].length, friuts[1].length, friuts[2].length); i++) {
    if (friuts[0][i] in [friuts[1],friuts[2]] ){
        console.log(friuts[0][i])
    }
}

let dict={
    "name": "Savio Bernard",
    "roll_no": 23};
console.log(typeof null);
Number("42");
Number("abc");
String(42);
Boolean(0);

let a=5;
console.log(a++);
console.log(a);
let b=5;
console.log(++b);
let x=5;
let y=7;
let z=9;
let f1=x+y++*z-x+++y;
let f2=x+y*z-x+y;
