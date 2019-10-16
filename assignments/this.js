/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
* 2. Implicit: Implicit binding occurs when dot notation is used to invoke a function. whatever is to the left of the dot becomes the context for this in the function.
* 3. New Binding: 
* 4. Explicit: Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function. We call these explicit because you are explicitly passing in a this context to call() or apply().
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayLocation = function(){
    // 'use strict';
    console.log(this.location);
};

const mother = {
    name: 'Elvia',
    location: 'Rhode island'
};

sayLocation();
// location = 'California';
// sayLocation();

// Principle 2

// code example for Implicit Binding
const me = {
    name: 'Sergio',
    age: 22,
    location: 'Rhode Island',
    sayAge: function(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
};

me.sayAge();

// Principle 3

// code example for New Binding

var Friends = function(name, school, age){
    this.name = name;
    this.school = school;
    this.age = age;
};

const juan = new Friends('Juan', 'CCRI', 22);
const javonte = new Friends('Javonte', 'CCRI', 21)

console.log(`Hi my is ${juan.name} and I attend ${juan.school}`)
console.log(`Hi my name is ${javonte.name}, I also attend ${javonte.school} and I just turned ${javonte.age} last month.`)

// Principle 4

// code example for Explicit Binding
// call
const sayName = function(){
    console.log(`My name is ${this.name}, I am ${this.age} years old and I live in ${this.location}.`)
};

const sister = {
    name: 'Maritza',
    age: 19,
    location: 'Rhode Island',
};

sayName.call(sister);

//apply

const sayNameFather = function(lang1, lang2){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', and ' + lang2 + '.' )
};

const father = {
    name: 'Felipe',
    age: 45,
    location: 'Rhode Island',
};

const languages = ['Spanish', 'English'];

sayNameFather.apply(father, languages);
