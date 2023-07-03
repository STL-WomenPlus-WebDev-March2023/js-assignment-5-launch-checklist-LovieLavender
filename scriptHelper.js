// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    window.addEventListener("load", function() {
        // let form = document.getElementById("launchForm");
        let submitBtn = document.getElementById("formSubmit");
        
        submitBtn.addEventListener("click", function(event) {
            
        let pilotName= document.querySelectorAll("input[name=pilotName]");
           
        
            if (pilotName.value === "") {
                alert("All fields are required!");
                event.preventDefault();
            }

            // let pilotName = document.getElementById("pilotName");
            //  let copilot = document.querySelector("copilotName");
              

            // //  }

            // let fuelLevel = document.querySelector("fuelLevel");
            // let cargoMass = document.querySelector("cargoMass");
            // // // if (pilotName.value === "" || copilot.value === "" || fuelLevel.value.length === 0 || cargoMass.value.length === 0) {
            // //     if (pilotName.value === "" || copilot.value === "") {
            // //     alert("All fields are required!");
            // //     event.preventDefault();
             
            //  if (pilotName.value === "" || copilot.value === "" || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
                
            //     alert("Make sure to enter valid information for each field");
            //     event.preventDefault();
            //  }
            })
            return validateInput;
        })
    // })
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
