
var weekdays  	= ['m', 't', 'w', 'th', 'f'];
var weekend 	= ['s', 'sun'];

//multidimensional array below
var week = [ weekdays, weekend ];

console.log( week[0][3] ); //should return TH via multidimensional array
console.log( weekdays[3] );
console.log( week[1][1] ); //shou;d return SUN via multidimensional array
console.log( weekend[1] );


// in-class exercise
var num1 = 10;
var num2 = 20;
var total = num1 + num2;
console.log(total);

////
var firstName = "Al";
var lastName = "Olsen";
var whiteSpace = " ";

var name = firstName + whiteSpace + lastName;

console.log( name );
//var name2 = "Al" + "Olsen"; //AlOlsen

var me = {
	firstName : "Al",
	lastName : "Olsen",
	birthday : "6/6",
	interests : "Heavy Metal, Thrash metal, Dupstep"
}

console.log( me.firstName );
console.log( me[ 'lastName' ] );
console.log( me.birthday );
console.log( me.interests );

var z = 6;

if( z < 10 ){
	//alert("The value of z is " + z + " and it's less than 10");
}else{
	//alert( z + " is not greater than 10");
}

if( z < 10 ){
	//alert("The value of z is " + z + " and it's less than 10");
}else if( z < 7 ){
	//alert("The value of z is " + z + " and it's less than 7");
}else{
	//alert( z + " is not greater than 10");
}


///


function sayMyName( personsName ){
	console.log( "You've entered " + personsName);
}

sayMyName( "Al");

function returnSomething(){
	console.log(":)");
}

returnSomething();

function guessWhichDoor( doorNumber ){

	if(doorNumber === 1 ){
		alert("You lost!");
	}else if( doorNumber === 2){
		alert(" You won! ");
	}else if( doorNumber === 3){
		alert( "You lost, try again! ");
	}else{
		alert("Invalid door number");
	}

}

// guessWhichDoor(2);
// guessWhichDoor(2);
// guessWhichDoor(3);
// guessWhichDoor(10);
console.log( "weekdays.length: " + weekdays.length) 
for(i = 0; i < weekdays.length; i += 1){
	console.log( "i: "+ i );
	
	console.log( "weekdays [i] => weekdays["+i+"]: "+ weekdays[i] );
}



