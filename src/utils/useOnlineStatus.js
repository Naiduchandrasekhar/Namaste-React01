import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  const[onlineStatus, setOnlineStatus] = useState(true)

  useEffect(() => {
    window.addEventListener("offline", function(){
        setOnlineStatus(false)
      })
    
      window.addEventListener("online", function(){
        setOnlineStatus(true)
      })
  }, [])


  return onlineStatus

}

export default useOnlineStatus