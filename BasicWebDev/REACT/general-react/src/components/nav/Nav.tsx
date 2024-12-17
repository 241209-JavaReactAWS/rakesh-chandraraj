import { Link } from "react-router-dom"
import "./Nav.css"

/* 
This component is going to be in charge of determining what the path of the web pages is. 
This will be leveraged to dynamically render what content appears on the screen. 

We need the React router dom to control the DOM based on the router. 
React is a lightweight library so you need to pull in different solutions if you want them. 

HREF through an a tag will reload the entire page. 
- This is a problem since we lose all the benefits of having a single page application. 
- Instead, we're going to use the Link tag (and use to instead of href). 
*/ 

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Counter Component</Link></li> 
            <li><Link to="/counter-container">Counter Container</Link></li> 
            <li><Link to="/props">Prop Drilling</Link></li> 
            <li><Link to="/context">useContext Hook</Link></li> 
            <li><Link to="/events">Events</Link></li> 
            <li><Link to="/axios-fetch">Axios and Fetch Request</Link></li> 
            <li><a href="https://google.com">Google</a></li> 
            {/* Above one can be a since it's an external link, and not to another page */}
        </ul>
    </nav>
  )
}

export default Nav
