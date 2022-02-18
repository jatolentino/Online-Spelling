var word = 'foshizzle';
var div = document.getElementById('div');
let datatoplay=[];

function readWord(word, el) {
	var pos = 0;
	var duration = 500;
	var text = '';
	var readLetter = (function readLetter () {
		
		if (pos < word.length) {
				var letter = word.substr(pos, 1);
				//mytext = datatoplay[letter];
				//console.log(letter);
				//let utterance = new SpeechSynthesisUtterance(mytext);	
				//window.speechSynthesis.speak(utterance);
				// show or say letter here
				//playSound('sounds/' + letter + '.mp3')
				text += letter;
				div.innerHTML = text;
				pos++;
				setTimeout(readLetter, duration);
		}
	})();
}

readWord(word, div);