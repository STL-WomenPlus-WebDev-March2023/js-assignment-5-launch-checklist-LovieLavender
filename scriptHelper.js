// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let div = document.getElementById("missionTarget")
   div.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `;
}


function validateInput(testInput) {
  let numInput = Number(testInput);
  
  if (numInput === "") {
  return "Empty";
  
   } else if (isNaN(numInput)) {
  return "Not a Number";

   } else if (isNaN(numInput) === false) {
  return "Is a Number";
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   console.log(fuelLevel);
    if (validateInput(pilot) === "Empty" || (validateInput(copilot) === "Empty") || (validateInput(fuelLevel) === "Empty") || (validateInput(cargoLevel) === "Empty")) {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a Number" || (validateInput(copilot) === "Is a Number") || (validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")) {
        alert("Make sure to enter valid information for each field!");
    } else {
      list.style.visibility = "visible";
      pilotStatus.innerHTML  = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
      
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if ( fuelLevel < 10000 && cargoLevel <= 10000) {
        fuelStatus.innerHTML = `Fuel level is too low for launch.`;
        cargoStatus.innerHTML = `Cargo mass is low enough for launch.`;
        launchStatus.innerHTML = `Shuttle not ready for launch.`;
        launchStatus.style.color = "red";
        
      } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = `Fuel level is high enough for launch.`;
        cargoStatus.innerHTML = ` Cargo mass is too heavy for launch.`;
        launchStatus.innerHTML = `Shuttle not ready for launch.`;
        launchStatus.style.color = "red";
      
      } else if ( fuelLevel < 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = `Fuel level is too low for launch.`;
        cargoStatus.innerHTML = `Cargo mass is too heavy for launch.`;
        launchStatus.innerHTML = `Shuttle not ready for launch.`;
        launchStatus.style.color = "red"; 
        
      } else {
        fuelStatus.innerHTML = "Fuel level is high enough for launch.";
        cargoStatus.innerHTML = `Cargo mass is low enough for launch.`;
        launchStatus.innerHTML = "Shuttle is ready for launch.";
        launchStatus.style.color = "green"; 
        
    }


    } 
   console.log(fuelLevel, "after");
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
    
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
