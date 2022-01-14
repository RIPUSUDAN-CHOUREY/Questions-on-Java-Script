//Nullish operator

let Human = {Name:"Rehman Ali",Age:23,Height:"5 feet 2 inch",weight:59,color:"Black",Emotions:0};//if there is a value they basically assign the given value to the parameter

Human.Emotions = Human.Emotions ?? "Happy";

console.log(Human.Emotions);



let Human = {Name:"Rehman Ali",Age:23,Height:"5 feet 2 inch",weight:59,color:"Black",Emotions:null};
//But if the value is null or nullish then they don't assign it to the parameter they give it a new value
Human.Emotions = Human.Emotions ?? "Happy";

console.log(Human.Emotions);







