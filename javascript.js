var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("startreset").onclick = 
	function(){
		if (playing == true){
			location.reload(); //reloading page//
		}else{
			playing = true;
			score = 0;
			document.getElementById("scorevalue").innerHTML = score;	
			show("timeremaining"); //display the box// 
			show("timeremaining");
			timeremaining = 60;
			document.getElementById("timeremainingvalue").innerHTML = timeremaining;
			hide("gameOver");
			document.getElementById("startreset").innerHTML = "Reset Game";
			startCountdown();
			generateQA();		/*generate new questions and answers */

		}
	}

	// Clicking on an answer box
	
	for(i=1; i<5; i++){
		document.getElementById("box"+i).onclick = 
	function(){
		if(playing == true){
			if(this.innerHTML == correctAnswer){
				score++;
				document.getElementById("scorevalue").innerHTML = score;
				hide("wrong");
				show("correct");
				setTimeout(function(){
					hide("correct")
				}, 1000);
				generateQA();
			}else{
				hide("correct");
				show("wrong");
				setTimeout(function(){
					hide("wrong")
				}, 1000);
			}
		}
	}
	}



	// functions

	// start counter

	function startCountdown(){
		action = setInterval(function(){
			timeremaining -= 1;
			document.getElementById("timeremainingvalue").innerHTML = timeremaining;
				if (timeremaining == 0) {   //game over//
					stopCountdown();
					show("gameOver");
					document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your Score is "+ score +".</p>";				
					hide("timeremaining");
					hide("correct");
					hide("wrong");
					playing = false;
					document.getElementById("startreset") = "Start Game";
				}
			
		}, 1000);
	}
	
	// stop counter

	function stopCountdown(){
		clearInterval(action);
	}

	// hide an element ("correct" and "wrong" boxes)

	function hide(Id){
		document.getElementById(Id).style.display = "none";
	}

	// show back elements

	function show(Id){
		document.getElementById(Id).style.display = "block";
	}

	// generate new questions and answers

	function generateQA(){
		var x = 1 + Math.round(9*Math.random());
		var y = 1 + Math.round(9*Math.random());
		correctAnswer = x*y;
		document.getElementById("question").innerHTML = x + "*" + y;
		var correctPosition = 1 + Math.round(3*Math.random());
		// fill one box with the corect answer
		document.getElementById("box"+correctPosition).innerHTML  = correctAnswer;

		// fill other boxes with wrong answers
		var answers = [correctAnswer];
		
		for(i=1; i<5; i++){
			if (i != correctPosition){
				var wrongAnswer; 
				do{
					wrongAnswer= (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
				document.getElementById("box"+i).innerHTML = wrongAnswer;
				}while(answers.indexOf(wrongAnswer)>-1)
				answers.push(wrongAnswer);	
				}

			}
		}
	