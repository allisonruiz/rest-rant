const React = require('react')
const Def = require('../default')

function show(data) {
    console.log(data.id)
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div>
                <p className="text-center">
		      {data.place.cuisines}
		    </p>
		    <img src={data.place.pic} alt={data.place.name} />
		    <p className="text-center">
		      Located in {data.place.city}, {data.place.state}
		    </p>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show