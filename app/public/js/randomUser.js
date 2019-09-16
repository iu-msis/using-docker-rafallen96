var randomUser = new Vue ({
el: '#randomUserApp',
data: {
  users: {
      picture:"",
      name:"",
      nat:"",
      age:"",
      dob:"",
      mail:""  }

},
methods: {
  fetchUsers() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {randomUser.users = json.results[0] });
  }
},
created(){
  this.fetchUsers()
}

});
