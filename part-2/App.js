const App = () => {
    return (
        <div>
            <Tweet 
            username="Coder2021" 
            user="Caleb" 
            date={new Date().toDateString()} 
            message="Its a snowy Day"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))