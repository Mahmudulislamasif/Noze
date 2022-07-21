import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import matters1 from '../../Assets/matters1.png'
import matters2 from '../../Assets/matters2.png'
import matters3 from '../../Assets/matters3.png'
import matters4 from '../../Assets/matters4.png'
import matters5 from '../../Assets/matters6.png'
import matters6 from '../../Assets/matters7.png'
import matters7 from '../../Assets/matters8.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CrouselContent = () => {
    return (
        <div class="hero min-h-screen text-left text-2xl">
        <div class="hero-content flex-col lg:flex-row">
        <div class="flex flex-col justify-center w-1/4 gap-2">
            <a href="#item1" class=" text-[#2C0A59]">Carbon Dioxide</a> 
            <a href="#item2" class="text-[#2C0A59]">Ammonia</a> 
            <a href="#item3" class="text-[#2C0A59]">Formaldehyde</a> 
            <a href="#item4" class="text-[#2C0A59]">Nitrogen Dioxide</a>
            <a href="#item5" class="text-[#2C0A59]">Butanal</a>
            <a href="#item6" class="text-[#2C0A59]">Particulate Matter</a>
            <a href="#item7" class="text-[#2C0A59]">Ethanol</a>
          </div>
        <div class="carousel">
            <div id="item1" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters1}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-16 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Clouds our thinking, lowers productivity & affects our sleep.</p>
              <p className="text-sm lg:text-3xl">Exhaled breath from people & pets and open flames <br></br> are the most common sources.</p>
            </div>
              </div>
            </div> 
            <div id="item2" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters2}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-16 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Irritates our noses and throats, amplifies allergies & triggers asthma.</p>
              <p className="text-sm lg:text-3xl">Cleaning products are the most<br></br> common sources.</p>
            </div>
              </div>
            </div> 
            <div id="item3" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters3}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-8 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Irritates the eyes, nose, throat <br></br> & skin - and is often linked to cancer.</p>
              <p className="text-sm lg:text-3xl">Pressed wood products like easy-to-assemble furniture are the most common sources.</p>
            </div>
              </div>
            </div> 
            <div id="item4" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters4}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-8 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Causes permanent damage <br></br> to our respiratory system.</p>
              <p className="text-sm lg:text-3xl">Wood fireplaces & fuel powered appliances are the most common sources.</p>
            </div>
              </div>
            </div>
            <div id="item5" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters5}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-8 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Irritates our lungs causing coughing and shortness of breath.</p>
              <p className="text-sm lg:text-3xl">Garbage, scented candles & cigarette smoke are the most common sources.</p>
            </div>
              </div>
            </div>
            <div id="item6" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters6}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-8 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Irritates our lungs, aggravates allergies & can increase virus spread.</p>
              <p className="text-sm lg:text-3xl">Cooking, cleaning & particles coming from the outdoors are the most common sources.</p>
            </div>
              </div>
            </div>
            <div id="item7" class="carousel-item w-full">
              <div className="carousel-item relative float-left w-full">
              <img
              src={matters7}
              class="block w-full rounded-full"
              alt="Mountaintop"
            />
            <div class="carousel-caption  md:block top-8 left-10 absolute lg:top-32 lg:left-32 text-white ">
              <p className="text-lg lg:text-5xl mb-2 lg:mb-4">Causes headaches, nausea & irritates our lungs.</p>
              <p className="text-sm lg:text-3xl">Cleaning detergents & hand sanitizers are the most common sources.</p>
            </div>
              </div>
            </div>
        </div> 
         
          <div>
         
          </div>
        </div>
      </div>
    );
};












export default CrouselContent;