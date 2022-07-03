// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyADgcLG4wWycmr2vdjNZ-5zowsiGcDV__8",
//   authDomain: "ema-john-simple-2ad4e.firebaseapp.com",
//   projectId: "ema-john-simple-2ad4e",
//   storageBucket: "ema-john-simple-2ad4e.appspot.com",
//   messagingSenderId: "31537940470",
//   appId: "1:31537940470:web:dccadca7a0cc175ecbe9d7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const handleSignIn = () => {
//   signInWithPopup(auth, provider)
//   .then((result) => {
//   console.log(result);
//     // The signed-in user info.
//     const name = result.user.displayName;
//     const email = result.user.email;
//     const profilePic = result.user.photoURL;

//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//     localStorage.setItem("profilePic", profilePic);
//     // ...
//   }).catch((error) => {
//    console.log(error);
//   });

// }

// Jhankar Style...


const firebaseConfig = {
  apiKey: "AIzaSyADgcLG4wWycmr2vdjNZ-5zowsiGcDV__8",
  authDomain: "ema-john-simple-2ad4e.firebaseapp.com",
  projectId: "ema-john-simple-2ad4e",
  storageBucket: "ema-john-simple-2ad4e.appspot.com",
  messagingSenderId: "31537940470",
  appId: "1:31537940470:web:dccadca7a0cc175ecbe9d7"
};

export default firebaseConfig;
