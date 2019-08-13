$(document).ready (function() {
  
  var firebaseConfig = {
    apiKey: "AIzaSyDaMa7dRigakPKO9wx7OOPDUqjxliBWODk",
    authDomain: "train-time-f29f7.firebaseapp.com",
    databaseURL: "https://train-time-f29f7.firebaseio.com",
    projectId: "train-time-f29f7",
    storageBucket: "",
    messagingSenderId: "917540177651",
    appId: "1:917540177651:web:a8da975849101762"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  $("#newTrain").on("click", function (event) {
      event.preventDefault();

    trainName = $("#tname1").val().trim();
    destiny= $("#destionation1").val().trim();
    firstTrain = $("#fttime1").val().trim();
    frequence = $("#freq1").val().trim();

    database.ref().push({
      trainName:trainName,
      destination:destiny,
      firstTrain:firstTrain,
      frequency: frequence,
    });

  });
  database.ref
})