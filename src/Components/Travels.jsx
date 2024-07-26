import Cards from "./Cards";

const Travels =({tours,Remove})=>{
    return(
        <>
        <h1 className="text-center py-3 bg-primary fw-bolder">Welcome to our Travel Agency</h1>
        <section className="w-100 bg-light d-flex flex-row justify-content-evenly flex-wrap">
        <div className="main">
        {
            tours.map((items)=>{
                return(
                    <Cards key={items.id} {...items} Remove={Remove} />
                )
            })
        }
        </div>
          
        </section>

        </>
    )
}
export default Travels;