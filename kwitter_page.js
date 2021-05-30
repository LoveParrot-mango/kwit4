var firebaseConfig = {
    apiKey: "AIzaSyDv_SgDk6PGZflSi7Lt5w46_2OoDlBxGl4",
    authDomain: "kwitter-project-1ed3f.firebaseapp.com",
    databaseURL: "https://kwitter-project-1ed3f-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1ed3f",
    storageBucket: "kwitter-project-1ed3f.appspot.com",
    messagingSenderId: "933984423356",
    appId: "1:933984423356:web:c791a346db908ce1462fb9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push ({
              name:user_name,
              message:msg,
              like:0
        });
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  
  //End code
        } });  }); }
  getData();
  