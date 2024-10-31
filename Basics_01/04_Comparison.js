//New Topic Begins --------->

console.log( 2 > 1);
console.log(2 >= 4);
console.log(2 != 3);
 //The Outputs will Be True OR False values

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


/* The reason is that an equality check == and Comparisons > < >= <+
works Differently
Comparison Converts Null to a Number, treating it as 0.
thats why (3) null >= 0 is true and (1) null > 0 is false */



