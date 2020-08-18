var firebaseConfig = {
  apiKey: "AIzaSyDbWRvc4A_VBkFAwLBE-4zEWoiM2nkB85A",
  authDomain: "meddonor-d1118.firebaseapp.com",
  databaseURL: "https://meddonor-d1118.firebaseio.com",
  projectId: "meddonor-d1118",
  storageBucket: "meddonor-d1118.appspot.com",
  messagingSenderId: "528524178623",
  appId: "1:528524178623:web:71302aca62118ab553c20a",
  measurementId: "G-FJJ4TTBVBQ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
var database = firebase.database();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  window.location = 'donate.html';
}

function signOut() {
  auth.signOut();
  window.location = 'index.html';
}