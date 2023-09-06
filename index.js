// console.log(hoistNumber)
// var hoistNumber = 4+5 ;
let hoistNumber = 4 + 5;
console.log(hoistNumber);

//Comparison Oparators : 

let a = 40;
let b = 12;
// let c = a==b;----------------Equal to [ false ]

// c = a === b;-------------- Equal Value and Equal type [ false ]

// let c = a!=b;----------------Not Equal [ true ]

// let c = a !== b ;------------Not Equal Value or Not Equal Type [ true ]

// let c = a !=="40" ;----------Due to not equal type [ ture ] 

// let c = a !== 40;------------[it will be false due to eque value ]

// let c = a>b; ----------------Greater than [ ture ]

// let c = a<b;-----------------Less than [ false ]

// let c = a >= b;------------Greater than value or equal to [ true ]

//  let c = a <= b;---------------Less than value or equal to [false ]
// console.log(c);

let x = 5 ;
x++;
let z = x ;
console.log(z); // increment 

let c = 5 ;
let d = 5**3;
console.log(d); // exponantial 
console.log(Math.pow( c , 2)) // for getting exponantial value we can use this one also method 

let e = 5 ;
e--;
let f = e ;
console.log(f); // decrement 

let ab =true;
console.log(typeof(ab));
ab =null;
console.log(typeof(ab));
ab = null ;
console.log(ab);
ab = undefined;
console.log(typeof(ab));

let gender;
console.log(gender?true : false);
gender = "male";
console.log(gender?true:false);

function myFunction(){
    let sam = "topper";
}
console.log(myFunction());