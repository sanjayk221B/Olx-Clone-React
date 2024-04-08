export const signupValidate = (email, password, name, phone) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password);
  const isNameValid = /^[a-zA-Z_-]{3,16}$/.test(name);
  const isPhoneValid = /^\d{10}$/.test(phone);

  if (!name.trim()) {
    return "Username is required";
  } else if (!isNameValid) {
    return "Username is not valid";
  }

  if (!email.trim()) {
    return "Email is required";
  } else if (!isEmailValid) {
    return "Email address is not valid";
  }

  if (!phone.trim()) {
    return "Phone number is required";
  } else if (!isPhoneValid) {
    return "Phone number must be a valid 10-digit number";
  }

  if (!password.trim()) {
    return "Password  is required";
  } else if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};

export default signupValidate;
