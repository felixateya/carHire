const D = new Date();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    console.log(uid);

    var userEmail = user.email;
    console.log(userEmail);

    firebase
      .firestore()
      .collection("Users")
      .doc(uid)
      .get()
      .then((doc) => {
        let userName = doc.data().userName;
        let userEmail = doc.data().emailAddress;
        // document.getElementById("userName").innerText =
        //   "Welcome" + " " + userName;
        // document.getElementById("email").innerText = userEmail;
      });
      document.getElementById("logOut").onclick = function () {
        firebase
          .auth()
          .signOut()
          .then(() => {
            // Sign-out successful.
            window.location.href = "/index.html";
          })
          .catch((error) => {
            // An error happened.
          });
      };
  } else {
    window.location.href = "/index.html";
  }
});

document.getElementById("book").onclick = function () {
  window.location.href = "/cars.html";
};

// document.getElementById("logOut").onclick = function() {
//   window.location.href = "/index.html";
// }

function changeBackground() {
  var myDiv = document.getElementById("myDiv");
  if (window.scrollY > 0) {
    myDiv.classList.add("change-background");
  } 
   else {
    myDiv.classList.remove("change-background");
    
  }
}


