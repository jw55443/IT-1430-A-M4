// Student Name | Due Date | Assignment 4

/* =============================================
   Galaxia Adventure Park – amuse_script.js
   ============================================= */

/* -----------------------------------------------
   1. rideInfo(element)
      Called when a ride name is clicked on info.html.
      Alerts the ID and name of the clicked row.
----------------------------------------------- */
function rideInfo(element) {
  var row = element.parentElement;
  var rideId = row.id;
  var rideName = element.textContent;
  alert("You clicked on the ride with the ID of: " + rideId + " and name of:" + rideName);
}

/* -----------------------------------------------
   2. showRides()
      Writes ride names, images, and descriptions
      to rides.html using arrays and a for loop.
----------------------------------------------- */
function showRides() {
  var rideNames = [
    "Supernova Surge",
    "Black Hole Drop",
    "Asteroid River Rapids",
    "Lunar Carousel",
    "Nebula VR Experience"
  ];

  var rideDescriptions = [
    "The signature ride of Galaxia, Supernova Surge launches riders from 0 to 80 mph in under 3 seconds using magnetic propulsion technology. The coaster twists through a simulated supernova explosion with pyrotechnics and light effects that'll leave you breathless.",
    "Experience the terrifying pull of a black hole in this 200-foot free-fall tower. Riders are lifted slowly into a darkened dome filled with star projections before being dropped at gravity-defying speed. A must for thrill seekers!",
    "Cool off on this exhilarating water rapids ride where riders navigate through an asteroid field while getting completely soaked. With surprise geysers and spinning rocks, no two runs are ever the same.",
    "Perfect for the whole family, the Lunar Carousel features beautifully designed moon rovers, space shuttles, and astronaut figures that gently spin under a canopy of glowing stars. A calming interlude in the middle of galactic excitement.",
    "Strap on your headset and take a fully immersive virtual reality journey through a colorful nebula. The 8-minute experience combines moving seats, wind effects, and scent dispensers to create a multisensory adventure unlike anything on Earth \u2014 or beyond!"
  ];

  var rideImages = [
    "images/supernova_surge.jpg",
    "images/black_hole_drop.jpg",
    "images/asteroid_river.jpg",
    "images/lunar_carousel.jpg",
    "images/nebula_vr.jpg"
  ];

  var output = "";

  for (var i = 0; i < rideNames.length; i++) {
    if (i > 0) {
      output += "<hr>";
    }
    output += "<div class=\"ride-section\">";
    output += "<img src=\"" + rideImages[i] + "\" alt=\"" + rideNames[i] + "\" width=\"300\">";
    output += "<h3>" + rideNames[i] + "</h3>";
    output += "<p>" + rideDescriptions[i] + "</p>";
    output += "</div>";
  }

  document.getElementById("ridesContent").innerHTML = output;
}

/* -----------------------------------------------
   3. orderTics()
      Called when the order form is submitted.
      Alerts the total price.
----------------------------------------------- */
function orderTics() {
  alert("Your total price is: $35");
}
