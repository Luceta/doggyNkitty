const BASE_URL = "http://146.56.183.55:5050";
const SIGN_UP = `${BASE_URL}/user`;
const LOGIN = `${BASE_URL}/user/login`;
const EMAIL_VALID = `${BASE_URL}/user/emailvalid`;
const UPLOAD_IMAGE = `${BASE_URL}/image/uploadfile`;
const UPLOAD_PRODUCT = `${BASE_URL}/product`;
const ACCOUNT_VALID = `${BASE_URL}/user/accountnamevalid`;
const UPLOAD_POST = `${BASE_URL}/post`;

export const signupAPI = (email, password, username, accountname, intro, image) => {
  const data = {
    user: {
      email,
      password,
      username,
      accountname,
      intro,
      image,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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

  const options = {
    method: "POST",
    body: formData,
  };

  return fetch(UPLOAD_IMAGE, options);
};

export const uploadProduct = (product) => {
  const data = {
    product,
  };

  const key = localStorage.getItem("access_token");

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(UPLOAD_PRODUCT, options);
};

export const uploadProfileAPI = (profile) => {
  const key = localStorage.getItem("access_token");
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  };

  return fetch(SIGN_UP, options);
};

export const checkAccountAPI = (accountname) => {
  const data = {
    user: {
      accountname,
    },
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(ACCOUNT_VALID, options);
};

export const searchUserAPI = (value) => {
  const SEARCH_USER = `${BASE_URL}/user/searchuser/?keyword=${value}`;
  const key = localStorage.getItem("access_token");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(SEARCH_USER, options);
};

export const getUserProducts = (accountname) => {
  const USER_PRODUCTS = `${BASE_URL}/product/${accountname}`;
  const key = localStorage.getItem("access_token");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(USER_PRODUCTS, options);
};

export const getUserProfile = (accountname) => {
  const USER_PROFILE = `${BASE_URL}/profile/${accountname}`;
  const key = localStorage.getItem("access_token");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(USER_PROFILE, options);
};

export const uploadPostImageAPI = (post) => {
  const data = {
    post,
  };

  const key = localStorage.getItem("access_token");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(UPLOAD_POST, options);
};

export const getUserPost = (accountname) => {
  const GET_POSTS = `${BASE_URL}/post/${accountname}/userpost`;
  const key = localStorage.getItem("access_token");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(GET_POSTS, options);
};

export const deleteProductAPI = (productId) => {
  const DELETE_PRODUCT = `${BASE_URL}/product/${productId}`;
  const key = localStorage.getItem("access_token");
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(DELETE_PRODUCT, options);
};

export const getProductDetailAPI = (productId) => {
  const GET_PRODUCT_DETAIL = `${BASE_URL}/product/detail/${productId}`;
  const key = localStorage.getItem("access_token");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(GET_PRODUCT_DETAIL, options);
};

export const updateProductDetailAPI = (productID, data) => {
  const UPDATE_PRODUCT = `${BASE_URL}/product/${productID}`;

  const key = localStorage.getItem("access_token");
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(UPDATE_PRODUCT, options);
};

export const followAPI = (accountname) => {
  const FOLLOW = `${BASE_URL}/profile/${accountname}/follow`;
  const key = localStorage.getItem("access_token");

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(FOLLOW, options);
};

export const getFollowingFeedAPI = (limit = 0, skip = 0) => {
  const FOLLOWING_FEED = `${BASE_URL}/post/feed/?/limit=${limit}&skip=${skip}`;
  const key = localStorage.getItem("access_token");
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(FOLLOWING_FEED, options);
};

export const unFollowAPI = (accountname) => {
  const UNFOLLOW = `${BASE_URL}/profile/${accountname}/unfollow`;
  const key = localStorage.getItem("access_token");

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(UNFOLLOW, options);
};

export const getMyFollowingListAPI = (accuontname, limit = 0, skip = 0) => {
  const MyFollowings = `${BASE_URL}/profile/${accuontname}/following?limit=${limit}&skip=${skip}`;
  const key = localStorage.getItem("access_token");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(MyFollowings, options);
};

export const getMyFollowerListAPI = (accuontname, limit = 0, skip = 0) => {
  const MyFollowers = `${BASE_URL}/profile/${accuontname}/follower?limit=${limit}&skip=${skip}`;
  const key = localStorage.getItem("access_token");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(MyFollowers, options);
};
