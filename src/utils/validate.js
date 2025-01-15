export const checkValidata = (email, password) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //const isFullNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(fullname);

  if (!isEmailValid) return "Email id is not valid";
  if (!isPasswordValid) return "password is not valid";
  //if (!isFullNameValid) return "enter valid fullname";

  return null;
};
