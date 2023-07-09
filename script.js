// Write your JavaScript code here!




window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let destination = pickPlanet(listedPlanets);
       addDestinationInfo(document, destination.name, destination.diameter, destination.star, destination.distance, destination.moons, destination.imageUrl)  
   });
   let faultyItems = document.getElementById("faultyItems");
   faultyItems.style.visibility = "hidden"
   let form = document.querySelector("form");
   form.addEventListener('submit', function(event) {
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    event.preventDefault();
   });
});