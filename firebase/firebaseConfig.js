import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKx7_I3P0CHoTI0gaX4p9EM-ZXQ2_WiVE",
  authDomain: "expensetracker-ed080.firebaseapp.com",
  projectId: "expensetracker-ed080",
  storageBucket: "expensetracker-ed080.firebasestorage.app",
  messagingSenderId: "244573875768",
  appId: "1:244573875768:web:98f795ae0eca21d85dc0cd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);