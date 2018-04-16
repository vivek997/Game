$( document ).ready(function() {
	$("#welcome").hide();
});



function login(){
    function newLoginHappened(user){
        if (user){
            //user is signed in
            showWelcomeContainer();
        }
        else{
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }
    
    firebase.auth().onAuthStateChanged(newLoginHappened);
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



