var userApp = new Vue ({
el: '#randomUserApp',
data: {
  users: {
      picture:"",
      name:"",
      nat:"",
      age:"".
      dob:"",
      mail:""  }

},
methods: {
  fetchUsers() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {userApp.users = json] });
  }
},
created(){
  this.fetchUsers()
}

});
