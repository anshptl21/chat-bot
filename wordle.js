var keyboard = [];
var letterList = [];
var row = [];
var id = 1;
var answer = ["A", "S", "S", "E", "T"];
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

function enterWord(){
	var i = 0;
	var t = 0;
		var className_value = document.getElementById(id).className.value;
		var text_box = document.getElementById(id).className;
		var text_box_value = document.getElementById(id).value;
		if (document.getElementById(5).value !== undefined){
			while (id <= 5){
				color(id, i)
				showWin(text_box)
				id++;
				i++;
			}
			document.getElementsByClassName("row1 one").value = "enter"
		}
		if (document.getElementById(10).value !== undefined){
			row = [];
			answer = ["L", "O", "T", "U", "S"];
			while (id <= 10){
				color(id, i)
				showWin(text_box)
				id++;
				i++;
			}
			document.getElementsByClassName("row2 one").value = "enter";

		}
		if (document.getElementById(15).value !== undefined){
			row = [];
			answer = ["L", "O", "T", "U", "S"];
			while (id <= 15){
				color(id, i)
				showWin(text_box)
				id++;
				i++;

			}
			document.getElementsByClassName("row3 one").value = "enter";
		}
		if (document.getElementById(20).value !== undefined){
			row = [];
			answer = ["L", "O", "T", "U", "S"];
			while (id <= 20){
				color(id, i)
				showWin(text_box)
				id++;
				i++;

			}

			document.getElementsByClassName("row4 one").value = "enter";

		}
		if (document.getElementById(25).value !== undefined){
			row = [];
			answer = ["L", "O", "T", "U", "S"];
			while (id <= 25){
				color(id, i)
				showWin(text_box)
				showAnswer(id)
				id++;
				i++;

			}
			document.getElementsByClassName("row5 one").value = "enter";
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
			if (counter === 6){
				document.getElementById("win").innerHTML = "GREAT"
				document.getElementById("win").style.display = "inherit"
				document.getElementById("win").style.animation = "1s ease-in fadeIn"
			}
	}
	letter++;
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
	if (document.getElementById("win").style.display === "inherit"){
		id = 27;
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

function showAnswer(id){
	word = "LOTUS"
	if(id >= 25){
		console.log("showAnswer")
		if (document.getElementById("win").innerHTML !== "GREAT"){
			console.log("SHOW")
			$("#win").css("display", "inherit");
			document.getElementById("win").innerHTML = word
			document.getElementById("win").style.animation = "1s ease-in fadeIn"

		} else {
			return false
		}
	} 
}




function color(id, i){
	row.push(document.getElementById(id).innerHTML);
	while (i < row.length){
		console.log(row)
		console.log(answer)
		console.log("I before " + i)
		if (row[i] === answer[i]){
			document.getElementById(id).style.background = "#29a329";
			document.getElementById(id).style.border = "3px solid transparent";
			answer[i] = 0;
			break;
		} else if(answer.includes(row[i])){
			document.getElementById(id).style.background = "rgb(230, 230, 0)";
			document.getElementById(id).style.border = "3px solid transparent"
			index = answer.indexOf(row[i]);
			answer[index] = 0;
			break;
			} else {
				document.getElementById(id).style.background = "#476b6b";
				document.getElementById(id).style.border = "3px solid transparent"
				break;
			}
			
		}
	}
	

