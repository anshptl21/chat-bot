var alphabet = [];

function KeyBoardKey(){
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
	alphabet.push(q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m);
	console.log(alphabet);
	
}


function choosingKeyBoard(key){
	/* identifying which letter was clicked on */
	KeyBoardKey();
	for (letter in alphabet){
		if (key == alphabet[letter]){
			var keyboard;
			keyboard = alphabet[letter];
			break;
		}
	}
	/* filling out row #1 with letters till it reaches the limit */
	var row = 1;
	while (row <= 5){
		console.log("starting row 1 while loop");
		if (document.getElementById(row).value == null){
			console.log("starting row 1 if statement");
			document.getElementById(row).value = keyboard;
			console.log(document.getElementById(row).value);
			document.getElementById(row).innerHTML = keyboard;
			console.log(document.getElementById(row).innerHTML);
			break;
		}
		row++;
		console.log("ending row 1 while loop");
	} 

	/* pressing enter than row 2 can be filled out */
	if (document.getElementById("enter").value === "enter1"){
		while (row <= 10){
		console.log("starting row 1 while loop");
		if (document.getElementById(row).value == null){
			console.log("starting row 1 if statement");
			document.getElementById(row).value = keyboard;
			console.log(document.getElementById(row).value);
			document.getElementById(row).innerHTML = keyboard;
			console.log(document.getElementById(row).innerHTML);
			break;
		}
		row++;
		console.log("ending row 1 while loop");
		} 	
	}
	
	if (document.getElementById("enter").value === "enter2"){
		while (row <= 15){
		console.log("starting row 1 while loop");
		if (document.getElementById(row).value == null){
			console.log("starting row 1 if statement");
			document.getElementById(row).value = keyboard;
			console.log(document.getElementById(row).value);
			document.getElementById(row).innerHTML = keyboard;
			console.log(document.getElementById(row).innerHTML);
			break;
		}
		row++;
		console.log("ending row 1 while loop");
		} 	
	}

	if (document.getElementById("enter").value === "enter3"){
		while (row <= 20){
		console.log("starting row 1 while loop");
		if (document.getElementById(row).value == null){
			console.log("starting row 1 if statement");
			document.getElementById(row).value = keyboard;
			console.log(document.getElementById(row).value);
			document.getElementById(row).innerHTML = keyboard;
			console.log(document.getElementById(row).innerHTML);
			break;
		}
		row++;
		console.log("ending row 1 while loop");
		}
	} 
	if (document.getElementById("enter").value === "enter4"){
		while (row <= 25){
		console.log("starting row 1 while loop");
		if (document.getElementById(row).value == null){
			console.log("starting row 1 if statement");
			document.getElementById(row).value = keyboard;
			console.log(document.getElementById(row).value);
			document.getElementById(row).innerHTML = keyboard;
			console.log(document.getElementById(row).innerHTML);
			break;
		}
		row++;
		console.log("ending row 1 while loop");
		} 	
	}
		
	}
	
	



function backspace(){
	document.getElementById("backspace").value = "backspace"
	var id = 1; 
	while (id <= 25){
		if (document.getElementById("enter").value === "enter1" || document.getElementById("enter").value === "enter2" || document.getElementById("enter").value === "enter3" || document.getElementById("enter").value === "enter4"){
			break;
		} else
		if (document.getElementById(id).value == null){
			if (id > 0){
				var del = id - 1;
				document.getElementById(del).innerHTML = null;
				document.getElementById(del).value = null;
				break;
			}
		}
		id++;
	}


}


/* function enterWord will submit the word and check its values */

function enterWord(){
	var id = 1;
	var i = 0;
		console.log(id);
		while (document.getElementById(id).value !== null){
		if (document.getElementById(id).value == null){
			document.getElementById(id).style.border = "3px solid red";
			console.log("changing color to red");
			break;
		} else {
			var word = [];
			word.push("L", "O", "V", "E", "S");
				console.log(word[i]);
				console.log(document.getElementById(id).innerHTML);
				if (document.getElementById(id).innerHTML == word[i]){
					document.getElementById(id).style.color = "green";
					console.log("changing color to green");
				} else {
					document.getElementById(id).style.color = "yellow";
					console.log("changing color to yellow");
				}
			}
				id++;
				i++;
			}
			return true;
		}



function enterWord(){
	var row = 1;
	var i = 0;
	while (row <= 5){
		if (document.getElementById(row).value !== null){
		if (row <= 5){
			var word = [];
			word.push("L", "O", "V", "E", "S");
			if (document.getElementById(row).innerHTML == word[i]){
				document.getElementById(row).style.border = "3px solid green";
			} else if (word.includes(document.getElementById(row).innerHTML)){
				document.getElementById(row).style.border = "3px solid yellow";
			} else {
				document.getElementById(row).style.border = "3px solid gray";
			}
		}
	}
		row++;
		i++;
		console.log("Row is " + row);
	}
	document.getElementById("enter").value = "enter1";
i = 0;
	console.log("Row after while loop is " + row);
		while (row <= 10){
			var id = 0;
			console.log(document.getElementById(row).value)
			if (document.getElementById(row).value === undefined){
				break;
			} else if (document.getElementById(row).value !== null){
			if (row <= 10){
				var word = [];
				word.push("L", "O", "V", "E", "S");
				if (document.getElementById(row).innerHTML === word[i]){
				document.getElementById(row).style.border = "3px solid green";
			} else if (word.includes(document.getElementById(row).innerHTML)){
				document.getElementById(row).style.border = "3px solid yellow";
			} else {
				document.getElementById(row).style.border = "3px solid gray";
			}
		}
	}
		row++;
		i++;
		console.log("Row is " + row);
		document.getElementById("enter").value = "enter2";
		}

	console.log("Row after while loop is " + row);
	i = 0;
		while (row <= 15){
			var id = 0;
			console.log(document.getElementById(row).value)
			if (document.getElementById(row).value === undefined){
				break;
			} else if (document.getElementById(row).value !== null){
			if (row <= 15){
				var word = [];
				word.push("L", "O", "V", "E", "S");
				if (document.getElementById(row).innerHTML == word[i]){
				document.getElementById(row).style.border = "3px solid green";
			} else if (word.includes(document.getElementById(row).innerHTML)){
				document.getElementById(row).style.border = "3px solid yellow";
			} else {
				document.getElementById(row).style.border = "3px solid gray";
			}
		}
	}
		row++;
		i++;
		console.log("Row is " + row);
		document.getElementById("enter").value = "enter3";
		}

	console.log("Row after while loop is " + row);
	i = 0;
		while (row <= 20){
			var id = 0;
				console.log(document.getElementById(row).value);
			if (document.getElementById(row).value === undefined){

				break;
			} else if (document.getElementById(row).value !== null){
			if (row <= 20){
				var word = [];
				word.push("L", "O", "V", "E", "S");
				if (document.getElementById(row).innerHTML == word[i]){
				document.getElementById(row).style.border = "3px solid green";
			} else if (word.includes(document.getElementById(row).innerHTML)){
				document.getElementById(row).style.border = "3px solid yellow";
			} else {
				document.getElementById(row).style.border = "3px solid gray";
			}
		}
	}
		row++;
		i++;
		console.log("Row is " + row);
		document.getElementById("enter").value = "enter4";

		}
i = 0;
row = 15;
console.log("row before " + row) 
 		while(row <= 20){
			if(document.getElementById(row).style.border == "3px solid green"){
				var log = 1; 
				log++;
				if (log == 6){
					console.log("Congrats! You Win");
					break;
				}
			}
			row ++;
		}
i = 0;
	console.log("Row after while loop is " + row);
		while (row <= 25){

			console.log(document.getElementById(row).value)
			if (document.getElementById(row).value === undefined){
				break;
			} else if (document.getElementById(row).value !== null){
			if (row <= 25){
				var word = [];
				word.push("L", "O", "V", "E", "S");
				if (document.getElementById(row).innerHTML == word[i]){
				document.getElementById(row).style.border = "3px solid green";
			} else if (word.includes(document.getElementById(row).innerHTML)){
				document.getElementById(row).style.border = "3px solid yellow";
			} else {
				document.getElementById(row).style.border = "3px solid gray";
			}
		}
	}
		row++;
		i++;
		console.log("Row is " + row);
		}

	}
