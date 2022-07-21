import React from 'react';

const Contact = () => {
    const onSubmitBtn=(event)=>{
        event.preventDefault()
        const comment={
            name: event.target.name.value,
            email: event.target.email.value,
            country: event.target.country.value,
           }
           console.log(comment)
           

    }
    return (
        <div>
            <div className="my-8">
            <h1 className="text-2xl lg:text-5xl font-bold text-[#210545]">Stay connected with NOZE</h1>
            <p className="text-[#6b5a78] text-xl lg:text-2xl  my-3">NOZE is an AI powered air quality monitor that <br></br>works to keep you safe. Breathe easy.</p>
            <label for="my-modal-1" class="btn modal-button bg-[#654A9B] hover:bg-[#654A9B] text-white">Join the waitlist</label>
            </div>
            
        </div>
    );
};

export default Contact;