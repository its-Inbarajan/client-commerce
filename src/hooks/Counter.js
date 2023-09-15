// import { useSelector } from "react-redux";

import { useSelector } from "react-redux";

// export const Counter = () => {
//   const { coin } = useSelector((state) => state.counter);

//   return <div>{coin}</div>;
// };

export const ProductCount = () => {
  const products = useSelector((state) => state.products);

  const getTotalProductCount = () => {
    // return products.reduce(
    //   (totalCount, products) => (totalCount += products.quantity, 1)
    // );
    return products.reduce(
      (totalCount, product) => totalCount + product.quantity,
      1
    );
  };
  return <div>{getTotalProductCount()}</div>;
};
