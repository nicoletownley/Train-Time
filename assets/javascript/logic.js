$(document).ready (function() {
  
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDHV-smkXJXY7pnw_XP5zOdw54mzUh9QM4",
      authDomain: "awesome-train.firebaseapp.com",
      databaseURL: "https://awesome-train.firebaseio.com",
      projectId: "awesome-train",
      storageBucket: "awesome-train.appspot.com",
      messagingSenderId: "327831862239",
      appId: "1:327831862239:web:dd2fd9b14cb81d10"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  var datebase = firebase.database();
  
  $("#newTrain").on("click", function (event) {
      event.preventDefault();
      console.log("clicked new tain button")

    trainName = $("#tname1").val().trim();
    destiny= $("#destionation1").val().trim();
    firstTrain = $("#fttime1").val().trim();
    frequence = $("#freq1").val().trim();

    datebase.ref().push({
      trainName:trainName,
      destination:destiny,
      firstTrain:firstTrain,
      frequency: frequence,
    });

  });
  datebase.ref().on("child_added", function(childSnapshot) {

var nTrain = childSnapshot.val().trainName;
var nLocation = childSnapshot.val().destination;
var nFirstTrain = childSnapshot.val().firstTrain;
console.log(nFirstTrain);
var nFreq = childSnapshot.val().frequency;
console.log(nTrain);


var timeArr = nFirstTrain.split(":");

var convertStartTime = moment().hours(timeArr[0]).minutes(timeArr[1]);

var differenceTimes = moment().diff(convertStartTime, "minutes");
var timeRemainder =  differenceTimes % nFreq;
var timeMinutes = nFreq - timeRemainder;

var timeArrival = moment().add(timeMinutes, "m").format("hh:mm A");








var currentTime= moment ();
var diffTime = moment().diff(convertStartTime, "minutes");
var tRemainder = diffTime % nFreq;
var tMinutesTillTrain = nFreq-tRemainder;
var nXtrain = moment().add(tMinutesTillTrain, "minutes");
var trainComes = moment (nTrain).format("HH:mm");

$("#trainDisplay").append(
'<tr><td>' + nTrain + 
'</td><td>' + nLocation +
'</td><td>' + nFreq +
'</td><td>' + timeArrival +
'</td><td>' + timeMinutes + '</td></tr>');


    })
    })