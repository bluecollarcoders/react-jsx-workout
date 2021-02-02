const Tweet = (props) => {
    return (
        <div>

            <span>Username: {props.username} </span>
            <span>User: {props.user} </span>
            <span>Date: {props.date} </span>
            <p>{props.message}</p>


        </div>
            
        
    )
}