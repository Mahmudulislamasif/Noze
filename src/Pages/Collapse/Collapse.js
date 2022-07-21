import React from 'react';

const Collapse = () => {
    return (
        <div id="collapse1">
                <h1 className="text-4xl my-2" data-aos="fade-up">FAQs</h1>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>How is NOZE different from other air quality monitors?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">The technology behind NOZE is based on a digital nose sensor (also known as an e-nose). With this sensor, NOZE can precisely detect a wide range of pollutants and chemicals. In contrast, almost all other air quality monitors on the market today use a bundle of off-the-shelf sensors that are limited in what they can detect and can vary widely in quality, accuracy and reliability.</p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>What is a digital nose?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">A digital nose is a breakthrough technology that digitizes the sense of smell. It’s similar to how the camera digitized the sense of sight and the microphone digitized the sense of hearing.</p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>What is the Virus Risk Index?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">The Virus Risk Index is an AI-powered tool built into NOZE to help make indoor spaces safer places to live, work, and visit by monitoring the risk of virus transmission (tracking how conducive the air is to spreading the virus) and the risk of virus presence (tracking the likelihood that the virus is in the air).
                    <span className="block mt-3">Note: The Virus Risk Index is not intended to be an alternative to precautionary measures or laboratory testing.</span>
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>How does the Virus Risk Index work?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">The Virus Risk Index is a 10 point scale where values between 1 and 8 indicate an increasing risk of virus transmission, while values of 9 and 10 indicate a likelihood that the virus pathogen is present. To calculate this score, our AI analyzes five things: Airborne Volatiles related to the Coronavirus and Influenza, Particulate Matter, Temperature, Humidity and Carbon Dioxide.
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>What space can it cover?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">The molecules in every gas and odour have different properties which impact how far they can travel and how fast they can be detected. A good rule of thumb for a typical indoor space is that NOZE can cover an area of up to 800 square feet (80 square meters) without barriers like walls or doors.
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>How many NOZE devices do I need?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">If you want to monitor different rooms at the same time, we suggest that you place one NOZE in each room, depending on the layout. If you only have one NOZE then you should monitor the room where you spend most of your time or are the most concerned about.
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>What is the Warranty on NOZE?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">NOZE comes with a one-year limited warranty.
                    </p>
                    </div>
                </div>
                
        </div>
    );
};

export default Collapse;