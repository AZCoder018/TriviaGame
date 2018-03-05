//Variables for counter and countdown

var count = 60;

var correctCount = 0;

var wrongCount = 0;

var unansweredCount = 0;

$(document).ready(function() {

        $("mid_game_container").hide();

        $("#end_container").hide();

    $("#start_button").on("click", function() {

        $("start_container").hide();

        $("#mid_game_container").show();

    startCountdown();
    return;

    });

        function countdown() {

            count--;

        $("timer-number").html(count + " Seconds");

        $("#done_button").on("click", function() {

            count = 0;

        return;
    
        });

        if (count == -1) {

            timeup();

        $("#mid_game_container").hide();

        }

    }

        function startCountdown() {

            setInterval(countdown, 1000);
        
     }

        function timeUp() {

    
    var Q1 = $('input:radio[name="question_1"]:checked').val();

    var Q1 = $('input:radio[name="question_2"]:checked').val();

    var Q1 = $('input:radio[name="question_3"]:checked').val();

    var Q1 = $('input:radio[name="question_4"]:checked').val();

    var Q1 = $('input:radio[name="question_5"]:checked').val();

    var Q1 = $('input:radio[name="question_6"]:checked').val();

    var Q1 = $('input:radio[name="question_7"]:checked').val();

    var Q1 = $('input:radio[name="question_8"]:checked').val();

    var Q1 = $('input:radio[name="question_9"]:checked').val();

    var Q1 = $('input:radio[name="question_10"]:checked').val();

    var Q1 = $('input:radio[name="question_11"]:checked').val();

    var Q1 = $('input:radio[name="question_12"]:checked').val();

        if (Q1 == undefined) {

            unansweredCount++;
        
        }

        else if (Q1 == "Cavalcade of Stars") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q2 == undefined) {

            unansweredCount++;
        
        }

        else if (Q2 == "DuMont") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }  

        if (Q3 == undefined) {

            unansweredCount++;
        
        }

        else if (Q3 == "1951") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q4 == undefined) {

            unansweredCount++;
        
        }

        else if (Q4 == "Pert Kelton") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q5 == undefined) {

            unansweredCount++;
        
        }

        else if (Q5 == "1955") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q6 == undefined) {

            unansweredCount++;
        
        }

        else if (Q6 == "CBS") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q7 == undefined) {

            unansweredCount++;
        
        }

        else if (Q7 == "Saturday, at 8:30 p.m. EST") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q8 == undefined) {

            unansweredCount++;
        
        }

        else if (Q8 == "39") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q9 == undefined) {

            unansweredCount++;
        
        }

        else if (Q9 == "TV or Not TV") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q10 == undefined) {

            unansweredCount++;
        
        }

        else if (Q10 == "A Man's Pride") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q11 == undefined) {

            unansweredCount++;
        
        }

        else if (Q11 == "$65,000") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

        if (Q12 == undefined) {

            unansweredCount++;
        
        }

        else if (Q12 == "Audrey Meadows") {

            correctCount++;

        }
        
        else {

            wrongCount++;

        }

    $("#correctAnswers").html(correctCount);

    $("#wrong_answers").html(wrongCount);

    $("#unanswered").html(unansweredCount);

    $("#end_containter").show();

    }

});