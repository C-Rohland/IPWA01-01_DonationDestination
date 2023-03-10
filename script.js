

  //--------------------------------Formular 1---------------------------------------------------------

  // Abgabeort wird gespeichert
function setzeAbgabe(p){
    if (p==1) {
        sessionStorage.setItem(1,"Abgabe in der Geschäftsstelle");
        document.getElementById("Ort").innerHTML = "Abgabe in der Geschäftsstelle";
      
        checkinput();
    } else if (p==2) {
        sessionStorage.setItem(1,"Abholung");
        document.getElementById("Ort").innerHTML = "Abholung bei dir zuhause";
      
        checkinput();
    }
}

// Zielort wird gespeichert
function setzeZiel() {
    var Ziel = document.getElementById('AuswahlZiel').value;
    sessionStorage.setItem(2, Ziel);
  }


// Art der Kleidung wird gespeichert
function setzeArt(checkbox) {
    var AuswahlKleidung = JSON.parse(sessionStorage.getItem('selectedOptions')) || [];

    if (checkbox.checked) {
        AuswahlKleidung.push(checkbox.value);
    } else {
        var index = AuswahlKleidung.indexOf(checkbox.value);
        if (index > -1) {
            AuswahlKleidung.splice(index, 1);
        }
    }

    sessionStorage.setItem('selectedOptions', JSON.stringify(AuswahlKleidung));
}

// Vorname wird gespeichert
function setzeVorname() {
    var Vorname = document.getElementById('EingabeVorname').value;
    sessionStorage.setItem('EingabeVorname', Vorname);
 }

//Nachname wird gespeichert
function setzeNachname() {
    var Nachname = document.getElementById('EingabeNachname').value;
    sessionStorage.setItem('EingabeNachname', Nachname);
  }

//Email wird gespeichert
function setzeEmail() {
    var Email = document.getElementById('EingabeEmail').value;
    sessionStorage.setItem('EingabeEmail', Email);
  }


  //Reset der Eingabedaten
  function Reset() {
    sessionStorage.clear();
  }


 //Validierung des ersten Formulars
 function validateForm1() {
    // Überprüfen, ob eine Option aus der Liste der Ziele ausgewählt wurde
    var selectedOption = document.getElementById("AuswahlZiel").value;
    if (selectedOption == "Bitte auswählen") {
      alert("Bitte wähle das Ziel deiner Kleiderspende aus!");
      return false;
    }
  
    // Überprüfen, ob mindestens eine Checkbox der KLeiderarten ausgewählt wurde
    var checkboxes = document.getElementsByName("Kleiderart");
    var isChecked = false;
    for (var i=0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked){
        alert("Bitte wähle mindestens ein Kleidungsstück aus, das du spenden willst.");
      return false;
    } 
   
            
    // Überprüfen, ob alle Textfelder ausgefüllt wurden
    var Vorname = document.getElementById("EingabeVorname").value.trim();
    if (Vorname == "") {
        alert("Bitte gib deinen Vornamen an!");
        return false;
      }
    var Nachname = document.getElementById("EingabeNachname").value.trim();
    if (Nachname == "") {
        alert("Bitte gib deinen Nachnamen an!");
        return false;
      }
    var Email = document.getElementById("EingabeEmail").value.trim();
    if (Email == "") {
        alert("Bitte gib deine Emailadresse an!");
        return false;
      }

     // Wenn alle Validierungen erfolgreich sind, dann geben Sie true zurück
     return true;
}
  


//----------------------------------------------------Formular 2-------------------------------------

// Abgabeort wird gespeichert
function setzeAbgabe(p){
    if (p==1) {
        sessionStorage.setItem(1,"Abgabe in der Geschäftsstelle");
        document.getElementById("Ort").innerHTML = "Abgabe in der Geschäftsstelle";
      
        checkinput();
    } else if (p==2) {
        sessionStorage.setItem(2,"Abholung bei dir zuhause");
        document.getElementById("Ort").innerHTML = "Abholung bei dir zuhause";
      
        checkinput();
    }
}

// Zielort wird gespeichert
function setzeZiel2() {
    var Ziel = document.getElementById('AuswahlZiel2').value;
    sessionStorage.setItem(3, Ziel);
  }

// Art der Kleidung wird gespeichert
function setzeArt2(checkbox) {
    var AuswahlKleidung2 = JSON.parse(sessionStorage.getItem('selectedOptions')) || [];

    if (checkbox.checked) {
        AuswahlKleidung2.push(checkbox.value);
    } else {
        var index = AuswahlKleidung2.indexOf(checkbox.value);
        if (index > -1) {
            AuswahlKleidung2.splice(index, 1);
        }
    }

    sessionStorage.setItem('selectedOptions', JSON.stringify(AuswahlKleidung2));
}

// Vorname wird gespeichert
function setzeVorname2() {
    var Vorname2 = document.getElementById('EingabeVorname2').value;
    sessionStorage.setItem('EingabeVorname2', Vorname2);
 }

//Nachname wird gespeichert
function setzeNachname2() {
    var Nachname2 = document.getElementById('EingabeNachname2').value;
    sessionStorage.setItem('EingabeNachname2', Nachname2);
  }

//Email wird gespeichert
function setzeEmail2() {
    var Email2 = document.getElementById('EingabeEmail2').value;
    sessionStorage.setItem('EingabeEmail2', Email2);
  }

//Adresse wird gespeichert
function setzeAdresse() {
    var Adresse = document.getElementById('EingabeAdresse').value;
    sessionStorage.setItem('EingabeAdresse', Adresse);
  }

//PLZ wird gespeichert
function setzePLZ() {
    var PLZ = document.getElementById('EingabePLZ').value;
    sessionStorage.setItem('EingabePLZ', PLZ);
  }

//Stadt wird gespeichert
function setzeStadt() {
    var Stadt = document.getElementById('EingabeStadt').value;
    sessionStorage.setItem('EingabeStadt', Stadt);
  }




//Reset der Eingabedaten
  function Reset() {
    sessionStorage.clear();
  }



    //Validierung des zweiten Formulars
 

 function validateForm2() {
    // Überprüfen, ob eine Option aus der Liste ausgewählt wurde
    var selectedOption = document.getElementById("AuswahlZiel2").value;
    if (selectedOption == "Bitte auswählen") {
      alert("Bitte wähle das Ziel deiner Kleiderspende aus!");
      return false;
    }
  
    // Überprüfen, ob mindestens eine Checkbox ausgewählt wurde
    var checkboxes = document.getElementsByName("Kleiderart2");
    var isChecked = false;
    for (var i=0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked){
        alert("Bitte wähle mindestens ein Kleidungsstück aus, das du spenden willst.");
      return false;
    } 
   
            
    // Überprüfen, ob alle Textfelder ausgefüllt wurden
    var Vorname2 = document.getElementById("EingabeVorname2").value.trim();
    if (Vorname2 == "") {
        alert("Bitte gib deinen Vornamen an!");
        return false;
      }
    var Nachname2 = document.getElementById("EingabeNachname2").value.trim();
    if (Nachname2 == "") {
        alert("Bitte gib deinen Nachnamen an!");
        return false;
      }
    var Email2 = document.getElementById("EingabeEmail2").value.trim();
    if (Email2 == "") {
        alert("Bitte gib deine Emailadresse an!");
        return false;
      }
      var Adresse = document.getElementById("EingabeAdresse").value.trim();
      if (Adresse == "") {
          alert("Bitte gib deine Straße und Hausnummer an!");
          return false;
        }
      var Stadt = document.getElementById("EingabeStadt").value.trim();
      if (Stadt == "") {
          alert("Bitte gib deine Stadt an!");
          return false;
        }
      var PLZ = document.getElementById("EingabePLZ").value.trim();
      if (PLZ == "") {
          alert("Bitte gib deine Postleitzahl an!");
          return false;
        } else {
        if (PLZ < 21000 || PLZ > 21999) {
            alert("Leider ist eine Abholung nicht möglich! Die Abholadresse muss in der Nähe unserer Geschäftsstelle liegen.");
            return false;
            }
        }

    // Wenn alle Validierungen erfolgreich sind, dann geben Sie true zurück
    return true;   
 }                 