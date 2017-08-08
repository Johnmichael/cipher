

var text = prompt("Write a sentence");
  console.log(text);

// Write a sentence



var firstlast = function(sentence)
  {
    var first= sentence.charAt(0);
    var lastChar = sentence.length-1;
    var last = sentence.charAt(lastChar);

    return first+last;
  }


var twoLetters = firstlast(text);

console.log(twoLetters);

alert("The first and last letters of what you wrote are: " + twoLetters);

// first and last two letters





var test = twoLetters;

// console.log(test);

  var flip = function(letter)
    {
      var firstletter = letter.charAt(0);
      var secondletter = letter.charAt(1);

      return secondletter+firstletter;

    }

var switchedletters = flip(test);

console.log(switchedletters)

alert("These are those letters flipped " + switchedletters);


// changes order of letters





var uppercase = switchedletters.toUpperCase();

console.log(uppercase);

alert("These are the letters as uppercase " + uppercase);

// convert letters to uppercase

var flip2 = function(reversed)
    {
      var firstletter = reversed.charAt(0);
      var secondletter = reversed.charAt(1);

      return secondletter+firstletter;
    }

    var fixedletters = flip2(uppercase);

    console.log(fixedletters);

    alert(fixedletters);

alert(text + fixedletters);

 console.log( text + fixedletters);


 // midletter

var midLetter = Function(middle)
		{
      var nospace = text.split(' ').join('');
			var middle = nospace.charAt(text.length/2);
			console.log(nospace);
			console.log(middle);

        }

alert(middle);
VM910:4 y u i o
VM910:22 yo
VM910:47 oy
VM910:60 OY
VM910:76 YO
VM910:82 y u i oYO
VM910:91 yuio
VM910:92 o
undefined


var text = prompt("Write a sentence");
  console.log(text);

// Write a sentence



var firstlast = function(sentence)
  {
    var first= sentence.charAt(0);
    var lastChar = sentence.length-1;
    var last = sentence.charAt(lastChar);

    return first+last;
  }


var twoLetters = firstlast(text);

console.log(twoLetters);

alert("The first and last letters of what you wrote are: " + twoLetters);

// first and last two letters





var test = twoLetters;

// console.log(test);

  var flip = function(letter)
    {
      var firstletter = letter.charAt(0);
      var secondletter = letter.charAt(1);

      return secondletter+firstletter;

    }

var switchedletters = flip(test);

console.log(switchedletters)

alert("These are those letters flipped " + switchedletters);


// changes order of letters





var uppercase = switchedletters.toUpperCase();

console.log(uppercase);

alert("These are the letters as uppercase " + uppercase);

// convert letters to uppercase

var flip2 = function(reversed)
    {
      var firstletter = reversed.charAt(0);
      var secondletter = reversed.charAt(1);

      return secondletter+firstletter;
    }

    var fixedletters = flip2(uppercase);

    console.log(fixedletters);

    alert(fixedletters);

alert(text + fixedletters);

 console.log( text + fixedletters);


 // midletter

var midLetter = Function(middle)
		{
      var nospace = text.split(' ').join('');
			var middle = nospace.charAt(nospace.length/2);
			console.log(nospace);
			console.log(middle);

        }

alert(middle);
VM926:4 you jof
VM926:22 yf
VM926:47 fy
VM926:60 FY
VM926:76 YF
VM926:82 you jofYF
VM926:91 youjof
VM926:92 j
undefined


var text = prompt("Write a sentence");
  console.log(text);

// Write a sentence



var firstlast = function(sentence)
  {
    var first= sentence.charAt(0);
    var lastChar = sentence.length-1;
    var last = sentence.charAt(lastChar);

    return first+last;
  }


var twoLetters = firstlast(text);

console.log(twoLetters);

alert("The first and last letters of what you wrote are: " + twoLetters);

// first and last two letters





var test = twoLetters;

// console.log(test);

  var flip = function(letter)
    {
      var firstletter = letter.charAt(0);
      var secondletter = letter.charAt(1);

      return secondletter+firstletter;

    }

var switchedletters = flip(test);

console.log(switchedletters)

alert("These are those letters flipped " + switchedletters);


// changes order of letters





var uppercase = switchedletters.toUpperCase();

console.log(uppercase);

alert("These are the letters as uppercase " + uppercase);

// convert letters to uppercase

var flip2 = function(reversed)
    {
      var firstletter = reversed.charAt(0);
      var secondletter = reversed.charAt(1);

      return secondletter+firstletter;
    }

    var fixedletters = flip2(uppercase);

    console.log(fixedletters);

    alert(fixedletters);

alert(text + fixedletters);

 console.log( text + fixedletters);


 // Find the letter in the middle (ignores spaces, rounds up/right)

Function(middle)
		{
      var nospace = text.split(' ').join('');
			var middle = nospace.charAt(nospace.length/2);
			console.log(nospace);
			console.log(middle);

    }

alert(middle);
