var keyboard = [];
var letterList = [];
var repeatingList = [];
function creatingKeyBoard(){

	/* creating array list for keyboard */
	var q = document.getElementById("q").innerHTML;
	var w = document.getElementById("w").innerHTML;
	var e = document.getElementById("e").innerHTML;
	var r = document.getElementById("r").innerHTML;
	var t = document.getElementById("t").innerHTML;
	var y = document.getElementById("y").innerHTML;
	var u = document.getElementById("u").innerHTML;
	var i = document.getElementById("i").innerHTML;
	var o = document.getElementById("o").innerHTML;
	var p = document.getElementById("p").innerHTML;
	var a = document.getElementById("a").innerHTML;
	var s = document.getElementById("s").innerHTML;
	var d = document.getElementById("d").innerHTML;
	var f = document.getElementById("f").innerHTML;
	var g = document.getElementById("g").innerHTML;
	var h = document.getElementById("h").innerHTML;
	var j = document.getElementById("j").innerHTML;
	var k = document.getElementById("k").innerHTML;
	var l = document.getElementById("l").innerHTML;
	var z = document.getElementById("z").innerHTML;
	var x = document.getElementById("x").innerHTML;
	var c = document.getElementById("c").innerHTML;
	var v = document.getElementById("v").innerHTML;
	var b = document.getElementById("b").innerHTML;
	var n = document.getElementById("n").innerHTML;
	var m = document.getElementById("m").innerHTML;
	keyboard.push(q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m);
	
}


function choosingKeyBoard(key) {
	creatingKeyBoard();
	for (i in keyboard){
		if (key === keyboard[i]){
			var letter;
			letter = key;
		}
	}


	var id = 1;
	while (id <= 25){
			if (letter == undefined){
				break; 
			}
			if (document.getElementById("win").style.display === "inherit"){
				break;
			}
			var text_box = document.getElementById(id).className;
			var text_box_value = document.getElementById(id).value;
		if (text_box === "row1 one"){
				if (document.getElementById(id).value == undefined){
					document.getElementById(id).innerHTML = letter;
					document.getElementById(id).value = letter;
					break;
				}
		} else if (text_box === "row2 one"){
			if (document.getElementsByClassName("row1 one").value === "enter"){ 
				if (document.getElementById(id).value == undefined){
					document.getElementById(id).innerHTML = letter;
					document.getElementById(id).value = letter;
					break;
				}
			}
		} else if (text_box === "row3 one"){
			if (document.getElementsByClassName("row2 one").value === "enter"){ 
				if (document.getElementById(id).value == undefined){
					document.getElementById(id).innerHTML = letter;
					document.getElementById(id).value = letter;
					break;
				}
			}
		} else if (text_box === "row4 one"){
			if (document.getElementsByClassName("row3 one").value === "enter"){ 
				if (document.getElementById(id).value == undefined){
					document.getElementById(id).innerHTML = letter;
					document.getElementById(id).value = letter;
					break;
				}
			}
		} else if (text_box === "row5 one"){
			if (document.getElementsByClassName("row4 one").value === "enter"){ 
				if (document.getElementById(id).value == undefined){
					document.getElementById(id).innerHTML = letter;
					document.getElementById(id).value = letter;
					break;
				}
			}
		}

		id++;
	}

}


document.addEventListener("keypress", function(event) {
    if (event.key !== undefined) {
    	var keyboard;
    	keyboard = event.key.toUpperCase();
        choosingKeyBoard(keyboard);
    }

});

document.addEventListener("keydown", function(event){
	if(event.key == "Enter"){
		enterWord();  
	}

	if (event.key == "Backspace"){
		backSpace();
	}

});

var id = 1;
function enterWord(){
	var i = 0;
	var t = 0;
		var className_value = document.getElementById(id).className.value;
		var text_box = document.getElementById(id).className;
		var text_box_value = document.getElementById(id).value;
		if (document.getElementById(5).value !== undefined){
			while (id <= 5){
				checkRepeatedLetters(i, t, id);
				id++;
				t++;
				i++;
			}
			document.getElementsByClassName("row1 one").value = "enter";
		}
		if (document.getElementById(10).value !== undefined){
			letterList = [];
			i = 0;
			t = 0;
			while (id <= 10){
				checkRepeatedLetters(i, t, id);
				id++;
				t++;
				i++;
			}
			document.getElementsByClassName("row2 one").value = "enter";

		}
		if (document.getElementById(15).value !== undefined){
			letterList = [];
			i = 0;
			t = 0;
			while (id <= 15){
				checkRepeatedLetters(i, t, id);
				className_value = "enter"
				id++;
				t++;
				i++;

			}
			document.getElementsByClassName("row3 one").value = "enter";
		}
		if (document.getElementById(20).value !== undefined){
			letterList = [];
			i = 0;
			t = 0;
			while (id <= 20){
				checkRepeatedLetters(i, t, id);
				className_value = "enter"
				id++;
				t++;
				i++;

			}

			document.getElementsByClassName("row4 one").value = "enter";

		}
		if (document.getElementById(25).value !== undefined){
			letterList = [];
			i = 0;
			t = 0;
			while (id <= 25){
				checkRepeatedLetters(i, t, id);
				className_value = "enter"
				id++;
				t++;
				i++;

			}
			document.getElementsByClassName("row5 one").value = "enter";
		}
}

 
function checkRepeatedLetters(i, t, id){
	var ans = "ASSET";
	var text_box = document.getElementById(id).className;
		if (text_box === "row1 one"){
				if (document.getElementById(id).value !== undefined){
					letterList.push(document.getElementById(id).innerHTML);
				}
		} else if (text_box === "row2 one"){
				if (document.getElementById(id).value !== undefined){
					letterList.push(document.getElementById(id).innerHTML);
				}
		} else if (text_box === "row3 one"){
				if (document.getElementById(id).value !== undefined){
					letterList.push(document.getElementById(id).innerHTML);
				}
		} else if (text_box === "row4 one"){
				if (document.getElementById(id).value !== undefined){
					letterList.push(document.getElementById(id).innerHTML);
				}
		} else if (text_box === "row5 one"){
			if (document.getElementById(id).value !== undefined){
				letterList.push(document.getElementById(id).innerHTML);
			}
		}
		while(t <= 4 && i <= 4){
			if (letterList[i] === ans[t]){
				document.getElementById(id).style.background = "#29a329";
				document.getElementById(id).style.border = "3px solid transparent"
				break;
			} else if (ans.includes(letterList[i])){
				document.getElementById(id).style.background = "#e6e600";
				duplicateCharCount(ans, t, id);
				/*var match = /[S]+/g;
				var letter = letterList[i];
				console.log(letter.match(match));*/
				document.getElementById(id).style.border = "3px solid transparent"
				break;
			} else {
		 		document.getElementById(id).style.background = "#476b6b";
		 		console.log(document.getElementById(id).style.background)
		 		document.getElementById(id).style.border = "3px solid transparent"	
		 		break;
			}
		}
		showWin(text_box)
		showAnswer(ans, id)

	}





function duplicateCharCount(word, id) {
	var repeatingList = [];
	var inputList = [];
	var timesList = [];

	if(word) {
		var obj = {};
		for(let i = 0; i < word.length; i++) {
			if(obj[word[i]]){
				obj[word[i]] += obj[word[i]];
				repeatingList.push(word[i]);
				timesList.push(obj[word[i]]);
			}else {
				obj[word[i]] = 1;
			}
		}
		console.log(repeatingList);
		console.log(timesList);

	}
	
}



function showWin(classname){
	var letter = 1;
	var counter = 1;
	while (letter <= 25){
		if (document.getElementById(letter).className === classname){
			if (document.getElementById(letter).style.background === "rgb(41, 163, 41)"){
				counter++;
		}
	}
	letter++;
}
	if (counter === 6){
		$("#win").css("display", "inherit");
		document.getElementById("win").innerHTML = "AMAZING"
		$("#win").addClass("animated fadeIn")
	} else {
		return false;
	}
}

var backspace = document.getElementById("backspace");

backspace.onclick = function(){
	var id = 1;
	if (document.getElementsByClassName("row1 one").value === "enter"){
		id = 7;
	}
	if (document.getElementsByClassName("row2 one").value === "enter"){
		id = 12;
	}
	if (document.getElementsByClassName("row3 one").value === "enter"){
		id = 17;
	}
	if (document.getElementsByClassName("row4 one").value === "enter"){
		id = 22;
	}
	while (id <= 25){
	if (document.getElementById(id).value === undefined){
			id1 = id - 1;
			document.getElementById(id1).innerHTML = null;
			document.getElementById(id1).value = undefined;
			break;
		}
	id++;
	}
}


function backSpace(){
	var id = 1;
	if (document.getElementsByClassName("row1 one").value === "enter"){
		id = 7;
	}
	if (document.getElementsByClassName("row2 one").value === "enter"){
		id = 12;
	}
	if (document.getElementsByClassName("row3 one").value === "enter"){
		id = 17;
	}
	if (document.getElementsByClassName("row4 one").value === "enter"){
		id = 22;
	}
	while (id <= 26){
	if (document.getElementById(id).value === undefined){
			id1 = id - 1;
			document.getElementById(id1).innerHTML = null;
			document.getElementById(id1).value = undefined;
			break;
		}
	id++;
	}	
}

function showAnswer(word, id){
	if(id == 25){
		if (document.getElementById("win").innerHTML !== "AMAZING"){
			$("#win").css("display", "inherit");
			document.getElementById("win").innerHTML = word
			$("#win").addClass("animated fadeIn")

		} else {
			return false
		}
	} 
}


