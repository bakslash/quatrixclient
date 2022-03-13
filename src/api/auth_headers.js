export default function authHeader() {
    const user = localStorage.getItem('user');
    if (user) {
      return { 
       Authorization: `Bearer ${user} `,
      "Content-type": "application/json",};
    } else {
      return {};
    }
  }