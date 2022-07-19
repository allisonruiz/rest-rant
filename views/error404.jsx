const React = require('react')
const Def = require('./default')

function error404 (){
return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oop, sorry, we can't find this page!</p>
            <img src="/images/rainkawaii.gif" alt="sanrio character in pink raincoat in rain" />
        </main>
    </Def>
    )
}

module.exports = error404