
/*Using array methods, you will transform an array of strings into a secret message!*/


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 
                     'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);
//remove last string in the array
secretMessage.pop();
console.log(secretMessage.length);
//add to and program to end of array
secretMessage.push('to', 'program');
//change word easily in array with right
secretMessage[7] = 'right';
//remove first string in array
secretMessage.shift();
//add programming to beginning of the array
secretMessage.unshift('Programming');
//replace get, right, the, first, time with know
secretMessage.splice(6, 10, 'know');
//print secretMessage as a sentence
console.log(secretMessage.join(' '));

//console.log(secretMessage);
