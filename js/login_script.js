function login(){
    function newLoginHappened(user){
        if (user){
            //user is signed in
            app(user);
        }
        else{
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }
    
    firebase.auth().onAuthStateChanged(newLoginHappened);
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

function app(user){
    document.getElementById("clientName").innerHTML = user.displayName;
}


