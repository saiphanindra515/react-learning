
const Shimmer = () => {
   return(
    <>
    {
     Array(10).fill("").map(a =><div className="res-card" style={{height: "300px", backgroundColor: "lightgrey"}}></div>)
    } 
    </>
   )
}

export default Shimmer;