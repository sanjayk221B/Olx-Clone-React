const productValidate = (name, category, price) => {
  const isNameValid = /^[a-zA-Z0-9\s\-_]+$/.test(name);
  const isCategoryValid = /^[a-zA-Z0-9\s\-_]+$/.test(category);
  const isPriceValid = /^\d+(\.\d{1,2})?$/.test(price);

  if (!name.trim()) {
    return "Name is required";
  } else if (!isNameValid) {
    return "Name is not valid";
  }

  if (!category.trim()) {
    return "Category is required";
  } else if (!isCategoryValid) {
    return "Category is not valid";
  }

  if (!price.trim()) {
    return "Price is required";
  } else if (!isPriceValid) {
    return "Price is not valid";
  } else if (parseFloat(price) <= 0) {
    return "Price must be a positive number";
  }

  return null;
};

export default productValidate;
