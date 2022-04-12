import React from "react";
import Products from "../components/Products";
// import MenuPage from "./MenuPage";
// import ListCategory from "../components/ListCategory";

function ProductsPage() {
  return (
    <div>
      {/* <ListCategory /> */}
      {/* <MenuPage /> */}
      <h1 style={{ margin: "30px 0", textAlign: "center" }}> <strong>Menu</strong> </h1>
      <Products />
    </div>
  );
}

export default ProductsPage;
