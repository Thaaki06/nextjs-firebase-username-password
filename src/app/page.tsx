'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { db } from './firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  const handleButtonClick =async () => {
    try {
      const docRef = await addDoc(collection(db, "Jimbo"), {
        "name": "Thaakirah"
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
 

  return (
    <div className="p-8">
      <div className='text-white'>{session?.data?.user?.email}</div>



      <button onClick={handleButtonClick}>
      Update Votes
    </button>

      <button className='text-white' onClick={() => signOut()}>Logout</button>
    </div>
  )
}

Home.requireAuth = true