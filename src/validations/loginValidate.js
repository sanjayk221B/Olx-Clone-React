const loginValidate = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);

  if (!email.trim()) {
    return "Email is required";
  } else if (!isEmailValid) {
    return "Email address is not valid";
  }

  if (!password.trim()) {
    return "Password is required";
  } else if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};

export default loginValidate;
