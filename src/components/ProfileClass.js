import React from "react";
import { FaGithub } from "react-icons/fa";

class ProfileClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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


    render(){
        console.log("render constructor");
        const {name, role, location} = this.props

        const {avatar_url} = this.state.gitData
        return(
            <div className="pt-16 h-[100vh]  flex flex-col justify-center items-center gap-5 font-serif">
                <img src={avatar_url} className="h-[250px] rounded-full" alt="chandu" />
                <h2>Name: {name}</h2>
                <h2>Role: {role}</h2>
                <h2>Location:  {location}</h2>
                <h2>Working: WNS Global Services</h2>
                <a href="https://github.com/Naiduchandrasekhar" target="_blank" className="flex items-center hover:cursor-pointer" > <FaGithub /> <span className="ml-1">Github Profile</span> </a>
            </div>
        )
    }
}

export default ProfileClass