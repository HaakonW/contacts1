Template.detailContact.helpers({
  firstName:function(){
    return Session.get("firstName");
  },
  lastName:function(){
    return Session.get("lastName");
  },
  phoneNumber:function(){
    return Session.get("phoneNumber");
  },
  gender:function(){
    return Session.get("gender");
  },
  email:function(){
    return Session.get("email");
  },
  lat:function(){
    return Session.get("latitude");
  },
  long:function(){
    return Session.get("longitude");
  },
  id:function(){
    return Session.get("id");
  }
});

Template.detailContact.events({
  'click #backToContactList':function(event,template){
    Router.go('/');
  },

  'click #deleteButton':function(event,template){
    console.log(Session.get("phoneNumber"));
    contacts.remove({_id:Session.get("id")});
    Router.go('/');
  }
});
