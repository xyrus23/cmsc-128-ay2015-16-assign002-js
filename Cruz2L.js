'use strict';

function getHammingDistance(str1, str2){
	var counter=0;
	if(str1.length != str2.length) console.log("Error! Strings are not equal!");
	if(str1.length <= 0 || str2.length <= 0) console.log("Invalid string length!");
	else{
		for(var i=0;i<str1.length;i++)			
			if(str1[i]!=str2[i]) counter++;									//checks different characters for each string and counts them	
		return(counter);
	}
}

function countSubstrPattern(original, pattern){
	var str = original.split(pattern);										//splits the original string by the pattern string
	var counter = 0;
	for(var i=0;i<str.length;i++) if(str[i] != "") counter++;				//counts the elements in the split array
	return(counter);
}

function isValidString(str, alphabet){
	for(var i=0;i<str.length;i++){
		if(alphabet.indexOf(str[i]) == -1){									//checks each character in string if it is an element of alphabet
			return(false);
		}
	}
	return(true);
}

function getSkew(str, n){
	var G = 0;
	var C = 0;
	if(str.length==0) return;
	for(var i=0;i<n;i++){
		if(str[i] == 'G') G++;												//counts 'G'
		else if(str[i] == 'C') C++;											//counts 'C'
	}
	return(G-C);															
}

function getMaxSkewN(str, n){
	var skews=[];
	for(var i=0;i<n;i++)													//calls getSkew() 1 to n times and stores it in an array
		skews.push(getSkew(str,i+1));
	return(getMax(skews));						
}

function getMinSkewN(str, n){
	var skews=[];
	for(var i=0;i<n;i++){													//calls getSkew() 1 to n times and stores it in an array
		skews.push(getSkew(str,i+1));
	}
	return(getMin(skews));
}

function getMin(arr){														//gets the minimum value in an array
	var m = arr[0]
	for(var i=0;i<arr.length;i++)
		if(m>arr[i]) m=arr[i];
	return m;
}

function getMax(arr){														//gets the maximum value in an array
	var m = arr[0]
	for(var i=0;i<arr.length;i++){
		if(m<arr[i]) m=arr[i];
	}
	return m;
}




