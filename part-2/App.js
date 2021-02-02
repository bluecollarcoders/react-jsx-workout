const App = () => {
    return (
        <div>
            <Tweet 
            username="Coder2021" 
            user="Caleb" 
            date="Feb 2, 2021" 
            message="Its a snowy Day"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))