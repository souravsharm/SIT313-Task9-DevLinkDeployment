import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

 
const firebaseConfig = {
  apiKey: "[APIKEY]",
  authDomain: "devlink-project-react.firebaseapp.com",
  projectId: "devlink-project-react",
  storageBucket: "devlink-project-react.appspot.com",
  messagingSenderId: "[]",
  appId: "1:203181244396:web:bd23f39809dfc1abe38ac9",
  measurementId: "G-KH3NJF0ZL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db=getFirestore();

export const createUserDocFromAuth=async(userObj,additonalInformation={})=>{
    if(!userObj.email) return;
    const userDocRef=doc(db,'users',userObj.uid);
    const userSnapshot=await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const{name,email, password}=userObj;
        const createdAt=new Date();
    
        try{
            await setDoc(userDocRef,{
                name,email,password,createdAt,...additonalInformation
            })}catch(error){
        console.log(error);
    }
}       
    

}
