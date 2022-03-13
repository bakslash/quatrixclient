
import http from "./http";
import authHeader from "./auth_headers";

 export const getTasks = () => {
  return http.get("/" , {
    headers:authHeader
  });
};

export const SignIn= async(phone,password) => {
  const data = {phone,password}
  const res = await http.post("/personnel/login" ,data);
   localStorage.setItem('user',res.data.data.accessToken )

  return res

};





