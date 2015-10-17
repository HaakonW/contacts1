
if (Meteor.isClient) {
  Meteor.startup(function(){
      GoogleMaps.load();
      Template.newContact.helpers({
        exampleMapOptions: function() {
          // Make sure the maps API has loaded
          if (GoogleMaps.loaded()) {
            // Get the current location
          var position = Geolocation.currentLocation();
          // Map initialization options
          return {
            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            zoom: 12
          };

            // return {
            //   center: new google.maps.LatLng(59.914108, 10.722977),
            //   zoom: 8
            //};
          }
        }
      });
  });


  Template.newContact.onCreated(function() {
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});




} // END METEOR

Template.newContact.events({



  "click #addBTN": function(){
    Session.set("firstName", document.getElementById("firstName").value);
    Session.set("lastName", document.getElementById("lastName").value);
    Session.set("phoneNumber", document.getElementById("phoneNumber").value);
    Session.set("email", document.getElementById("email").value);
    Session.set("gender", document.getElementById("gender").value);
    Session.set("location", document.getElementById("location").value);

    var createNewContact = confirm("Is this correct:?\n" +
    "First name: "+Session.get("firstName") +
    "\nLast name: "+Session.get("lastName") +
    "\nPhone number: "+ Session.get("phoneNumber")+
    "\nEmail: "+Session.get("email") +
    "\nGender: "+Session.get("gender") +
    "\nLocation: "+Session.get("location"));
    if (createNewContact)
    {
      contacts.insert({firstname: Session.get("firstName"), lastname: Session.get("lastName"), number: Session.get("phoneNumber"),
                        email: Session.get("email"), gender: Session.get("gender"), location: Session.get("location")});
    }

}, //END ADDBTN

"click #backBTN": function(){
  alert("GO back");
},

"click #getLocation": function(){
  console.log("Trying to get location");
},

});

// Template.newContact.helpers({
//   exampleMapOptions: function() {
//     // Make sure the maps API has loaded
//     if (GoogleMaps.loaded()) {
//       // Get the current location
//     var position = Geolocation.currentLocation();
//     // Map initialization options
//     return {
//       center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
//       zoom: 12
//     };
//     }
//   }
// });



  function getLocation(){
        var test = Geolocation.currentLocation();   console.log(test);
        var test2 = Geolocation.error(); console.log(test2);
        var test3 = Geolocation.latLng(); console.log(test3);

        }
