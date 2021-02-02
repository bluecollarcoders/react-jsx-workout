const Person = (props) => {
    let voteMessage = props.age >= 18 ? "Go Vote!" : "Come Back When Your Ready";
    
    return (

        <div>
            <p>Learn some information about this person.</p>
            <span>Name: {props.name.slice(0,6)}</span>
            <span>Age: {props.age}</span>
            <h1>{props.hobbies}</h1>
            <ul>
                {props.items.map(item => <li>{item}</li>)}
            </ul>
            <h3>{voteMessage}</h3>
        </div>

    )
}