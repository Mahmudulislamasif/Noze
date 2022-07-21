import React from 'react';
import Collapse from '../Collapse/Collapse';
import Contact from '../Contact/Contact';
import CrouselContent from '../Crousel/CrouselContent';
import Header from '../Header/Header';
import HeaderFive from '../HeaderFive/HeaderFive';
import HeaderFour from '../HeaderFour/HeaderFour';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import HeadingThree from '../HeadingThree/HeadingThree';
import SectionSeven from '../SectionSeven/SectionSeven';
import SectionSix from '../SectionSix/SectionSix';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderTwo></HeaderTwo>
            <HeadingThree></HeadingThree>
            <HeaderFour></HeaderFour>
            <CrouselContent></CrouselContent>
            <HeaderFive></HeaderFive>
            <SectionSix></SectionSix>
            <SectionSeven></SectionSeven>
            <Collapse></Collapse>
            <Contact></Contact>
        </div>
    );
};

export default Home;