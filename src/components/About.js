import { useContext } from "react"
import ProfileClass from "./ProfileClass"
import ThemeContext from "../utils/ThemeContext"

const About = () => {
    const{mode} =  useContext(ThemeContext)
    return(
        <div className={`${mode ? "bg-[#040404] text-white": "bg-[rgb(255,255,255)] text-black"}`}>
            <h1>This is About us page</h1>
            <ProfileClass name="Chandra sekhar" role="Software Engineer" location="Vizag" />
        </div>
    )
}

export default About