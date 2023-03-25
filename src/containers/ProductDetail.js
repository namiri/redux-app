import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  console.log("r", id);

  const fetchProduct = async (id) => {
    const res = await axios
      .get("https://fakestoreapi.com/products/${id}")
      .catch((er) => console.log(er));
    console.log("p", res.data);
    // dispatch(selectedProduct(res.data))
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
