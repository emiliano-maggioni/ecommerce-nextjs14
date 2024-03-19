'use client';

import { useEffect, useState } from "react";
import classes from "./page.module.css";
import Item from "components/item/Item";
import OrderField from "components/orderField/OrderField";
import SearchField from 'components/searchField/SearchField';
import productData from 'utilities/products.json';
import { ItemTypes } from "utilities/types";

const Home = () => {
  const [data, setData] = useState<ItemTypes[] | []>(productData);
  const [order, setOrder] = useState<string>('');
  const [searchString, setSearchString] = useState<string>('');

  useEffect(()=> {
    if(order || searchString){
      let results:ItemTypes[] = [...productData];
      if(searchString)
        results = results.filter((el) => el.nameProd.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);

      if(order === 'Precio mayor')
        setData(results.sort((a, b) => b.priceDiscounted - a.priceDiscounted));
      else if(order === 'Precio menor')
        setData(results.sort((a, b) => a.priceDiscounted - b.priceDiscounted));
      else
        setData(results);
    }
    else{
      setData(productData);
    }
  },[order,searchString]);

  const handleSearchChange = (searchFilter:string = '') => {
    setSearchString(searchFilter);
  };
  const handleOrderChange = (orderType:string = '') => {
    setOrder(orderType);
};

  return (
    <main className={classes.container}>
          <div className={classes.topbar}>
            <OrderField onChange={handleOrderChange} />
            <SearchField onChange={handleSearchChange} />
          </div>
          <section className={classes.itemsContainer} data-testid="itemsContainer">
            {(data.length > 0) ? (
              data.map((el) => (
                <Item
                    key={el.idProd}
                    idProd={el.idProd}
                    nameProd={el.nameProd}
                    imgName={el.imgName}
                    price={el.price}
                    moreColors={el.moreColors}
                    discount={el.discount}
                    priceDiscounted={el.priceDiscounted}
                />
              ))
             )
             : (<p>No results found.</p>)}
          </section>
    </main>
  );
}

export default Home;