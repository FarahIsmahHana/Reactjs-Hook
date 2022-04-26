import React from 'react';
import { ProductsData } from '../../ProductsData';
import { useNavigate } from 'react-router-dom';

const ListProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((product, index) => {
          return (
            <div
              className="productDisplay"
              key={index}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <h1>{product.name}</h1> <p>{product.description}</p>{' '}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProducts;
