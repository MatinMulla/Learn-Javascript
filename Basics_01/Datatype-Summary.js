// DataTypes can be of Two Types
//Primitive And Reference 

//Primitive Dtypes ----->
// 7 types : String,Number,Boolean,NULL,Undefined,Symbol,BigInt

const score = 100
const ScoreValue = 100.3

const Isloggedin = false
const OutsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const BigNumber = 12341353465n

//console.log(BigNumber);



//Reference Dtypes ----->
// Array,  Object, funtions

const heros = ["Moula Ali", "Umar Farooq", "Osman Gani","Kaleed-bin-waleed"];
let myobj = {
    name : "matin",
    age : 21,
}

const myFuntion = function(){
    console.log("Hello World!");
    
}

console.log(typeof BigNumber);

//Note : Write down all returntypes of all respective datatypes
/* There are two kinds of datatypes Supported by javascript
    such as 1)Primitive and 2) Reference/Non-Primitive

    Primitives Are of 7 Types
    1.String => it return Only String
    2.BigInt => it return Bigger values Followed By 'n' eg(15654739n)
    3.Boolean => It return only two values (True and false)
    4.Number => return Numeric Chars
    5.Null => Does'nt return anything but occupy the memory space
    6.Undefined => Returns undefined
    7.Symbol => Return Flaged values 

    Reference DTypes can be Of 
    1.Array => returns the array of Elements
    2.funtion => returns Funtion Body
    3.Ojects => used to call methods

*/