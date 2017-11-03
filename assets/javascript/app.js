  var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

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

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    var triviaQuestions = {
    	questions: ["Mantis shrimp have the most advanced eyes in the animal kingdom.",
    				"Dolphins are Pinnipeds.",
    				"Sea urchins are Echinoderms.",
    				"Sea otters regularly engage in non-consensual intercourse with baby sea lions.",
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

    $("#questionOne").append(triviaQuestions.questions[0]);

    console.log(triviaQuestions);
    console.log(triviaQuestions.questions[0]);
    console.log(triviaQuestions.question1);

    $("#questionOne").append(triviaQuestions.questions[1]);


    console.log(triviaQuestions.questions[1]);
    console.log(triviaQuestions.question2);

	$("#questionOne").append(triviaQuestions.questions[2]);

 
    console.log(triviaQuestions.questions[2]);
    console.log(triviaQuestions.question3);

	$("#questionOne").append(triviaQuestions.questions[3]);

    console.log(triviaQuestions.questions[3]);
    console.log(triviaQuestions.question4);

	$("#questionOne").append(triviaQuestions.questions[4]);

    console.log(triviaQuestions.questions[4]);
    console.log(triviaQuestions.question5);



    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();



		