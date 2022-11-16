import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

function StartFireBase(){
  const firebaseConfig = {
    apiKey: "AIzaSyCB4zhtB-FyWz93Tt2v5Qcd0FngehGVloc",
    authDomain: "se-project69420.firebaseapp.com",
    databaseURL: "https://se-project69420-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "se-project69420",
    storageBucket: "se-project69420.appspot.com",
    messagingSenderId: "831934233995",
    appId: "1:831934233995:web:9fe376587b8fabeae3c38e",
    measurementId: "G-4KG0JKTKRY"
  };

  const app = initializeApp(firebaseConfig)
  return getDatabase(app)
}

export default StartFireBase;