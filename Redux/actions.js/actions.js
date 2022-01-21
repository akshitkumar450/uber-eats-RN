export const addItem = (item, isChecked) => {
  return {
    type: "ADD",
    payload: { ...item, isChecked },
  };
};
