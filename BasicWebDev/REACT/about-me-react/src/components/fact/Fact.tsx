/*
The idea here is that since all 3 of the facts contain similar formatting but just different 

To get the information INTO this component, I need to declare that this component takes in props 
Props 
- Properties passed from a parent to a child component. The data flow is ONE WAY. 
- Props are usually used for initialization info. 
*/

interface FactProps {
    id: number, 
    fact: string,
    isTrue: boolean
}

function Fact(props: FactProps) {
  return (
    // Similar to template literals in plain JS, we can inject JS/TS directly by using {} 
    // Ternary operator is used for conditional rendering (in place of an if statement) 
    <tr className={props.isTrue ? 'truth' : 'lie'}>
        <th>{props.id}</th>
        <td>{props.fact}</td>
    </tr>
  )
}

export default Fact
