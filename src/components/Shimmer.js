const Shimmer = () => {

  const displayDivs = () =>{
   let divs = []

   for(let i=0; i<20; i++){
    divs.push(<div key={i} className="h-[300] w-[200] m-[10] bg-[#f0f0f0]">
    </div>)
   }
   return divs
  }

  return (
    <div className="flex flex-wrap px-[60] py-[20]">
      {displayDivs()}
    </div>
  )
}

export default Shimmer