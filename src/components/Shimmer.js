import { useContext } from "react"
import ThemeContext from "../utils/ThemeContext"

const Shimmer = () => {
  const {mode} = useContext(ThemeContext)

  const displayDivs = () =>{
   let divs = []
   for(let i=0; i<20; i++){
    divs.push(<div key={i} className={`h-[300] w-[200] m-[10] ${mode ? "bg-[#444040]": "bg-[#f0f0f0]"} `}>
    </div>)
   }
   return divs
  }

  return (
    <div className={`${mode ? "bg-black min-h-[100vh] text-white p-4" : "bg-white min-h-[100vh] text-black p-4"} flex flex-wrap px-[60] py-[20]`} >
      {displayDivs()}
    </div>
  )
}

export default Shimmer