import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/CartSlice';

function Cart() {
  const cartShow = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  // console.log(cartShow[0].id);
  let total = 0;
  if (cartShow) {
    total = cartShow.reduce((a, b) => a + b.price, 0)
  }
  const removeHandle = (d) => {
    console.log('click');

    dispatch(remove(d))
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ fontWeight: "bolder" }}>
        cart:({cartShow.length})
        <h1>Total: ({total})</h1>
      </div>
      <div>
        {
          cartShow.map((data, index) => (
            <div key={index}>
              <p>{data.productName.toUpperCase()}</p>
              <image alt='a' src={data.image} />
              <p>{data.price}</p>
              <button onClick={() => removeHandle(data.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart