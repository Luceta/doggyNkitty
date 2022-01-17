const BASE_URL = "http://146.56.183.55:5050";
const SIGN_UP = `${BASE_URL}/user`;
const LOGIN = `${BASE_URL}/user/login`;
const EMAIL_VALID = `${BASE_URL}/user/emailvalid`;
const UPLOAD_IMAGE = `${BASE_URL}/image/uploadfile`;

export const signupAPI = (email, password, username, accountname, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("accountname", accountname);
  data.append("image", image);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };

  return fetch(SIGN_UP, options);
};

export const checkEmailAPI = (email) => {
  const data = {
    user: {
      email,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(EMAIL_VALID, options);
};

export const loginAPI = (email, password) => {
  const data = {
    user: {
      email,
      password,
    },
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(LOGIN, options);
};

export const imageUploadAPI = (files) => {
  const formData = new FormData();
  formData.append("image", files[0]);

  console.log(formData, "form data why empty?");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  };

  return fetch(UPLOAD_IMAGE, options);
};
