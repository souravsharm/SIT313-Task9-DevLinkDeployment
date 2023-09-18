import React from 'react'
import './NewsLetter.css'
import { useState } from 'react'

const NewsLetter = () => {
    const [userEmail, setEmail] = useState('')

    const HandleSubscription = async () =>{
        
        const response = await fetch(
            'http://localhost:5000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: userEmail}),
            }
        );
        if (response.ok) {
            alert('Email sent to : ' + userEmail);
            
        } else {
            alert(response.status);
        }
        
    }
    return (
        <div>
         <div className="newsletter">
             <span className='text'> SIGN UP FOR DAILY INSIDER</span>
             <input className='email' placeholder='email@abc.com' type="email" value = {userEmail} onChange={(e) => setEmail(e.target.value)}
                 />
             <button className='button'  type="button" onClick={HandleSubscription}>Subscribe</button>
         </div>
        </div>
  )
}

export default NewsLetter
