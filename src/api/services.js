
import http from "./http";
const token = (localStorage.getItem('accessToken:'))


export const getTasks = () => {
  return http.get("/" , {
    headers: {
      "Content-type": "application/json",
      'Authorization':`Bearer${token}`
    }
  });
};

export const login = data => {
    return http.post("/personnel/login", data);
};

