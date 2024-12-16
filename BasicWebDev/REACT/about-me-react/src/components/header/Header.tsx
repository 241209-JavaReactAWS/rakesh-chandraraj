// This is our very first React component 

import React from "react";
import "./Header.css";

// We're going to start by making a class component (a bit outdated, with functional components beind used more)

// Class components are regular TS classes, BUT they contain a render method that returns TSX (or JSX) to be
// shown on the screen 
// NOTE: Components always begin with a capital letter, PascalCase 

class Header extends React.Component {
    // This is a normal TS class 
    // The most important thing in this class is the render method 

    render() {
        return (
            <header>
                <h1>Rakesh C</h1>
            </header>
        )
    }

    sampleFunction() {
        console.log("Test");
        // Will not run since only the render function is ran 
    }
}

export default Header;
// This allows this class to be a usable Component in other places so we can leverage the header 