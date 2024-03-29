
document.addEventListener("DOMContentLoaded", function() {
  var passwordInput = document.getElementById("password");

  passwordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("login").click();
    }
  });
});
document.getElementById("login").onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;




  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let uid = userCredential.user.uid;
      console.log(uid);
      // ...
      window.location.href = "/Concept.html";
    })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      if (error) {
        document.getElementById("wrong").innerText = "Wrong email or Password!";
      } else {
        document.getElementById("wrong").innerText = "";
      }
    });
};

document.getElementById("google").onclick = function () {
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      // IdP data available in result.additionalUserInfo.profile.
      // ...
      window.location.href = "/Concept.html";
    })
    .catch((error) => {
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

document.getElementById("forget").onclick = function () {
  let email = document.getElementById("emailAddress").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
      // window.location.href = "/Concept.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });

  // Confirm the link is a sign-in with email link.
  if (firebase.auth().isSendPasswordResetEmail(window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }
};

document.getElementById("create").onclick = function () {
  window.location.href = "/register.html";
};

document.getElementById("learn").onclick = function () {
  window.location.href = "/index.html";
};

check.onclick = togglePassword;

function togglePassword() {
  if (check.checked) password.type = "text";
  else password.type = "password";
}
