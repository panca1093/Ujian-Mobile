import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAKO5X7Oa2UoQZcn2NPPRSUlYSYrFZjAmg",
  authDomain: "mobile-exam-ee700.firebaseapp.com",
  databaseURL: "https://mobile-exam-ee700.firebaseio.com",
  projectId: "mobile-exam-ee700",
  storageBucket: "mobile-exam-ee700.appspot.com",
  messagingSenderId: "419586881545",
  appId: "1:419586881545:web:0f8f025cd4c2d60d"
};
// Initialize Firebase

export const Fire = firebase.initializeApp(firebaseConfig);

// var firebaseConfig = {
//     apiKey: "AIzaSyBGIDx6Y4MRrg-g_7_7VTEXJ-mVvM8rgro",
//     authDomain: "jc8ntapnative.firebaseapp.com",
//     databaseURL: "https://jc8ntapnative.firebaseio.com",
//     projectId: "jc8ntapnative",
//     storageBucket: "jc8ntapnative.appspot.com",
//     messagingSenderId: "397247298348",
//     appId: "1:397247298348:web:c18577bdf14a434e"
//   };
// Initialize Firebase
// export const Fire = firebase.initializeApp(firebaseConfig);
