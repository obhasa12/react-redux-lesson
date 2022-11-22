const Ninja = ({ninjas, deleteNinja}) => {



    const spillNinja = ninjas.map(ninja => {
        return(
            <div className="ninja-container" key={ninja.id}>
                <h2>Hallo, I am {ninja.name}</h2>
                <p>I am {ninja.age} and my belt is {ninja.belt}</p>
                <button onClick={() => deleteNinja(ninja.id)}>Delete ninja</button>
            </div>
        )
    })

    return ( 
        <div className="ninja">
            {spillNinja}
        </div>
     );
}
 
export default Ninja;