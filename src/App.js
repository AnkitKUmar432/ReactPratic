// import React, { useRef } from 'react';

// function App() {
//   const inputRef = useRef(null); // Step 1: Initialize the ref

//   const handleClick = () => {
//     // Step 3: Access the DOM element and perform actions like focusing the input
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <h1>useRef Example</h1>
//       {/* Step 2: Attach the ref to an input element */}
//       <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState } from 'react';
// // useRef = Dom ko Manipulate karta hai and focus of wapase(return karta hai) karta hai
// function App() {
//   const refElement = useRef('');
//   const [name, setName] = useState('ankit')
//   console.log(refElement);

//   function restFn() {
//     setName("")
//     refElement.current.focus();
//   }

//   return (
//     <div>
//       <input ref={refElement} type='text' value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={restFn}>Rest</button>

//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState } from 'react';
// import CompA from './CompA';
// // Props Drilling == is use to send data from parent to child component
// function App() {
//   const name = 'ankit'


//   return (
//     <div>
//     <CompA name={name}/>

//     </div>
//   );
// }

// export default App;
// import React, { createContext, useRef, useState } from 'react';
// import CompA from './CompA';
// // what is Context Api?
// // create, provider, consumer
// // How to use it
// // is context api also problematic?
// // first of all we create a createContext() and store in a variable after that wrapped Component with inside provider and export data
// // after that import data and consume data with the help of function
// const data = createContext()
// const data1 = createContext()
// function App() {
//   const name = 'ankit'
//   const age = 1


//   return (
//     <>
//       <data.Provider value={name}>
//         <data1.Provider value={age}>

//           <CompA />
//         </data1.Provider>


//       </data.Provider>


//     </>
//   );
// }

// export default App;
// export { data, data1 };

// import React, { useState } from 'react'
// // import styles from './myStyle.module.css'
// import CompA from './CompA';
// function App() {
//   function getData (data){
//     console.log('data',data);

//   }
//   return (
//     <div>

//       <CompA getData={getData}/>


//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import From from './Form1'
// import Person from './component/Person'

// function App() {
// const [items, setItems] = useState([]);
// function addItems (){
//   setItems([...items,{
//     id:items.length,
//     value:Math.floor(Math.random() *1000)
//   }])
// }

//   // const a  = ['crow', 'cat', 'dog','wolf']
//   // const [data, setData] = useState({ firstName: 'ankit', age: '38' })

//   // function detail() {
//   //   setData({ ...data, firstName: 'sonu' })
//   // }
//   return (
//     <div>
//       <ol>
//         {items.map(item=>(
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ol>
//       <button onClick={addItems}>Click Me</button>
//       {/* <span>my Name is: {data.firstName}, Age is: {data.age} year</span>
//       <button onClick={detail}>click</button> */}


//       {/* <From/> */}
//       {/* <Person/> */}
//       {/* {
//         a.map((data, index)=>{
//           return(
//             <h1 key={index}>{data}</h1>

//           )
//         })

//       } */}

//       <h1>HELLOW</h1>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Counter from './Component1/Counter'
// import { useDispatch } from 'react-redux'

// function App() {
//   const dispatch = useDispatch();
//   function IncFn(e) {
//     dispatch({ type: 'INC' })
//   }
//   function DecFn(e) {
//     dispatch({ type: 'DEC' })
//   }
//   return (
//     <div>
//       <button onClick={IncFn}>Increment</button>
//       <Counter />
//       <button onClick={DecFn}>Decrement</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import product from './product.json'
import Cart from './Component2/Cart'
import Product from './Component2/Product'
function App() {
  return (
    <div>
      <Cart/>
      {/* <span>h</span> */}
      {
        product.map((product, index) =>(
          <Product {...product} />

        ))
      }
    </div>
  )
}

export default App