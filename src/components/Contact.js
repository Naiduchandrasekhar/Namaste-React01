import { useContext } from "react"
import ThemeContext from "../utils/ThemeContext"

const Contact = () => {
    const {mode} = useContext(ThemeContext)

    return(
        <div className={mode ? "bg-black min-h-[100vh] text-white" : "bg-white min-h-[100vh] text-black"}>
            <h1>This is contact us page</h1>
        </div>
    )
}

export default Contact