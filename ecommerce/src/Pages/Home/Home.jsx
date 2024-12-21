import React from "react";
import { Card, CardBody } from "reactstrap";
import Herosection from "../../Components/Herosection/Herosection";
import Categories from "../../Components/Categories/Categories";
import LatestProduct from "../../Components/LatestProduct/LatestProduct";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Register from "../../Components/Register/Register";
import Products from "../../Components/Products/Products";
import Buyerform from "../../Components/Buyerform/Buyerform";
import Connection from "../../Components/Connection/Connection";

function Home() {
  return (
    <div>
      <Herosection />
      <Categories />
      <LatestProduct />
      <Testimonials />
      <Buyerform />
      <Register />
      <Products />
      <Connection />
    </div>
  );
}

export default Home;
