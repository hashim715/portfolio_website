import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Navbar/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Service from './Components/Services/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App
