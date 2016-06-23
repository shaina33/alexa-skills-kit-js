/**
    Original version: Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
    
    Template modified for marine content by Shaina Karasin, 2016.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Space Geek for a space fact"
 *  Alexa: "Here's your space fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.5eb8a5aa-ff04-4d61-a382-068d3512b53b"; //**replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";**

/**
 * Array containing marine facts.
 */
var MARINE_FACTS = [
    "Jellyfish have existed for at least five hundred million years, so they were alive long before the dinosaurs.",
    "The commonly known form of a jellyfish, including a gelatinous bell and tentacles, is actually just the final life stage of the organism. This form is called a medusa.",
    "Jellyfish do not have a respiratory system. Instead, they receive oxygen by simple diffusion through their very thin skin.",
    "Most jellyfish species do not have true eyes. However, the box jellyfish has four eyes with lenses that look up and down, plus twenty simple eyes that detect light.",
    "The lion's mane jellyfish has thin thread-like tentacles, that can grow up to one hundred twenty feet long.",
    "The Nomura's jellyfish of eastern Asia typically measures 3 feet across and weighs three hundred thirty pounds, but it can grow to over six feet across.",
    "Jellyfish, while in the adult medusa form, are carnivorous. They eat plankton, crustaceans, fish eggs, small fish and other jellyfish.",
    "Green flourescent protein, which is commonly used in biotechnology research, was originally extracted from a jellyfish.",
    "Some electric eels produce enough electricity to power ten lightbulbs.",
    "For many octopus species, the only hard part of their body is their beak, located at the center of their arms.",
    "Octopuses have three hearts: two to pump blood through the gills, and a third to pump blood through the body.",
    "Octopuses have brains, but most of their brain cells are located in their eight arms.",
    "Octopus defense strategies include camouflage, mimicry, fast escape, and ejecting clouds of inky melanin.",
    "Some octopus species can change the color, texture, and pattern of their skin for camouflage and communication.",
    "Octopuses taste through the suction cups on their arms, but they eat with their beak.",
    "Octopuses often escape their containers, using their intelligence, and their ability to squeeze through tiny spaces.",
    "The blue whale is the largest creature on Earth. It typically measures one hundred twelve feet long, and weighs about four hundred and nineteen thousand pounds.",
    "On land, the closest living relative of whales, is the hippopotamus.",
    "Baleen whales have no teeth; instead, they strain large gulps of water to catch many plankton and krill.",
    "Whales are placental mammals, like humans. They are warm-blooded, and have blowholes for breathing air.",
    "Toothed whales navigate underwater using sonar, like bats. They emit sounds, that bounce off of objects and return to them.",
    "Narwhals are dark on top, to blend in with the ocean, and white on the bottom, to blend in with arctic ice.",
    "Male narwhals have a large tusk, about four to ten feet long. It looks like a unicorn horn, but is actually a specialized canine tooth.",
    "Narwhals are among the deepest-diving marine mammals, commonly diving more than four thousand nine hundred feet.",
    "When a whale dies, it falls to the ocean floor. There, it provides a habitat for a variety of life for decades.",
    "The 31 foot long killer whale, also known as an orca, is actually a species of dolphin.",
    "Dolphins mostly eat fish and squid, but some larger ones can also eat seals.",
    "Dolphins can stay alert for over 15 days straight, by sleeping with only half of their brain at a time.",
    "There are seven species of sea turtles. They are: green, loggerhead, Kemp's ridley, olive ridley, hawksbill, flatback, and leatherback.",
    "Unlike other turtles, sea turtles cannot retract their head and limbs into their shell.",
    "The leatherback is the largest sea turtle. It is six to nine feet long, and weighs up to fifteen hundred pounds.",
    "The leatherback sea turtle does not have a hard shell. Instead, it has a mosaic of bony plates underneath leathery skin.",
    "Sea turtles have long life spans, and take decades to reach maturity.",
    "Sea turtle eggs exposed to warmer temperature produce female hatchlings, while cooler temperatures produce males.",
    "To keep their body functioning in salt water, sea turtles excrete salt through salty tears.",
    "Sea turtles are omnivores and eat a variety of foods. Loggerhead turtles mostly eat jellyfish, while Hawksbills mostly eat sponges.",
    "Sea turtles contribute to the ocean ecosystem by grazing on sea grass. This helps the grass to grow effectively, and support many other creatures.",
    "Sea turtles lay their eggs on beaches. This provides nutrients to dune vegetation, which protects against beach erosion.",
    "There are three species of manatee: Amazonian, West Indian, and West African. The West Indian species includes the Florida manatee.",
    "Manatees are mostly herbivorous marine mammals, with paddle-like flippers. They typically measure nine to ten feet long and weigh about one thousand pounds.",
    "Manatees are the only marine mammals whose teeth are continuously replaced with new teeth.",
    "Manatees have prehensile lips. They can move the left and right upper lip separately, and they have seven lip muscles to manipulate plant food.",
    "The oceans cover about 71% of Earth's surface. However, because they support life at many depths, they provide at least 90% of Earth's bio sphere.",
    "Phyto plankton are microscopic organisms in the top layer of ocean, that produce food through photosynthesis, like plants. They are responsible for producing at least 50% of the world's Oxygen.",
    "As of 2016, over 33 thousand species of fish have been described, and about two hundred fifty new species are still described each year.",
    "There are over 500 species of shark. The largest species is the whale shark, which can reach 40 feet in length.",
    "Shark teeth are continually replaced, with some sharks losing at least 30 thousand teeth during their lifetime.",
    "Shark skeletons are made of cartilage, not bone. Cartilidge is durable, but more flexible and lighter than bone.",
    "For boyancy, sharks rely on a large liver containing oil. A shark's liver can compose up to 30% of its total body mass.",
    "Some sharks are unable to pump water over their gills. Therefore, they must constantly swim in order to breathe.",
    "Sharks have a network of special organs called ampullae of Lorenzini, that can sense electric fields in the water. This ability may be used in detecting prey, and orienting the shark.",
    "A female seahorse deposits hundreds of eggs into the male seahorse's pouch, where they grow until birth.",
    "Seahorses are a group of fifty four fish species in the genus Hippocampus.",
    "The giant squid has the largest eyes in the animal kingdom, up to 10 inches across, to help it see in the darkness of the deep ocean.",
    "Coral reefs are made from large colonies of coral polyps. Over time, the polyps excrete calcium carbonate to form hard skeletons.",
    "Swordfish, marlin, tuna, and some shark species have special organs to heat their eyes and brain, which improves their vision.",
    "Swordfish and marlin are the fastest fish in the ocean. They can reach 75 miles per hour for short periods.",
    "There are about fifteen hundred species of starfish, occuring in many locations and depths, from tropical to polar waters.",
    "Most starfish species can shed an arm in defense, and can regenerate lost arms.",
    "Crustaceans, including crabs, lobsters, crayfish, shrimp, krill, and barnacles, are a group of arthropods. Insects are also arthropods.",
    "Crustaceans have hard exoskeletons, so they must moult in order to grow. They shed their shell, and then a new larger shell hardens around them.",
    "Crayfish, also called crawfish or crawdads, are freshwater crustaceans that look like smaller lobsters with feather-like gills.",
    "Lobsters live for about 70 years, and do not seem to weaken with age. Instead, their lifetime is limited by the high energy costs of moulting a large exoskeleton.",
    "Sand dollars, which are often collected from beaches, are actually a type of sea urchin.",
    "Sea cucumbers typically have soft, cylindrical bodies, about four to 12 inches long, and leathery skin. They are related to starfish.",
    "Lobsters feed at night, eating fish, molluscs, other crustaceans, worms, and some plant life.",
    "Lobsters can avoid predators by swimming backwards quickly, through curling and uncurling their abdomen.",
    "The deep sea, meaning below 18 hundred meters, has little to no sunlight, high pressures, and water temperatures of about 32 to 38 degrees Fahrenheit.",
    "In the deep ocean floor, there are hydrothermal vents. The hot water released into the ocean here can be as hot as seven hundred fifty degrees Fahrenheit.",
    "Since photosynthesis is impossible in the deep sea, creatures down there must rely on organic matter that floats down from above. This is called marine snow.",
    "Many marine creatures create light through bioluminescence, for the purpose of camouflage, warning, luring prey, communication, and more.",
    "Chemosynthetic bacteria live in deep hydrothermal vents, supporting some of the only ecosystems on the planet that do not rely on sunlight for energy.",
    "Species of squid have eight arms, similar to octopus, but they also have two tentacles, and two small fins on the sides of their head."
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * SpaceGeek/MarineMania is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var MarineMania = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
MarineMania.prototype = Object.create(AlexaSkill.prototype);
MarineMania.prototype.constructor = MarineMania;

MarineMania.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("MarineMania onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

MarineMania.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("MarineMania onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
MarineMania.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("MarineMania onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

MarineMania.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Marine Mania, tell me a marine fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random marine fact from the marine facts list
    var factIndex = Math.floor(Math.random() * MARINE_FACTS.length);
    var fact = MARINE_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your marine fact: " + fact;

    response.tellWithCard(speechOutput, "MarineMania", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the MarineMania skill.
    var marineMania = new MarineMania();
    marineMania.execute(event, context);
};

