import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <ProductCard>
        <h1>Sony Display</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          provident facere molestiae voluptatem, beatae quas harum velit,
          temporibus, nemo corporis expedita! Obcaecati animi molestias amet
          debitis pariatur dolor cum repellendus.
        </p>
      </ProductCard>
      <ProductCard>
        <h1>Intel Processor</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          provident facere molestiae voluptatem, beatae quas harum velit,
          temporibus, nemo corporis expedita! Obcaecati animi molestias amet
          debitis pariatur dolor cum repellendus.
        </p>
      </ProductCard>
    </div>
  );
};

export default Products;
