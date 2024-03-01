import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:100,
            gitData: {}
        }
        console.log("Parent constructor");
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Naiduchandrasekhar")
        const json = await data.json()
        console.log("parent componentDidMount")
        this.setState({
            gitData: {...this.state.gitData,...json}
        })
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
        console.log("componentWillUnmount");
        
    }
    

    handleStart(){
        this.timerId = setInterval(() => {
            console.log("renderinggggggggggggg");
            this.setState((prevState) => ({
                count: prevState.count- 1 
               }))
        }, 1000)
        document.querySelector(".startBTN").setAttribute("disabled", true)
    }


    handleStop(){
        document.querySelector(".startBTN").removeAttribute("disabled")
        clearInterval(this.timerId)
    }

    render(){
        if(this.state.count === 0){
            clearInterval(this.timerId)
            document.querySelector(".startBTN").removeAttribute("disabled")
        }
        console.log("render constructor");
        const {name, role, location} = this.props

        const {avatar_url} = this.state.gitData
        return(
            <div>
                <img src={avatar_url} alt="chandu" />
                <h2>Name: {name}</h2>
                <h2>Role: {role}</h2>
                <h2>Location:  {location}</h2>
                <h2>Count: {this.state.count}</h2>
                <button className="startBTN" onClick={() =>this.handleStart()}>Start</button>
                <button onClick={() =>this.handleStop()}>Stop</button>
            </div>
        )
    }
}

export default ProfileClass