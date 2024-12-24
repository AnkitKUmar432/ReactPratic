import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/CartSlice';

function Product(props) {
    // console.log(props.price);
    const dispatch = useDispatch();
    const handlead = (props) => {
        dispatch(add(props))
    }

    return (
        <div>
            <div style={{ padding: '8px', width: '35%', display: 'flex', flexDirection: 'column', margin: '20px 20%', border: '2px dotted gray' }}>

                <div>{props.id}</div>
                <div>{props.productName}</div>
                <div>{props.price}</div>
                <div>{props.image}</div>
                <button onClick={() => handlead(props)}>Add to cart</button>

            </div>

        </div>

    )
}

export default Product