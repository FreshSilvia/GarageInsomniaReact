import React, { useEffect , Component } from 'react';
import '../css/main.css';
import Hero from '../Components/Hero/Hero' ;
import CardList from '../Components/Card/CardList';
import cardItems from '../Components/Card/Carditems.json';
import Aux from '../Components/Auxiliary/Auxiliary';
import Filter from '../Components/Filter/Filter';

class Products extends Component {
    categoryOptions = [
        { value: '', label: 'Show All' },
        { value: 'Interior', label: 'Interior' },
        { value: 'Exterior', label: 'Exterior' },
        { value: 'Boost', label: 'Boost' },
        { value: 'Suspension', label: 'Suspension' },
    ];

    sortOptions = [
        { value: '', label: 'Sort By Price', placeholder: true },
        { value: 'high-low', label: 'Highest->Lowest' },
        { value: 'low-high', label: 'Lowest->Highest' }
    ];

    //Changing the state of the products page to only the specific category
    state = {
        filter: '',
        sort: '',
    }

    filterHandler = (event) => {
        console.log(event.target.value);
        this.setState({filter: event.target.value})
    } 

    sortHandler = (event) => {
        console.log(event.target.value);
        this.setState({sort: event.target.value})
    }

    render (){
        return (
            <Aux>
                <Hero />
                <Filter selectOptions={this.categoryOptions} selected={this.filterHandler}/>
                <Filter selectOptions={this.sortOptions} selected={this.sortHandler} />
                <h1 className="products-header">Products</h1>
                <CardList data={cardItems.data} filterby={this.state.filter} sortby={this.state.sort}/>
            </Aux>
        )
    }
}
export default Products;


