import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import axios from "axios";
import {setProducts} from '../redux/actions/productActions'

const ProductList = () => {
//   const products = useSelector((state) => state.allProucts.proucts);
//   console.log(products);
  const dispatch = useDispatch();
 

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((er) => console.log(er));

    console.log('p',res.data);
    dispatch(setProducts(res.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);
//   console.log('a',products);

  return (
    <div className="ui container grid">
      <Product />
    </div>
  );
};

export default ProductList;
