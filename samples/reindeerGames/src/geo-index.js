/**
 Original version: Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 
 Template modified for geography content by Shaina Karasin, 2016.
*/

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */

var questions = [
    {
        "Which of these countries does not border Israel:": [
            "Iran",
            "Syria",
            "Lebanon",
            "Egypt"
        ]
    },
    {
        "Ethiopia, is located in which region of Africa:": [
            "Eastern",
            "Western",
            "Northern",
            "Southern"
        ]
    },
    {
        "All of these countries border the Mediterranean Sea except:": [
            "Bulgaria",
            "Morocco",
            "Libya",
            "Turkey"
        ]
    },
    {
        "France, borders all of these countries except:": [
            "The Netherlands",
            "Belgium",
            "Italy",
            "Spain"
        ]
    },
    {
        "Burkina Faso, is located on which continent:": [
            "Africa",
            "South America",
            "Asia",
            "Europe"
        ]
    },
    {
        "The pilgrimage city of Mecca, is located in which middle eastern country:": [
            "Saudi Arabia",
            "Syria",
            "Jordan",
            "Egypt"
        ]
    },
    {
        "Which African country occupies a large island:": [
            "Madagascar",
            "Mozambique",
            "Tanzania",
            "Botswana"
        ]
    },
    {
        "This country borders both China and Russia:": [
            "Kazakhstan",
            "Afghanistan",
            "Pakistan",
            "Ukraine"
        ]
    },
    {
        "Which country does not occupy an entire island:": [
            "Haiti",
            "Philippines",
            "Sri Lanka",
            "Taiwan"
        ]
    },
    {
        "Which country is north of Brazil?": [
            "Venezuela",
            "Argentina",
            "Chile",
            "Bolivia"
        ]
    },
    {
        "Which of these countries does not border Russia:": [
            "Romania",
            "Belarus",
            "Ukraine",
            "Finland"
        ]
    },
    {
        "The Galapagos Islands are part of this country:": [
            "Ecuador",
            "Peru",
            "Costa Rica",
            "Colombia"
        ]
    },
    {
        "Denmark shares a border with this country:": [
            "Germany",
            "The Netherlands",
            "Sweden",
            "Belgium"
        ]
    },
    {
        "Which of these European countries lies closest to Africa:": [
            "Spain",
            "Portugal",
            "Italy",
            "Greece"
        ]
    },
    {
        "All of these countries are located in South America, except:": [
            "Nigeria",
            "Colombia",
            "Bolivia",
            "Suriname"
        ]
    },
    {
        "Abu Dhabi, is the capital city of this country:": [
            "United Arab Emirates",
            "Afghanistan",
            "Saudi Arabia",
            "India"
        ]
    },
    {
        "All of these island nations are located in the Caribbean, except:": [
            "Maldives",
            "Trinidad and Tobago",
            "Saint Lucia",
            "Barbados"
        ]
    },
    {
        "Iraq borders all of these countries, except:": [
            "Afghanistan",
            "Iran",
            "Turkey",
            "Saudi Arabia"
        ]
    },
    {
        "Which of these countries is not located on the Baltic Sea:": [
            "Norway",
            "Sweden",
            "Finland",
            "Estonia"
        ]
    },
    {
        "Sudan, shares borders with all of these countries, except:": [
            "Tanzania",
            "Egypt",
            "Libya",
            "Ethiopia"
        ]
    },
    {
        "The country of Angola, is located in which region:": [
            "southern Africa",
            "eastern Africa",
            "eastern Europe",
            "Pacific islands"
        ]
    },
    {
        "Which of these countries is located in central Europe:": [
            "Hungary",
            "Greece",
            "France",
            "Latvia"
        ]
    },
    {
        "The African country of Guinea, is located on which body of water:": [
            "Atlantic Ocean",
            "Indian Ocean",
            "Red Sea",
            "Mediterranean Sea"
        ]
    },
    {
        "What is the smallest country in the world:": [
            "Vatican City",
            "Monaco",
            "Liechtenstein",
            "Barbados"
        ]
    },
    {
        "Mexico, shares its southern border with this country:": [
            "Guatemala",
            "Nicaragua",
            "Panama",
            "Colombia"
        ]
    },
    // 25
    {
        "The large island of Tasmania, is part of which country:": [
            "Australia",
            "New Zealand",
            "Indonesia",
            "India"
        ]
    },
    {
        "Nepal, is located between India, and which of these countries:": [
            "China",
            "Pakistan",
            "Bangladesh",
            "Cambodia"
        ]
    },
    {
        "The large island of Greenland, is politically associated with this European country:": [
            "Denmark",
            "United Kingdom",
            "Iceland",
            "Finland"
        ]
    },
    {
        "Amsterdam, is the capital city of this country:": [
            "the Netherlands",
            "Denmark",
            "Belgium",
            "Sweden"
        ]
    },
    {
        "Copenhagen, is the capital city of this country:": [
            "Denmark",
            "the Netherlands",
            "Switzerland",
            "Sweden"
        ]
    },
    {
        "Lisbon, is the capital city of this country:": [
            "Portugal",
            "Brazil",
            "Liberia",
            "Slovenia"
        ]
    },
    {
        "Bern, is the capital city of this country:": [
            "Switzerland",
            "Austria",
            "Romania",
            "Belarus"
        ]
    },
    {
        "Kiev, is the capital city of this country:": [
            "Ukraine",
            "Romania",
            "Bulgaria",
            "Lithuania"
        ]
    },
    {
        "Prague, is the capital city of this country:": [
            "Czech Republic",
            "Slovakia",
            "Hungary",
            "Austria"
        ]
    },
    {
        "Budapest, is the capital city of this country:": [
            "Hungary",
            "Croatia",
            "Czech Republic",
            "Bulgaria"
        ]
    },
    {
        "Helsinki, is the capital city of this country:": [
            "Finland",
            "Norway",
            "Ukraine",
            "Greece"
        ]
    },
    {
        "Ankara, is the capital city of this country:": [
            "Turkey",
            "Albania",
            "Ukraine",
            "Jordan"
        ]
    },
    {
        "Beirut, is the capital city of this country:": [
            "Lebanon",
            "Jordan",
            "Iraq",
            "Afghanistan"
        ]
    },
    {
        "Baghdad, is the capital city of this country:": [
            "Iraq",
            "Iran",
            "Afghanistan",
            "Pakistan"
        ]
    },
    {
        "Riyadh, is the capital city of this country:": [
            "Saudi Arabia",
            "Iraq",
            "Libya",
            "Syria"
        ]
    },
    {
        "Tehran, is the capital city of this country:": [
            "Iran",
            "Iraq",
            "Lebanon",
            "Turkey"
        ]
    },
    {
        "Kabul, is the capital city of this country:": [
            "Afghanistan",
            "Iran",
            "Pakistan",
            "Saudi Arabia"
        ]
    },
    {
        "Bangkok, is the capital city of this country:": [
            "Thailand",
            "Taiwan",
            "Bangladesh",
            "South Korea"
        ]
    },
    {
        "Taipei, is the capital city of this country:": [
            "Taiwan",
            "Thailand",
            "Cambodia",
            "Philippines"
        ]
    },
    {
        "Tripoli, is the capital city of this country:": [
            "Libya",
            "Algeria",
            "Jordan",
            "Greece"
        ]
    },
    {
        "Reykjavik, is the capital city of this country:": [
            "Iceland",
            "Norway",
            "Slovakia",
            "Ukraine"
        ]
    },
    {
        "The twin capital cities of Brazzaville and Kinshasa, are located on this river:": [
            "Congo",
            "Nile",
            "Euphrates",
            "Danube"
        ]
    },
    {
        "Nairobi, is the capital city of this country:": [
            "Kenya",
            "Tanzania",
            "Zimbabwe",
            "Cameroon"
        ]
    },
    {
        "Dar es Salaam, is the capital city of this country:": [
            "Tanzania",
            "Saudi Arabia",
            "Kenya",
            "India"
        ]
    },
    {
        "The coastal city of Cape Town is located in this country:": [
            "South Africa",
            "Argentina",
            "United Kingdom",
            "Morocco"
        ]
    },
    //50
    {
        "This is the capital city of Australia:": [
            "Canberra",
            "Sydney",
            "Brisbane",
            "Melbourne"
        ]
    },
    {
        "Quito, is the capital city of this country:": [
            "Ecuador",
            "Peru",
            "Costa Rica",
            "Belize"
        ]
    },
    {
        "Bogota, is the capital city of this country:": [
            "Colombia",
            "Venezuela",
            "Nicaragua",
            "Paraguay"
        ]
    },
    {
        "Caracas, is the capital city of this country:": [
            "Venezuela",
            "Colombia",
            "Guatemala",
            "Honduras"
        ]
    },
    {
        "Buenos Aires, is the capital city of this country:": [
            "Argentina",
            "Ecuador",
            "Portugal",
            "Dominican Republic"
        ]
    },
    {
        "The Amazon River, runs through this country:": [
            "Brazil",
            "Colombia",
            "India",
            "Laos"
        ]
    },
    {
        "The Yangtze River, runs through this country:": [
            "China",
            "India",
            "Cambodia",
            "South Korea"
        ]
    },
    {
        "The Nile River originates from this body of water:": [
            "Lake Victoria",
            "Mediterranean Sea",
            "Red Sea",
            "Indian Ocean"
        ]
    },
    {
        "Mexico, shares its southern border with this country:": [
            "Guatemala",
            "Nicaragua",
            "Panama",
            "Colombia"
        ]
    },
    {
        "The Ganges River, runs through this country:": [
            "India",
            "Turkey",
            "Vietnam",
            "Kenya"
        ]
    },
    {
        "The Danube River, runs through this region:": [
            "central Europe",
            "southeast Asia",
            "South America",
            "central Africa"
        ]
    },
    {
        "What is the largest continental lake in the world:": [
            "Lake Superior",
            "Lake Victoria",
            "Lake Tanganyika",
            "Lake Michigan"
        ]
    },
    {
        "The famous site of Machu Picchu, is located in this country:": [
            "Peru",
            "Mexico",
            "Brazil",
            "Honduras"
        ]
    },
    {
        "Hanoi, is the capital city of this country:": [
            "Vietnam",
            "Cambodia",
            "Nepal",
            "Malaysia"
        ]
    },
    {
        "By surface area, what is the largest country in Africa:": [
            "Algeria",
            "Sudan",
            "Eqypt",
            "Democratic Republic of Congo"
        ]
    },
    {
        "After Russia, what is the largest country in the world:": [
            "Canada",
            "China",
            "USA",
            "Brazil"
        ]
    },
    {
        "After China, which country has the largest population:": [
            "India",
            "USA",
            "Indonesia",
            "Brazil"
        ]
    },
    {
        "In addition to Egypt, the Nile River, also runs through this country:": [
            "Sudan",
            "Ethiopia",
            "Libya",
            "Kenya"
        ]
    },
    {
        "The famous city of Casablanca, is located in this country:": [
            "Morocco",
            "Spain",
            "Mexico",
            "Argentina"
        ]
    },
    // 70
    {
        "The Sahara Desert, is located in this region:": [
            "northern Africa",
            "southern Africa",
            "northern Asia",
            "southern Asia"
        ]
    },
    {
        "The Gobi Desert, is located in this country:": [
            "Mongolia",
            "Peru",
            "Pakistan",
            "Namibia"
        ]
    },
    {
        "This is the largest desert in the USA:": [
            "Great Basin Desert",
            "Colorado Plateau",
            "Sonoran Desert",
            "Mojave Desert"
        ]
    },
    {
        "The country of Cote d'Ivoire, is located in this region:": [
            "western Africa",
            "eastern Africa",
            "central Europe",
            "central America"
        ]
    },
    {
        "The country of Yemen, is located in this region:": [
            "Arabian peninsula",
            "central Asia",
            "southeast Asia",
            "eastern Europe"
        ]
    },
    {
        "The largest salt flat in the world, is located in this country:": [
            "Bolivia",
            "Israel",
            "Argentina",
            "USA"
        ]
    },
    {
        "What is the largest island in the Mediterranean Sea:": [
            "Sicily, Italy",
            "Corsica, France",
            "Cyprus",
            "Santorini, Greece"
        ]
    },
    {
        "What is the largest volcanic island in the world:": [
            "Sumatra, Indonesia",
            "Honshu, Japan",
            "North Island, New Zealand",
            "Hawaii, USA"
        ]
    },
    {
        "Tibet, is an autonomous region within which country:": [
            "China",
            "India",
            "Nepal",
            "Mongolia"
        ]
    },
    {
        "Which country has the largest population in Africa:": [
            "Nigeria",
            "Ethiopia",
            "Algeria",
            "Egypt"
        ]
    },
    {
        "After Russia, which country has the largest population in Europe:": [
            "Germany",
            "France",
            "United Kingdom",
            "Italy"
        ]
    },
    {
        "The Suez Canal, crosses this country:": [
            "Egypt",
            "Saudi Arabia",
            "Turkey",
            "the Netherlands"
        ]
    },
    {
        "Brussels, is the capital city of this country:": [
            "Belgium",
            "Lithuania",
            "Germany",
            "Austria"
        ]
    },
    {
        "Islamabad, is the capital city of this country:": [
            "Pakistan",
            "Afghanistan",
            "Oman",
            "Kazakhstan"
        ]
    },
    {
        "Uganda, shares a border with all of these countries, except:": [
            "Nigeria",
            "South Sudan",
            "Kenya",
            "Rwanda"
        ]
    },
    {
        "The Euphrates River, originates in this country:": [
            "Turkey",
            "Bangladesh",
            "Ethiopia",
            "Iran"
        ]
    }
    // 85 questions
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

    if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.7e5bb15a-be9f-4d5a-95b5-d8440f6fcf5b") {
        context.fail("Invalid Application ID");
     }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Learn International Geography!"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Learn International Geography! I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
