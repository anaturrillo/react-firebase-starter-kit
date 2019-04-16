import app from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBLYikPJI6oH21f2sCngJS16mx9U7ktYgM",
  authDomain: "integration-test-cb29a.firebaseapp.com",
  databaseURL: "https://integration-test-cb29a.firebaseio.com",
  projectId: "integration-test-cb29a",
  storageBucket: "integration-test-cb29a.appspot.com",
  messagingSenderId: "151455373779"
};

class Firebase {
  constructor(){
    app.initializeApp(config);
    this.auth = app.auth()
  }

  createUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = (password) => {
    return this.auth.currentUser.updatePassword(password);
  };

  confirmEmail = () => this.auth.currentUser.sendEmailVerification()
}

export default Firebase;