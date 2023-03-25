import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  remselectedProduct,
} from "../redux/actions/productActions";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, price, category, description, title } = product;
  console.log("prod", product);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("r", id);

  const fetchProduct = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((er) => console.log(er));
    console.log("p", res.data);

    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProduct();

    return () => {
      dispatch(remselectedProduct());
    };
  }, [id]);

  return (
    <div className="ui grid container">
      {!product ? (
        <p>...Loading</p>
      ) : (
        <div className="ui placeholder segment ">
          <p className="ui tag title ">{title}</p>
          <p className="ui tag title ">{price}</p>
          <p className="ui tag title ">{category}</p>
          <p className="ui tag title ">{description}</p>
          <img alt={title} className="ui image fluid" src={image} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
