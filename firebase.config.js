import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDH8zunH3QhBJmfTe8xBZWuemkihOXiJfk",
  authDomain: "robonurse-18190.firebaseapp.com",
  databaseURL: "https://robonurse-18190-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "robonurse-18190",
  storageBucket: "robonurse-18190.appspot.com",
  messagingSenderId: "449413050296",
  appId: "1:449413050296:web:8f2607f69f03f25cfba94d"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }
