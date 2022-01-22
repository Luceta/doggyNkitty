import React from "react";
import styled from "styled-components";

export default function ProductListEntry({ product }) {
  return (
    <Product>
      <figure className="product">
        <img src={product.itemImage} alt="user-product" className="product-image" />
        <figcaption className="product-info">
          <strong className="product-name">{product.itemName}</strong>
          <strong className="product-price">{product.price}</strong>
        </figcaption>
      </figure>
    </Product>
  );
}

const Product = styled.li`
  cursor: pointer;

  .product {
    min-width: 140px;
  }

  .product-image {
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }

  .product-info {
    padding: 6px 2px 0;
  }

  .product-name {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
  }

  .product-price {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }
`;
