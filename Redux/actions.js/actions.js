export const addItem = (item, isChecked) => {
  return {
    type: "ADD",
    payload: { ...item, isChecked },
  };
};
export const removeItem = () => {
  return {
    type: "REMOVE",
  };
};
