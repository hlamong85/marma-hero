import React from 'react';

const Cart = () => {
    const { cart } = props;
    let total = 0;
    let addName = " ";
    for (const teams of cart) {
        total = total + teams.unitPrice;
        addName = addName + teams.name;
    return (
         <div>
            <h2>Cart Information  </h2>
            <hr />
            <h4>Added: {props.cart.length} Cart</h4>
            <h4>Total Price: TK {total}</h4>
            <h4>Name Added : {addName}</h4>
        </div>
    );
};

export default Cart;