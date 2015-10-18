navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation(location) {
    Session.set("latitude", location.coords.latitude);
    Session.set("longitude", location.coords.longitude);
}



Template.newContact.events({
  "click #addBTN": function(){

    Session.set("firstName", document.getElementById("firstName").value);
    Session.set("lastName", document.getElementById("lastName").value);
    Session.set("phoneNumber", document.getElementById("phoneNumber").value);
    Session.set("email", document.getElementById("email").value);
    Session.set("gender", document.getElementById("gender").value);

    // var createNewContact = "Is this correct:?\n" +
    // "First name: "+Session.get("firstName") +
    // "\nLast name: "+Session.get("lastName") +
    // "\nPhone number: "+ Session.get("phoneNumber")+
    // "\nEmail: "+Session.get("email") +
    // "\nGender: "+Session.get("gender") +
    // "\nLatitude: "+Session.get("latitude")+
    // "\nLongitude: "+Session.get("longitude");

      contacts.insert({firstname: Session.get("firstName"), lastname: Session.get("lastName"), number: Session.get("phoneNumber"),
                        email: Session.get("email"), gender: Session.get("gender"), location: Session.get("location")});

Router.go("/contact");
}, //END ADDBTN
"click #cancelBTN": function(){
  var back = confirm("Go back to contacts?");
  if (back) {
    Router.go("/");
  }
},
});
