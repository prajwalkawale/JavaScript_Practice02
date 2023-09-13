let $_1 = "hello console";
console.log("upperCase::",$_1.toUpperCase());

// convert lowerCase 

let $_2 = "HELLO JAVASCRIPT";
console.log("loweCase::", $_2.toLowerCase());

function myFunction(){
    let $_3 = "hello";
    console.log($_3.toUpperCase())
}
myFunction();

// CONCAT METHOD 

let $_4 = "Hello";
let $_5 = "JavaScript";
console.log($_4.concat(" ",$_5));

//REPLACE ALL 

let text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("cats","dog"); // first value change here 
text = text.replaceAll("Cats","Dog"); // second value change here 
console.log(text);