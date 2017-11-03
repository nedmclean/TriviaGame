  var number = 90;

    var intervalId;


;

    //  When the resume button gets clicked, execute the run function.
    $("#Start").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
      }
    }

    var triviaQuestions = {
    	questions: ["Mantis shrimp have the most advanced eyes in the animal kingdom.",
    				"Dolphins are Pinnipeds.",
    				"Sea urchins are Echinoderms.",
    				"Coral reefs grow faster in the presence of greater volumes of carbon dioxide",
    				"Bonus, subjective: Crabs think fish can fly."
    	],
    	question1: ["True",
    				"False"
    	],
    	question2: ["True",
    				"False"
    	],
    	question3: ["True",
    				"False"
    	],
    	question4: ["True",
    				"False"
    	],
    	question5: ["True",
    				"False"
    	],

    }

    var question1;
    var question2;
    var question3;
    var question4;
    var question5;

    $("#questionOne").html(triviaQuestions.questions[0]);
    $("#questionOne").append(triviaQuestions.questions[0]);

    console.log(triviaQuestions);
    console.log(triviaQuestions.questions[0]);
    console.log(triviaQuestions.question1);

    $("#button1").html("<button 'True' />")

    $("#questionTwo").append(triviaQuestions.questions[1]);


    console.log(triviaQuestions.questions[1]);
    console.log(triviaQuestions.question2);

	$("#questionThree").append(triviaQuestions.questions[2]);

 
    console.log(triviaQuestions.questions[2]);
    console.log(triviaQuestions.question3);

	$("#questionFour").append(triviaQuestions.questions[3]);

    console.log(triviaQuestions.questions[3]);
    console.log(triviaQuestions.question4);

	$("#questionFive").append(triviaQuestions.questions[4]);

    console.log(triviaQuestions.questions[4]);
    console.log(triviaQuestions.question5);




    function stop() {

      clearInterval(intervalId);
    }

    run();

    //things left to do:

    	//formatting
    	//make questions display
    	//make 'true' and 'false' buttons appear beneath each
    	//make those buttons reactive: if the user chooses the correct button, log it as correct, and the wrong button will be logged as incorrect
    	//ensure only one button can be clicked at a time
    	//when the timer reaches zero, load a new page (or maybe make an alert) that lists the number correct, the number incorrect, and the number unanswered (if applicable)
    	//reset the parameters and page values after ten seconds (make another timer)




		