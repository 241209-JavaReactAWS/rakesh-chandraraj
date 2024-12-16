import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import TTaaL from "./components/ttaal/TTaaL";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*
This is our first React component, mainly known as the App component. This page directly controls 
what we see rendered on the final screen. 

What is the file extention? 
Last week, we saw JS (.js) and TS (.ts), but now we have .tsx 
- .tsx and .jsx stand for typescript XML and javascript SML, what they do is allow you to combine 
  your HTML and JS/TS into one single page. 

What is React?
- React is a component-based UI LIBRARY used to create single-page applications (SPAs) that are production 
  quality and have a variety of features. 
- Why is React called a library? 
  - Because libraries are lighter weight and have limited functionality from the start, and you need to 
    add extra pieces as you need them. 
      - Libraries are used *at will*, so you can use them as much or as little as you want throughout 
        your project 
  - On the other hand, frameworks offer a large variety of features which can make them bloated but they'll
    contain everything you need from the get-go. 
      - Frameworks REQUIRE that you adhere to their standards to give you the functionality 
*/

function App() {
  // const [count, setCount] = useState(0)

  return (
    /*
  React requires that, for these JSX/TSX render methods, we return ONE parent element and then have 
  everything else be a child element of that. So you could wrap everything in a DIV if you wanted to,
  but this can create a lot of extra elements, so we'll use a React Fragment, which is like a blank 
  HTML page 

  React Components begin with a CAPITAL LETTER (HTML Elements are all lower case) 
  */
    <>
      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>

        {/* Before, we showed both. BUT NOW, we want to render them both and show/hide them based on the page
        path we're on */}
        <Routes>
          {/* The Routes plural tag will be used to define ALL of the routes/views we can see */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/ttaal" element={<TTaaL></TTaaL>}></Route>
        </Routes>
      </BrowserRouter>

      {/* When React recognizes that the path has changed, what is the process to rerender the screen? 
          React holds the Virtual DOM which is a lighter weight version of the actual DOM 

          Any operations to change the page will first happen to the virtual DOM, then React will 
          reconcile the virtual DOM and the regular DOM is the most efficient way possible

          So unchanged components DO NOT rerender
      */}

      <Footer></Footer>
    </>

    // <>
    // <div>
    //   <a href="https://vite.dev" target="_blank">
    //     <img src={viteLogo} className="logo" alt="Vite logo" />
    //   </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
