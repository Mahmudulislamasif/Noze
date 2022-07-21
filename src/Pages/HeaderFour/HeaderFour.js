import React from 'react';

const HeaderFour = () => {
    return (
        <div>
           <div class="hero min-h-screen text-left">
            <div class="hero-content flex-col lg:flex-row-reverse">
            <video  autoplay="autoplay" muted loop playsInline src="https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout2.mp4" class="w-1/2" typeof="video/m_about1.mp4"></video>
                <div>
                <h1 class="text-5xl font-bold">Break the Mold</h1>
                <p class="py-6 text-justify">NOZE monitors the air for spores and other markers associated with the most common types of indoor mold. Our mold index will tell you if it's likely that there’s mold around and whether your space is in danger of being a breeding ground.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeaderFour;