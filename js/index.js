import { initializeApp } from "firebase/app";
  import {getDatabase , ref ,set} from "firebase/database";
  const firebaseConfig = {
    apiKey: "AIzaSyAOEQ3JGfhv4sfUNmWLYoWlCZYPl0oxT_o",
    authDomain: "crm-system-ff852.firebaseapp.com",
    databaseURL: "https://crm-system-ff852-default-rtdb.firebaseio.com",
    projectId: "crm-system-ff852",
    storageBucket: "crm-system-ff852.appspot.com",
    messagingSenderId: "382496614487",
    appId: "1:382496614487:web:5656341ec4788e653d5b12"
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase();

  const reference = ref(db , 'users/' +userId);



  firebase.initializeApp(firebaseConfig);

  var submitformDB = firebase.database().ref("submitform");


  document.getElementById(submitform).addEventListener("submit", myform);

  function myform(e){
    e.preventDefault();
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    saveMessages(name, emailid);
  }

  const saveMessages = (name , emailid) => {
var newsubmitform = submitformDB.push();

newsubmitform.set({
    name:name,
    emailid: emailid
})
  }

  const getElementVal = (id) =>{
return document.getElementById(id).value;



  };