
  firebase.initializeApp(config);
    var uid;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var user = firebase.auth().currentUser;
          
          if (user != null) {
          
          email = user.email;
          uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                          // this value to authenticate with your backend server, if
                          // you have one. Use User.getToken() instead.
          }
          
    } else {
      // No user is signed in.
    }
  });
         
  var database = firebase.database()

  $(".submit").on("click",function(event){
      event.preventDefault();
    database.ref("/users/"+uid).set({
        name:$(".name-input").val(),
        gender:$(".gender-input").val(),
        skills:$(".skills-input").val(),
        learn:$(".learn-input").val()
    })

  })

  