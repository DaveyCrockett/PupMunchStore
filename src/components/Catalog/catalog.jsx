
import ProductCard from './../ProductCard/productCard';
import React, { useEffect, useState } from 'react';
import DataService from '../../services/dataService';


const Catalog = () => {
    // state vars are INMUTABLES (can not change)
    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Catalog component loaded");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
        console.log("Retrieved", data);
    };

    // hook to do something when the component is rendered the first time (only)
    useEffect(() => {
        //do this when the component loads
        loadCatalog();
    }, []); // [] = dependencies, when a dependency changes, run the fn again.
    return(
        <div className="catalog">
            <h1 className="catalogTItle">Catalog Title</h1>
            <h3>We have {products.length} amazing products for you</h3>
             {products.map(product => <ProductCard key={product._id} product={product}/>)}           
        </div>
    );
}

export default Catalog;