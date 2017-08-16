//Initializes array that species will be stored
var speciesArray = [];

//Initializes array containing images for each species
var speciesImages = {
	"Human": "https://vignette3.wikia.nocookie.net/starwars/images/8/82/Leiadeathstar.jpg/revision/latest/scale-to-width-down/1000?cb=20071008054722",
	"Droid": "https://vignette4.wikia.nocookie.net/starwars/images/6/6d/Droid_Counterparts_Fathead.png/revision/latest/scale-to-width-down/250?cb=20161114161434",
	"Wookiee": "https://vignette1.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png/revision/latest/scale-to-width-down/1000?cb=20161108052810",
	"Rodian": "https://vignette1.wikia.nocookie.net/starwars/images/d/d3/Rodian_DICE.png/revision/latest/scale-to-width-down/482?cb=20151106032702",
	"Hutt": "https://vignette3.wikia.nocookie.net/starwars/images/1/19/JabbaPromo.png/revision/latest/scale-to-width-down/998?cb=20161110010925",
	"Yoda's species": "https://vignette2.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/1000?cb=20150206140125",
	"Trandoshan": "https://vignette3.wikia.nocookie.net/starwars/images/7/72/Bossk_full_body.png/revision/latest?cb=20160415124424",
	"Mon Calamari": "https://vignette1.wikia.nocookie.net/starwars/images/2/23/The_Mon_Calamari.png/revision/latest?cb=20150801202537",
	"Ewok": "https://vignette4.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png/revision/latest?cb=20130622101905",
	"Sullustan": "https://vignette2.wikia.nocookie.net/starwars/images/9/9c/Sullustan_DICE.png/revision/latest?cb=20151106031005",
	"Neimodian": "https://vignette4.wikia.nocookie.net/starwars/images/b/b0/NeimoidiansSWE.png/revision/latest?cb=20140909101500",
	"Gungan": "https://vignette4.wikia.nocookie.net/starwars/images/6/61/Gungans.png/revision/latest/scale-to-width-down/1000?cb=20130122235412",
	"Toydarian": "https://vignette4.wikia.nocookie.net/starwars/images/6/6e/Wattoep2promotionalfull.jpg/revision/latest/scale-to-width-down/999?cb=20081222024850",
	"Dug": "https://vignette1.wikia.nocookie.net/starwars/images/2/2c/Dug_full_body.png/revision/latest?cb=20140728150031",
	"Twi'lek": "https://vignette1.wikia.nocookie.net/starwars/images/5/54/Twileks.png/revision/latest?cb=20151229035344",
	"Aleena": "https://vignette2.wikia.nocookie.net/starwars/images/a/a4/Databank_aleena.png/revision/latest/scale-to-width-down/1000?cb=20160912123529",
	"Vulptereen": "https://vignette3.wikia.nocookie.net/starwars/images/c/cd/Dud_Bolt_FF_Scan.png/revision/latest?cb=20150414170315",
	"Xexto": "https://vignette3.wikia.nocookie.net/starwars/images/3/30/Gasgano.jpg/revision/latest?cb=20150331133737",
	"Toong": "https://vignette3.wikia.nocookie.net/starwars/images/1/18/BenQuadinarosFull-SWE.png/revision/latest?cb=20160910192602",
	"Cerean": "https://vignette2.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg/revision/latest?cb=20070930185700",
	"Nautolan": "https://vignette2.wikia.nocookie.net/starwars/images/8/81/Kitfisto_detail.png/revision/latest?cb=20170608230157",
	"Zabrak": "https://vignette2.wikia.nocookie.net/starwars/images/a/a4/Zabrak_DICE.png/revision/latest?cb=20151106031307",
	"Tholothian": "https://vignette1.wikia.nocookie.net/starwars/images/c/c8/AdiGallia2-SWE.jpg/revision/latest?cb=20111115045121",
	"Iktotchi": "https://vignette1.wikia.nocookie.net/starwars/images/f/f4/SaeseeTiinFull-SWE.png/revision/latest?cb=20160913232333",
	"Quermian": "https://vignette1.wikia.nocookie.net/starwars/images/4/4f/Yarael_Poof_USW.png/revision/latest?cb=20160701061715",
	"Kel Dor": "https://vignette1.wikia.nocookie.net/starwars/images/f/fd/Plokoon_detail.png/revision/latest?cb=20111116042533",
	"Chagrian": "https://vignette1.wikia.nocookie.net/starwars/images/c/c3/Mas_Amedda_SWE.png/revision/latest?cb=20140529044319",
	"Geonosian": "https://vignette2.wikia.nocookie.net/starwars/images/7/79/Poggle_Geo.jpg/revision/latest/scale-to-width-down/220?cb=20080118201719",
	"Mirialan": "https://vignette3.wikia.nocookie.net/starwars/images/b/b1/Luminara_Unduli_Barriss_Offee_TCW.png/revision/latest/scale-to-width-down/1000?cb=20160829060734",
	"Clawdite": "https://vignette3.wikia.nocookie.net/starwars/images/7/7d/Clawdite.jpg/revision/latest/scale-to-width-down/1000?cb=20111001150105",
	"Besalisk": "https://vignette3.wikia.nocookie.net/starwars/images/8/83/Dexter_Jettster_%28Besalisk%29_FF44.jpg/revision/latest?cb=20070712205318",
	"Kaminoan": "https://vignette4.wikia.nocookie.net/starwars/images/e/e9/HalleBurtoni-TCWCE.png/revision/latest?cb=20170613012448",
	"Skakoan": "https://vignette1.wikia.nocookie.net/starwars/images/d/d2/Wat_Tambor_SWE.png/revision/latest?cb=20160930025610",
	"Muun": "https://vignette2.wikia.nocookie.net/starwars/images/6/6f/SanHill_hs.jpg/revision/latest?cb=20080117160044",
	"Togruta": "https://vignette4.wikia.nocookie.net/starwars/images/1/11/ShaatTi-SWE.png/revision/latest?cb=20160914001803",
	"Kaleesh": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQ-iMXQ20--EhrUwVN7UX2UlhIBjZFD7qdoFHSAhadxe1PMyr",
	"Pau'an": "https://vignette1.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg/revision/latest?cb=20091130182814"
}

//Populates species[] with the species from SWAPI
function makeSpeciesArray(url) {
	//Function is passed the URL of species page, then queries the database
  $.get(url, function(response) {
    for (var i = 0; i < response.results.length; i++) {
      speciesArray.push(
        {
          "name" : response.results[i].name,
          "url" : response.results[i].url
        }
      );
    }
    //Recursively calls the makeSpeciesArray function if there is a next species page
    if (response.next !== null) {
      makeSpeciesArray(response.next);
    }
  });
}

//Populates the dropdown containing the species
function populateDropdown(){
  console.log(speciesArray.length);
  //Assigns each species a value equal to its species number in from the SWAPI
  for(var i = speciesArray.length - 1; i >= 0; i--){
    newOption = $("<option>");
    newOption.append(speciesArray[i].name);
    newOption.attr("value", i);
    $("#species").append(newOption);
  }
}

//Determines the characteristics based on the species selected
function determineCharacteristics(species) {

  //Creates a queryURL based on what the buttons 'topic' value is
  var queryURL = speciesArray[species].url;

  //Ajax method to query SWAPI
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
  	  //Generates random characteristics based on species
      var rmCommas = response.hair_colors.replace(/,/g, "");
      var hairArray = rmCommas.split(" ");
      var randomHairColor = hairArray[(Math.floor(Math.random() * (hairArray.length)))];
      console.log(randomHairColor);
      var rmCommas = response.eye_colors.replace(/,/g, "");
      var eyeArray = rmCommas.split(" ");
      var randomEyeColor = eyeArray[(Math.floor(Math.random() * (eyeArray.length)))];
      console.log(randomEyeColor);
      var rmCommas = response.skin_colors.replace(/,/g, "");
      var skinArray = rmCommas.split(" ");
      var randomSkinColor = skinArray[(Math.floor(Math.random() * (skinArray.length)))];
      console.log(randomSkinColor);
      var lifespan = response.average_lifespan;
      var height = response.average_height;
      //Outputs characteristics
      $("#haircolor-output").html("Hair Color: " + randomHairColor);
      $("#eyecolor-output").html("Eye Color: " + randomEyeColor);
      $("#skincolor-output").html("Skin Color: " + randomSkinColor);
      $("#lifespan-output").html("Average Species Lifespan: " + lifespan);
      $("#height-output").html("Height: " + height);

    });
}

//Function that generates a random stat number between 3-18
function rollForStat(){
  //Initializes an empty array, roll[]
  var roll = [];
  //for loop running 4 times, adding a random number between 1-6 to roll[] at index i
  for(var i=0;i<4;i++){
    roll[i] = (Math.floor((Math.random() * 6) + 1));
  }
  //Variables that will record the value of the lowest index, and the lowest index
  var lowestIndex = 0;
  var lowest = roll[0];
  //for loop that records the position and value of the lowest value in roll[]
  for(var i=0;i<roll.length;i++){
    if(roll[i]<lowest){
      lowest = roll[i];
      lowestIndex = i;
    }
  }
  //Removes the lowest value from roll[]
  roll.splice(lowestIndex, 1);
  //Initializes var stat that will hold the value of our stats
  var stat = 0;
  //for loop that will sum all numbers contained within roll[]
  for(var i=0;i<roll.length;i++){
    stat = stat + roll[i];
  }

  return stat;
}

$(document).ready(function() {
  //Calls on makeSpeciesArray function and passes it the first page of species
  makeSpeciesArray("https://swapi.co/api/species/?format=json");
  //Set timeout to give time for the SWAPI query
  setTimeout(populateDropdown, 2000);
  //Whenever a new species is selected from the dropdown, displays its species image
  $("#species").on("change", function(){
    var selectedSpecies = $("#species option:selected").text();
    $("#speciesImage").attr("src", speciesImages[selectedSpecies]);
  });
  //Function that creates a pdf whenever the #add-pdf button is clicked
  $("#add-pdf").on("click", function(){
  	//Checks if the name input area is not blank
    if($("#name-output").text() !== "Name: "){
			$("#error-msg").text("");
			$("#name-error").text("");
      if($("#stats-info tr").length){
        var stats = [];
        $("#stats-info tr td").each(function(index, element){
          stats.push($(this).text());
        });
       makePDF($("#name-output").text().split(": ")[1], $("#species-output").text().split(": ")[1], $("#haircolor-output").text().split(": ")[1], $("#skincolor-output").text().split(": ")[1], $("#eyecolor-output").text().split(": ")[1], $("#height-output").text().split(": ")[1], $("#lifespan-output").text().split(": ")[1], $("#backstory-output").text().split(": ")[1], stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]);
      }
      else{ // No Stats
        makePDF($("#name-output").text().split(": ")[1], $("#species-output").text().split(": ")[1], $("#haircolor-output").text().split(": ")[1], $("#skincolor-output").text().split(": ")[1], $("#eyecolor-output").text().split(": ")[1], $("#height-output").text().split(": ")[1], $("#lifespan-output").text().split(": ")[1], $("#backstory-output").text().split(": ")[1], "", "", "", "", "", "");
      }
    }
    else if($("#name-output").text() == "Name: "){
    	$("#error-msg").text("You must Create a Character first!");
    }
  });

  $("#add-button").on("click", function(event) {
    event.preventDefault();
    if($("#char-name").val() !== ""){
			$("#name-error").text("");
			$("#error-msg").text("");
      determineCharacteristics($("#species").val());
    }
    else{
    	$("#name-error").text("You MUST enter a name.");
    }
  });

  $("#add-button").on("click", function(event) {

    event.preventDefault();

    if($("#char-name").val() !== ""){
      $("#charLoad").removeClass("loaded hidden");
			$("#charStats").toggle();
      //Stores the users input from input areas into variables
      var name = $("#char-name").val().trim();
      var species = $("#species option:selected").text();
      var backstory = $("#backstory").val().trim();

      var speciesNumber = ($("#species").val());
      console.log(speciesNumber);

      $.ajax({
        url: 'https://yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {
          sentence: backstory
        }, // Parameters go here
        datatype: 'json',
        success: function(data) {
          //alert(data);
          $("#backstory-output").html("Backstory: " + data);
          $('#charLoad').addClass('loaded hidden');
      		$("#charStats").toggle();
        },
        error: function(err) {
          $("#backstory-output").html("Backstory: " + backstory);
          $('#charLoad').addClass('loaded hidden');
      		$("#charStats").toggle();
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "7aUxnsVFMRmshJzLl3c0e0zFtAcdp1w5aAqjsnBtASP9qE3io3"); // Enter your Mashape key here
        }
      });

      //Clears the input areas
      $("#char-name").val("");
      $("#backstory").val("");

      //Outputs user input
      $("#name-output").html("Name: " + name);
      $("#species-output").html("Species: " + species);
      $("#backstory-output").html("Backstory: " + backstory);
    }
  });

  $("#add-stats").on("click", function(event){
    var str = rollForStat();
    var dex = rollForStat();
    var con = rollForStat();
    var inteli = rollForStat();
    var wis = rollForStat();
    var cha = rollForStat();
    $("#stats-info").html(
      "<tr><td>" + str + "</td><td>" + dex + "</td><td>" + con + "</td><td>" +
      inteli + "</td><td>" + wis + "</td><td>" + cha + "</td></tr>");
  });

});
