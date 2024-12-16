import Fact from "../fact/Fact"
import "./TTssL.css"

/*
We haven't added any CSS files yet, but for this component, we're running into an issue with the word 'class'
So if we want to style, we need to use the className. 
*/

function TTaaL() {

    const facts = [
        {
            id: 1,
            fact: "I am physically unable to sleep in after 7 am",
            isTrue: true
        },
        {
            id: 2,
            fact: "My mom killed my fish",
            isTrue: true
        },
        {
            id: 3,
            fact: "I have a dog",
            isTrue: false
        }
    ]

  return (
    <main>
        <h3>Two Truths and a Lie</h3>

        <table>
            {/* GOAL: Turn these pieces below into their own component
            // <tr className="truth">
            //     <th>1st</th>
            //     <td>I am physically unable to sleep in after 7 am</td>
            // </tr>
            // <tr className="false">
            //     <th>2nd</th>
            //     <td>My mom killed my fish</td>
            // </tr>
            // <tr className="truth">
            //     <th>3rd</th>
            //     <td>I have a dog</td>
            // </tr> */}

            {/* <Fact id={facts[0].id} fact={facts[0].fact} isTrue={facts[0].isTrue}></Fact>
            <Fact id={facts[1].id} fact={facts[1].fact} isTrue={facts[1].isTrue}></Fact>
            <Fact id={facts[2].id} fact={facts[2].fact} isTrue={facts[2].isTrue}></Fact> */}

            {
                facts.map( (fact) => {
                    return <Fact
                        id={fact.id}
                        fact={fact.fact} 
                        isTrue={fact.isTrue}
                    ></Fact>
                })
            }
        </table>

    </main>
  )
}

export default TTaaL
