import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Product from "./Product";

function Home() {
  return (
    <div className='home__row'>
      <Product
        id='12321341'
        title='Because Life is a Gift: Stories of Hope, Courage and Perseverance'
        price={11.96}
        rating={5}
        image='https://images-eu.ssl-images-amazon.com/images/I/81yswtkIMsL._AC_UL300_SR300,240_.jpg'
      />
      <Product
        id='49538094'
        title='Google Pixel 2 XL (18:9 Display, 128 GB) Just Black'
        price={239.0}
        rating={4}
        image='https://m.media-amazon.com/images/I/61bbH2ltBoL._AC_UL320_.jpg'
      />
    </div>
  );
}

export default Home;
