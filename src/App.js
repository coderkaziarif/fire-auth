import './App.css';
// import {handleSignIn} from './firebase.config';
import  firebaseConfig  from './firebase.config';
import  {initializeApp}  from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth";
import { useState } from 'react';

const app = initializeApp(firebaseConfig);

function App() {
  const auth = getAuth(app);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    profilePic: "",
  })
  const provider = new GoogleAuthProvider();
  

  const handleSignIn = () => {
     signInWithPopup (auth, provider)
    .then ((result) => {
       // The signed-in user info.
      let {displayName, email, photoURL} = result.user;
      const signedInUser = {
        isSignedIn : true,
        name : displayName,
        email: email,
        profilePic: photoURL
      }
      setUser(signedInUser);
      console.log("Sign In", displayName, email, photoURL);
           
      //-------To set item in Local storage--------- 
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const profilePic = result.user.photoURL;
      // localStorage.setItem("name",name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("profilePic", profilePic);    
    }) 
    .catch ((error) => {
      console.log(error);
    })
  };

    // ------Sign Out------
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      const signedOutUser = {
        isSignedIn : false,
        name : "",
        email : "",
        profilePic: ""
      }
      setUser (signedOutUser);
      console.log(" Sign-out successfully");
    }).catch((error) => {
      console.log("An error happened during sign out.");
    });
  }

 

  return (
    <div>
      { user.isSignedIn ? <button onClick={handleSignOut}>
        Sign Out</button> : 
        <button onClick={handleSignIn}>Sign in</button>
      }

      {
        user.isSignedIn && <div>
          <h1>Welcome, Mr.{user.name} </h1>
          <p>Your email: {user.email}</p>
          <img src={user.profilePic} alt="" />
        </div>
      }

      {/* To Get item from local storage */}
    {/* // <h1>name : {localStorage.getItem("name")}</h1>
    //   <h1>email: {localStorage.getItem("email")}</h1>
    //   <img src={localStorage.getItem("profilePic")} alt=""/> */}
 
    </div>
  );
}

export default App;
