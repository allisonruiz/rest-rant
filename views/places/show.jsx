const React = require('react')
const Def = require('../default')

function show({place, id}) {
    console.log(id)
    return(
        <Def>
            <main>
                <h1>{place.name}</h1>
                <div>
                <p className="text-center">
		      {place.cuisines}
		    </p>
		    <img src={place.pic} alt={place.name} />
		    <p className="text-center">
		      Located in {place.city}, {place.state}
		    </p>
                </div>
                <a href={`/places/${id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method='POST' action={`/places/${id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show