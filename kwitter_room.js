
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
   user_name = localStorage.getItem("user_name")
   document.getElementById("user_name").innerHTML = "Welcome" + user_name

   function addRoom() {
     room_name=document.getElementById("room_name").value;
     
     firebase.database().ref("/").child(room_name).update({
       purposer : "room name"
     })

     localStorage.setItem("room_name",room_name )
     window.location="kwitter_page.html"
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room-name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>" 
      document.getElementById("output").innerHTML+=row;
       
      
      //End code
      });});}
getData();

function redirectToRoomname(name) {
  console.log(name);
  localStorage.setItem("room_name",name)
  window.location="kwitter_page.html"
}

function logout() {
  localStorage.removeItem("room_name")
  localStorage.removeItem("user_name")
  window.location="index.html"
}