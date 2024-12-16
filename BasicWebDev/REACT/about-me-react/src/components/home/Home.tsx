import "./Home.css"

/*
This is our first functional component, and they're the new way to create react components 
Through the use of hooks, they can do all the same things that class components can do and what they return 
is the same as the render method from a class component 
*/

function Home() {
  // This return statement below is EXACTLY THE SAME as the render method in a class component 
  return (
    <div>
      <main>
        <h3>Introduction</h3>

        <figure>
            <img src="src/assets/download.jpeg" />
            <figcaption>Me</figcaption>
        </figure>

        <p>
            My name is Rakesh, and I am training to be a Java Full time developer. I
            know various skills like Java and Spring. In my free time, I like to
            work out and write fictional stories.
        </p>
      </main>
    </div>
  )
}

export default Home
