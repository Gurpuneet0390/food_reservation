import { data } from "../restApi.json";


const Team = () => {
  return (
    <section className="team" id="team">
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">OUR TEAM</h1>
                <p>
                Our team is built on collaboration, creativity, and a shared commitment to achieving our goals.
                Each of you brings something unique to the table, and we believe that by working together, we can accomplish great things.
                </p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                        <div className="card" key={element.id}>
                        <img src={element.image} alt={element.name}/>
                        <h3>{element.name}</h3>
                        <p>{element.designation}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Team