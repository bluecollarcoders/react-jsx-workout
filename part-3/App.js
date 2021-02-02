const App = () => {
    return (
        <div>
            <Person 
            name="Teddy" 
            age={21}
            hobbies="Hobbies List"
            items={["Playing Guitar", "Making Beats", "Making Hits"]}/>
            <Person 
            name="Eli" 
            age={17}
            hobbies="Hobbies List"
            items={["coding", "loving my mom", "star wars"]}/>
            <Person 
            name="Pearl" 
            age={12}
            hobbies="Hobbies List"
            items={["Getting tummy rub", "sitting on the couch", "barking at strangers"]}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))