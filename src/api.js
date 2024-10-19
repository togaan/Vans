
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVQdMRJMvkr1OhRQt_63V8vj2sstr_1hg",
  authDomain: "vanlife-ccba3.firebaseapp.com",
  projectId: "vanlife-ccba3",
  storageBucket: "vanlife-ccba3.appspot.com",
  messagingSenderId: "673995429292",
  appId: "1:673995429292:web:3926cc7aa7a8868e8ed609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export { db, auth }

//get vans from database 
export const getVans = async () => {
  const vanSnapshot = await getDocs(collection(db, 'vans'));
  const vans = vanSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
  return vans;
};

// get users from database
export  const loginUser = async () => {
  const userSnapshot = await getDocs(collection(db, 'users'));
  const users = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  
  return users
}
  
// export async function getVans() {
//     const response = await fetch(`${process.env.PUBLIC_URL}/vans.json`); 
//     if (!response.ok) {
//       throw new Response('Failed to fetch data', { status: response.status, message: "Failed to fetch vans",  });
//     }
//     const data1 = await response.json();
//     return data1.vans;
//   }