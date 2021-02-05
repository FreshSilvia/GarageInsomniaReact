import React from 'react';

function Card({item}) {
    return (
        <div className="card-container">
            <div className="card-product">
                <img src={item.img} alt="car product" className="image"></img>
                <h2 className="title">{item.name}</h2>
                <p className="price">${item.price}</p>
                <p className="descript">{item.description}</p>
                <button className="btn">Buy Now</button>
                {/* grabbing each item */}
            </div>
        </div>
    )
}

export default Card