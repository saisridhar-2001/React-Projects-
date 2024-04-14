import React from 'react';
import "./Home.css"
import Footer from "../Footer/index";
const Home = () => {

    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];

    return (
        <div classname='About-container'>
            <nav className='nav-container'>
            <h1 className='nav-heading'>Home</h1>
            <img src="/images/Badal_logo.png"
            alt="Badal_logo" className="Badal-logo"/>
            </nav>
            <Footer/>
        </div>
    );
};

export default Home;



