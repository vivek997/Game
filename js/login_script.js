
var provider = new firebase.auth.GoogleAuthProvider();
var user;

$( document ).ready(function() {
	$("#welcome").hide();
});

function login(){
//    function newLoginHappened(user){
//        if (user){
//            //user is signed in
//            showWelcomeContainer();
//        }
//        else{
//            var provider = new firebase.auth.GoogleAuthProvider();
//            firebase.auth().signInWithRedirect(provider);
//        }
//    }
//    
//    firebase.auth().onAuthStateChanged(newLoginHappened);
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  user = result.user;
	  showWelcomeContainer();
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
    
    
    
    
    
    
};

function showWelcomeContainer() {
	$("#login").hide();
	$("#welcome").show();
	$("#welcomeText").html("Hello, " + user.displayName);
};



function signout(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
    console.log('SignOut Succesfull');
}).catch(function(error) {
  // An error happened.
    console.log('SignOut Failed');
});
};



