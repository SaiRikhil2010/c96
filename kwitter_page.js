//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDv58Lm2elRwOMXW-a7NBb_s7iaCq_XU30",
      authDomain: "kwittter-8a2fa.firebaseapp.com",
      databaseURL: "https://kwittter-8a2fa-default-rtdb.firebaseio.com",
      projectId: "kwittter-8a2fa",
      storageBucket: "kwittter-8a2fa.appspot.com",
      messagingSenderId: "223361029067",
      appId: "1:223361029067:web:2626c857a6b8e81b551c4e",
      measurementId: "G-WEXS06T2YE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

    function send() {
          msg=document.getElementById("msg").value 
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
    }

    function logout() {
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
