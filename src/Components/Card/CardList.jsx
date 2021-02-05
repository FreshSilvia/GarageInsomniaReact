import React from 'react';
import Card from './Card';
import filterByCategory from '../Filter/Category/Category';

const CardList = (data) => {

    //changed data to inventory variable to make less confusing
    let inventory = data.data;
    
    //filters my inventory by its category
    inventory = filterByCategory(inventory, data.filterby);

    //using sort to show inventory from low to high and high to low.
    if(data.sortby === "low-high") {
        inventory.sort((a,b) => {
            return a.price - b.price;
        })
    } else if (data.sortby === "high-low") {
        inventory.sort((a,b) => {
            return b.price - a.price;
        })
    }

    
    //Goes through each object and puts it in a card and renders it on page
    return (
        <div className="cardList-container">
            {inventory.map(item => <Card item ={item}/>)}
        </div>
    )
}

export default CardList