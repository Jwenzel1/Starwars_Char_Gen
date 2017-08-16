function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitBackstory(backstory){
  var backstoryLines = [];
  var backstory = backstory.split(" ");
  var charCount = 0;
  for(var i = 0; i < backstory.length; i++){
    if(i === backstory.length - 1){
      backstoryLines.push(backstory.splice(0, backstory.length));
    }
    else if(charCount >= 30){
      backstoryLines.push(backstory.splice(0, i-1));
      i=0;
      charCount = backstory[i].length;
    }
    else{
      charCount += backstory[i].length;
    }
  }
  //add spaces at the end of each word
  for(var i = 0; i < backstoryLines.length; i++){
    var line = "";
    for(var j = 0; j < backstoryLines[i].length; j++){
      if(j !== backstoryLines[i].length-1){
        line += backstoryLines[i][j] + " ";
      }
      else{
        line += backstoryLines[i][j];
      }
    }
    backstoryLines[i] = line;
  }
  return backstoryLines;
}

function makePDF(name, race, hairColor, skinColor, eyeColor, height, avgLifespan, backstory, str, dex, con, inteli, wis, cha){
  var bottomTraits = 32;
  var topTraits = 23.2;
  var nameX = 23;
  var nameY = 35;
  var statsX = 16;
  var statsY = 64;
  var statsOffset = 25;
  var docWidth = 210;
  var docHeight = 290;
  var traitsFontSize = 14;
  var nameFontSize = 16;
  var statsFontSize = 18;
  var otherFontSize = 10;
  var str = str + "";
  var dex = dex + "";
  var con = con + "";
  var inteli = inteli + "";
  var wis = wis + "";
  var cha = cha + "";
  name = capitalize(name.toLowerCase());
  race = capitalize(race.toLowerCase());
  hairColor = capitalize(hairColor.toLowerCase());
  skinColor = capitalize(skinColor.toLowerCase());
  eyeColor = capitalize(eyeColor.toLowerCase());
  backstory = capitalize(backstory.toLowerCase());

  var doc = new jsPDF();
  // This is the first page
  doc.setFontSize(nameFontSize);
  doc.addImage(imgData1, 'JPEG', 0, 0, docWidth, docHeight);

  // Adds the Character name
  doc.text(name, nameX, nameY);

  // Add the Race
  doc.setFontSize(traitsFontSize);
  doc.text(race, 70, bottomTraits);

  // Add the stats
  doc.setFontSize(statsFontSize);
  doc.text(str, statsX, statsY+statsOffset*0);
  doc.text(dex, statsX, statsY+statsOffset*1+1);
  doc.text(con, statsX, statsY+statsOffset*2+3);
  doc.text(inteli, statsX, statsY+statsOffset*3+4);
  doc.text(wis, statsX, statsY+statsOffset*4+5);
  doc.text(cha, statsX, statsY+statsOffset*5+6);




  // Add the second page and begin filling out details there
  doc.addPage();
  doc.setFontSize(nameFontSize);
  doc.addImage(imgData2, 'JPEG', 0, 0, docWidth, docHeight);
  doc.text(name, nameX, nameY);

  // Set Height and other traits at the top of the second page
  doc.setFontSize(traitsFontSize);
  doc.text(height, 118.7, topTraits);
  doc.text(eyeColor, 70.5, bottomTraits);
  doc.text(skinColor, 118.7, bottomTraits);
  doc.text(hairColor, 164, bottomTraits);

  // Add additional character features
  doc.setFontSize(otherFontSize);
  doc.text("Average Lifespan: " + avgLifespan, 77, 139);

  //make the backstory pretty and put it in the document
  doc.setFontSize(otherFontSize);
  doc.text(splitBackstory(backstory), 12, 143);
  doc.save(name + ".pdf");
}
