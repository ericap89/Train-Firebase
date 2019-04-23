var config = {
    apiKey: "AIzaSyDsqVo04GsGITSRVtAmmSr3-urJVy2Rn7k",
    authDomain: "train-activity-6fd74.firebaseapp.com",
    databaseURL: "https://train-activity-6fd74.firebaseio.com",
    projectId: "train-activity-6fd74",
    storageBucket: "train-activity-6fd74.appspot.com",
    messagingSenderId: "95608180388"
  };
  firebase.initializeApp(config);

var trainRef = firebase.database().ref('trains');


// Event Listener form submit button 
document.getElementById('trainForm').addEventListener('submit' , submitForm);
//Submit form 
function submitForm(e) {
    e.preventDefault();

    //console.log(working);
    //Get Values
    var name = getInputVal('name');
    var train = getInputVal('train');
    var destination = getInputVal('destination');
    var frequency = getInputVal('frequency');

    savetrainRef(name, train, destination, frequency);


    // clear fields after submission
    document.getElementById('trainForm').reset();
}


// function to get form values 
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save data to firebase 

function savetrainRef(name, train, destination, frequency){
    var newTrainRef = trainRef.push();
    newTrainRef.set({
        name:name,
        train:train,
        destination:destination,
        frequency:frequency
    });
}

trainRef.collection('trains').onSnapshot(snap => {
    document.querySelector(`.schedule`).innerHTML = `
    <tr id="scheduleTable>
    <th>Train Name</th>
    <th>Destination</th>
    <th>Frequency</th>
    <th>Next Arrival</th>
    <th>Minutes Away</th>
    </tr>
    `
})
