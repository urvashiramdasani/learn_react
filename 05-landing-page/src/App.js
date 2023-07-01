import React from "react";

import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import MiddleSection from './components/Sections/MiddleSection';
import RightSection from './components/Sections/RightSection';
import LeftSection from './components/Sections/LeftSection';

const App = () => (
    <div>
        <Header />
        <Hero />
        <MiddleSection />
        <RightSection />
        <LeftSection />
    </div>
)

export default App;