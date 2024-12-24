import React, { useState } from 'react'
// import CompB from './CompB'

function CompA(props) {
    const [name, setName] = useState('')

    const submit = (e)=>{
        e.preventDefault();
        console.log(name);
        
        props.getData(name)
    }

    return (
        <form onSubmit={submit}>

            <input  value={name} onChange={(e) => {setName(e.target.value)}} />
            <button>submit</button>


        </form>
    )
}

export default CompA