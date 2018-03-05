//Create variable for counter and set at 72 seconds

var count = 72;

//Create variables for keeping score and set to 0

var correctCount = 0;

var wrongCount = 0;

var unansweredCount = 0;

//Ready pages for JavaScript

$(document).ready(function(){


//Hide the game questions container and end scoreboard container

    $("#game_container").hide();
    
	$("#end_container").hide();


	// Set Scroll position so it looks good
    window.scrollTo(0, 500);
    
//What happens when user pushes the start button; start container disappears and game questions container appers

$("#start_button").on("click", function(){

	// Hide the start container from the user
		$("#start_container").hide();


	// Show the game questuions container
		$("#game_container").show();


    //Start countdown clock

		startCountdown();
		return;

	});

// Countdown clock counts down and displays remaining time to user
    
	function countdown(){

		count--;

    	$('#timer_number').html(count + " Seconds");

    	
//What happens when user hits the done button; stop the countdown and go to timeUp function to total values

			$("#done_button").on("click", function(){

 // Stop the countdown and run the timeUp function; Make count 0, which will go to timeUp function and hide game questions containe
            
			count = 0;
			return;

			});

//What happens if user runs out of time before answering all questions; go to timeUp function to total values and hide the game questions container

			if(count == -1){

                timeUp();
                
				$("#game_container").hide();

			}

	}

// Show the countdown clock, increment is 1 second

	function startCountdown(){

		setInterval(countdown, 1000);

	}

// Function to be run after the timer is up; variables and validations for each question

	function timeUp(){

		var Q1 = $('input:radio[name="question_1"]:checked').val();
		var Q2 = $('input:radio[name="question_2"]:checked').val();
		var Q3 = $('input:radio[name="question_3"]:checked').val();
		var Q4 = $('input:radio[name="question_4"]:checked').val();
		var Q5 = $('input:radio[name="question_5"]:checked').val();
		var Q6 = $('input:radio[name="question_6"]:checked').val();
		var Q7 = $('input:radio[name="question_7"]:checked').val();
		var Q8 = $('input:radio[name="question_8"]:checked').val();
		var Q9 = $('input:radio[name="question_9"]:checked').val();
        var Q10 = $('input:radio[name="question_10"]:checked').val();
        var Q11 = $('input:radio[name="question_11"]:checked').val();
        var Q12 = $('input:radio[name="question_12"]:checked').val();

// Determine right, incorrect, and unanswered questions
        
		if(Q1 == undefined){

            unansweredCount++;
            
        }
        
		else if(Q1 == "Cavalcade of Stars"){

			correctCount++;
        }
        
		else{

			wrongCount++;
		}

		if(Q2 == undefined){

			unansweredCount++;
        }
    
		else if(Q2 == "DuMont"){

			correctCount++;
        }
        
		else{

			wrongCount++;
		}


		if(Q3 == undefined){

			unansweredCount++;
        }
        
		else if(Q3 == "1951"){

			correctCount++;
        }
        
		else{

            wrongCount++;
            
		}

		if(Q4 == undefined){

			unansweredCount++;
        }
        
		else if(Q4 == "Pert Kelton"){

			correctCount++;
        }
        
		else{
			wrongCount++;
		}


		if(Q5 == undefined){

			unansweredCount++;
        }
        
		else if(Q5 == "1955"){

			correctCount++;
        }
        
		else{

			wrongCount++;
		}


		if(Q6 == undefined){

			unansweredCount++;
        }
        
		else if(Q6 == "CBS"){

			correctCount++;
        }
        
		else{

			wrongCount++;
		}


		if(Q7 == undefined){

			unansweredCount++;
        }
        
		else if(Q7 == "Saturday, at 8:30 p.m. EST"){

			correctCount++;
        }
        
		else{

			wrongCount++;
		}

		if(Q8 == undefined){

			unansweredCount++;
        }
        
		else if(Q8 == "39"){

			correctCount++;
        }
        
		else{
			wrongCount++;
		}

		if(Q9 == undefined){

			unansweredCount++;
        }
        
		else if(Q9 == "'TV or Not TV'"){

			correctCount++;
        }
        
		else{

			wrongCount++;
		}

		if(Q10 == undefined){

			unansweredCount++;
        }
        
		else if(Q10 == "'A Man's Pride'"){

            correctCount++;
            
        }
        
		else{

			wrongCount++;
		}

        if(Q11 == undefined){

			unansweredCount++;
        }
        
		else if(Q11 == "$65,000"){

            correctCount++;
            
        }
        
		else{
            
			wrongCount++;
		}

        if(Q12 == undefined){

			unansweredCount++;
        }
        
		else if(Q12 == "Audrey Meadows"){

            correctCount++;
            
        }
        
		else{
            
			wrongCount++;
		}

// After answers are validated, display the score results

        $('#correct_answers').html(correctCount);
        
        $('#wrong_answers').html(wrongCount);
        
		$('#unanswered').html(unansweredCount);


 // Show the completed scoreboard container 
        
		$("#end_container").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

});


