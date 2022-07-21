import React from 'react';

const Specs = () => {
    return (
        <div>
            <img className="w-full" src="https://getnoze.com/wp-content/uploads/2021/07/Outline-768x561.png" alt="" />
            <div class="hero bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <h1 class="text-5xl font-bold">Specifications</h1>
                <div className="w-3/4">
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>What's in the box?</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">
                                NOZE Device<br></br>
                                Power Adaptor<br></br>
                                Cable<br></br>
                                Quick Start Guide</p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>Dimensions & Weight</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]"> Width: 86mm<br></br>
                                                                Depth: 86mm<br></br>
                                                                Height: 167 mm<br></br>
                                                                Weight: 650g</p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>Power</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">
                        Input: 100–240 V AC 0.2 A <br></br>
                        DC Output: 5 V DC 3.0 A
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>Connectivity</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">
                       802.11 a/b/g/n (2.4 GHz) Wi-Fi<br></br>
                       Bluetooth Low Energy
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>Detection Ranges</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">
                    Mould Index: 1 to 10<br></br>
                    Virus Index: 1 to 10<br></br>
                    Carbon Dioxide: 0.1 to 2000 ppm<br></br>
                    Ammonia: 0.1 to 50 ppm<br></br>
                    Formaldehyde: 0.1 to 2 ppm<br></br>
                    Butanal: 0.1 to 50 ppm<br></br>
                    Nitrogen Dioxide: 0.1 to 5 ppm<br></br>
                    Ethanol: 1000 ppm to 3000 ppm<br></br>
                    Tobacco Odour: Present/Absent<br></br>
                    PM 2.5: 0 to 1000 μg/m3<br></br>
                    PM 10: 0 to 1000 μg/m3<br></br>
                    Humidity: 10% to 80%<br></br>
                    </p>
                    </div>
                </div>
                <div class="collapse border border-[#210545] bg-base-100 rounded-box w-3/4 mx-auto mb-3">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-xl font-medium text-[#210545] text-left flex justify-between">
                    <p>Warranty</p>
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
                    <p>Warranty</p>
                    <p>+</p>
                    </div>
                    <div class="collapse-content"> 
                    <p className="text-justify text-[#6b5a78]">One-year limited warranty
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Specs;