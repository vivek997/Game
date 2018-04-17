firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
        
      document.getElementById("welcomeText").innerHTML = "Welcome : " + user.displayName;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});



function signIn() {
    
    var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
    
//     function newLoginHappened(user){
//        if (user){
//            //user is signed in
//            showWelcomeContainer();
//        }
//        else{
//            $("#user_div").hide();
//            var provider = new firebase.auth.GoogleAuthProvider();
//            firebase.auth().signInWithRedirect(provider);
//        }
//    }
//    
//    firebase.auth().onAuthStateChanged(newLoginHappened);
	

};

//function showWelcomeContainer() {
//	$("#login_div").hide();
//	$("#user_div").show();
//	$("#welcomeText").html("Hello, " + user.displayName);
//};


function signout(){
firebase.auth().signOut();
}



   


//firebase.auth().signInWithPopup(provider).then(function(result) {
//	  // This gives you a Google Access Token. You can use it to access the Google API.
//	  var token = result.user.uid;
//	  // The signed-in user info.
//	  user = result.user;
//	  showWelcomeContainer();
//	  sessionStorage.token = token;
//	  // ...
//	}).catch(function(error) {
//	  // Handle Errors here.
//	  var errorCode = error.code;
//	  var errorMessage = error.message;
//	  // The email of the user's account used.
//	  var email = error.email;
//	  // The firebase.auth.AuthCredential type that was used.
//	  var credential = error.credential;
//	  // ...
//	});