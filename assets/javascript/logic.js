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
  var newDatabase = firebase.database();
  
  $("#newTrain").on("click", function (event) {
      event.preventDefault();

    trainName = $("#tname1").val().trim();
    destiny= $("#destionation1").val().trim();
    firstTrain = $("#fttime1").val().trim();
    frequence = $("#freq1").val().trim();

    newDatabase.ref().push({
      trainName:trainName,
      destination:destiny,
      firstTrain:firstTrain,
      frequency: frequence,
    });

  });
  datebase.ref().on("child_added", function*(childSnapshot) {

var nTrain = childSnapshot.val().trainName;
var nLocation = childSnapshot.val().destination;
var nFirstTrain = childSnapshot.val().firstTrain;
var nFreq = childSnapshot.val().frequency;

var convertStartTime = moment(nFirstTrain, "hh:mm").subtract (1,"years");
var currentTime= moment ();
var diffTime = moment().diff(moment(convertStartTime), "minutes");
var tRemainder = diffTime % nFreq;
var tMinutesTillTrain = nFreq-tRemainder;
var nXtrain = moment().add(tMinutesTillTrain, "minutes");
var trainComes = moment (nTrain).format("HH:mm");

$("#trainDisplay").append(
'<tr><td>' + nTrain + 
'</td><td>' + nLocation +
'</td><td>' + nFreq +
'</td><td>' + trainComes +
'</td><td>' + tMinutesTillTrain + '</td></tr>');


    })
    })