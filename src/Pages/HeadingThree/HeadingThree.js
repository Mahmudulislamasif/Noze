import React from 'react';

const HeadingThree = () => {
    return (
        <div>
            <div class="hero min-h-screen text-left">
            <div class="hero-content flex-col lg:flex-row">
            <video  autoplay="autoplay" muted loop playsInline src="https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout1.mp4" class="w-1/2" typeof="video/m_about1.mp4"></video>
                <div className="w-1/2">
                <h1 class="text-5xl font-bold">Сonquer the Virus</h1>
                <p class="py-6 text-justify">Noze tracks the airborne markers (VOCs) associated with the Coronavirus family. Our AI uses that information to deliver a real-time risk index that will not only tell you if your space is prone to spreading the virus, but whether there’s a chance the virus is actually in the air.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeadingThree;