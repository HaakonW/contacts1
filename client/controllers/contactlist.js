Router.configure({
  layoutTemplate:'layout'
});

Router.route("/", function(){
    this.render("contactlist");
});


Router.route('test'); //added route to 'test'. Have to add route for every template I guess
Router.route('detailContact');
Router.route('newContact');
Router.route('updateContact');
Router.route('search');




  Template.contactlist.helpers({
    contacts:function(){
      return contacts.find({},{sort:{firstname:1}});
    },
    contactsLastName:function(){
      return contacts.find({},{sort:{lastname:1}});
    },
    firstnameCheck:function(){
      return Session.get("firstnameC");
    },
    lastnameCheck:function(){
      return Session.get("lastnameC");
    },
    });


  Template.contactlist.events({
    'click #addContact':function(event,template){
      findUser();
      Router.go('/newContact');
    },

    'click #viewContact':function(event,template){
      /*Need function which find this contacts data and then route it to
      detailContact. Do Router.go() have to be inside this function?? */
      getInfoContact(this._id);
      //console.log(contacts.find({_id:id}).fetch());
    },

    'click #sortButton':function(event,template){
      console.log("sort clicked");
      if(Session.get("firstnameC"))
      {
        Session.set("firstnameC", false);
        Session.set("lastnameC", true);
      }
      else
      {
        Session.set("firstnameC",true);
        Session.set("lastnameC", false);

      }
    },

    'click #searchButton':function(){
      Router.go('/search');
    }
});



var getInfoContact =function(id){
  //console.log(id);
  var obj = contacts.find({_id:id}).fetch();
  console.log(obj);
  Session.set("firstName",obj[0].firstname);
  Session.set("lastName",obj[0].lastname);
  Session.set("phoneNumber",obj[0].number);
  Session.set("email", obj[0].email);
  Session.set("gender",obj[0].gender);
  Session.set("latitude", obj[0].latitude);
  Session.set("longitude",obj[0].longitude);
  Session.set("id",obj[0]._id);
  //set name, etc in detailContact with session variables

  Router.go('/detailContact');
};
