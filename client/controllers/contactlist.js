Router.configure({
  layoutTemplate:'layout'
});

Router.route("/", function(){
    this.render("contactlist");
});


Router.route('test'); //added route to 'test'. Have to add route for every template I guess
Router.route('detailContact');




  Template.contactlist.helpers({
    contacts:function(){
      return [{name:"Peter Wilhelmsen"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"},{name:"Haakon Winther"}];
    }
  });


  Template.contactlist.events({
    'click #addContact':function(event,template){
      Router.go('/test');
    },

    'click #viewContact':function(event,template){
      /*Need function which find this contacts data and then route it to
      detailContact. Do Router.go() have to be inside this function?? */

      Router.go('/detailContact');
    },
});
