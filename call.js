// var obj={num:2};



// var addToThis=function(a){

//     return this.num+a;

// };

// console.log(addToThis.call(obj,3))
    

// var obj={num:2};



// var addToThis=function(a,b){

//     return this.num+a+b;

// };

// arr=[3,5]

// console.log(addToThis.apply(obj,arr))


// var obj={num:2};



// var addToThis=function(a,b){

//     return this.num+a+b;

// };

// arr=[3,5]

// var bound=addToThis.bind(obj,arr);

// bound(1,2);

// console.log(bound)






var student={age:20};

var printAge=function(a){
    return this.age;
};

var bound =printAge.bind(student);

console.dir(bound());

// ){

// let multiply=function(x,y
//     console.log(x*y);

// }



// let multiplyByTwo=multiply.bind(this, );

// multiplyByTwo(2,3);



// let multiplyByTwo=multiply.bind(this,3);

// multiplyByTwo(5);