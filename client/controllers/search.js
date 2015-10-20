Template.search.helpers({
  result:function(){
    return searchResults;
  }
});

Template.search.events({
  'click #backArrow':function(){
    Router.go('/');
  },

  'click #searchB':function(){
    console.log("button pushed");
    findContact(document.getElementById('searchField').value);
  },
});


function findContact(searchTerm){
  var searchResults = [];

  var list = contacts.find().fetch();
  //console.log(list);
  for(var i=0; i < list.length; i++)
  {
    obj = list[i];
    if(obj.firstname == searchTerm || obj.lastname === searchTerm || obj.gender === searchTerm || obj.email === searchTerm || obj.number === searchTerm || obj.latitude === searchTerm || obj.longitude === searchTerm)
    {
      console.log("Objects firstname: " + obj.firstname);
      console.log("objects lastname: " + obj.lastname);
      searchResults.push(obj.firstname);
    }
  }
}
