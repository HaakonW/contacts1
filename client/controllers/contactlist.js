Router.configure({
  layoutTemplate:'layout'
});

Router.route("/", function(){
    this.render("contactlist");
});


Router.route('test'); //added route to 'test'. Have to add route for every template I guess
Router.route('detailContact');
Router.route('newContact');




  Template.contactlist.helpers({
    contacts:function(){
      return contacts.find({},{sort:{firstname:1}});
    }
  });


  Template.contactlist.events({
    'click #addContact':function(event,template){
      Router.go('/newContact');
    },

    'click #viewContact':function(event,template){
      /*Need function which find this contacts data and then route it to
      detailContact. Do Router.go() have to be inside this function?? */


      getInfoContact(this._id);
      //console.log(contacts.find({_id:id}).fetch());

    },
});



function getInfoContact(id){
  //console.log(id);
  var obj = contacts.find({_id:id}).fetch();
  console.log(obj);
  Session.set("firstName",obj[0].firstname);
  console.log(Session.get("firstName"));
  Session.set("lastName",obj[0].lastname);
  console.log(Session.get("lastName"));
  Session.set("phoneNr",obj[0].number);
  console.log(Session.get("phoneNr"));
  Session.set("gender",obj[0].gender);
  console.log(Session.get("gender"));
  Session.set("id",obj[0]._id);
  //set name, etc in detailContact with session variables

  Router.go('/detailContact');
}
