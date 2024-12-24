import React, { useEffect, useState } from 'react'
import './Person.css'
function Person() {
    const [data, setData] = useState({
        name: '',
        email: '',
        age: ''

    })
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        console.log('Register sucessfully');
        alert('Success')
        
    },[flag])
    function handleData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!data.name || !data.age || !data.email) {
            alert("All field is manditory")
        }
        else {
            setFlag(true)
        }
    }
    return (
        <div className='mainbox'>
            <span>Name: {data.name}</span><br />
            <span>Email: {data.email}</span><br />
            <span>Age: {data.age}</span>
            <form className='formbox' onSubmit={handleSubmit}>


                <input type='text' name='name' value={data.name} onChange={handleData} placeholder='Enter Name' />
                <input type='number' name='age' value={data.age} onChange={handleData} placeholder='Enter age' />
                <input type='email' name='email' value={data.email} onChange={handleData} placeholder='Enter email' />
                <input className='button' type='submit' />



            </form>
        </div>
    )
}

export default Person