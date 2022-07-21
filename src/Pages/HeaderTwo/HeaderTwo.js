import React from 'react';
import video1 from '../../Assets/m_about1.mp4'
const HeaderTwo = () => {
    return (
        <div>
          <div class="hero text-left">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <video  autoplay="autoplay" muted loop playsInline src={video1} class="w-1/2" typeof="video/m_about1.mp4"></video>
            <div className="w-1/2">
              <h1 class="text-5xl font-bold">Anything but <br></br>ordinary.</h1>
              <p class="py-6">Some would say it's out of this world. That’s not far off.</p>
              <div className=" border-l-4 border-purple-500 mb-3 ">
                <h1 className="text-2xl text-[#210545] font-bold pl-3">NASA INSPIRED</h1>
                <p className="text-[#6B5A78] pl-3 pt-6 text-justify">NOZE is powered a by single sensor build on years of NASA innovation. Our technology raises the bar of new heights
                <span
                className="tooltip tooltip-right rounded-full py-2 px-4 mx-3 bg-neutral tooltip-neutral  text-white" data-tip="To the exosphere if you want us to get specific because our technology was sent to the international space station.Check it out here"
                >i</span>
                   by using the digital sense of smell to keep track of the air your are breathing.</p>
              </div>
              <div className=" border-l-4 border-purple-500">
                <h1 className="text-2xl text-[#210545] font-bold pl-3">ENGINEERED TO THINK</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default HeaderTwo;