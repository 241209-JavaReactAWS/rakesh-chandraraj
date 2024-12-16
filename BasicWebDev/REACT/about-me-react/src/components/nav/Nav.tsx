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
            <li><Link to="/">About Me</Link></li> 
            <li><Link to="/ttaal">TTaaL</Link></li> 
            <li><a href="https://google.com">Google</a></li> 
            {/* Last one can be a since it's an external link, and not to another page */}
        </ul>
    </nav>
  )
}

export default Nav
