export const IncreaseById = (productId) => {
  return {
    type: "INCREASE_ID",
    payload: { productId },
  };
};
export const DecreaseById = (productId) => {
  return {
    type: "DECREASE_ID",
    payload: { productId },
  };
};
