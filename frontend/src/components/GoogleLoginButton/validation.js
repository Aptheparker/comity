export const verifyAccount = async (email) => {
  return new Promise((resolve, reject) => {
    if (email === "aptheparker@gmail.com") {
      resolve("admin");
    } else if (email === "sunnypark02179264@gmail.com") {
      resolve("wait");
    } else {
      reject(new Error("Not verified account. Please register."));
    }
  });
};




/* for backend connection */

// import axios from "axios";

// export const verifyAccount = (email) => {
//   return axios
//     .get("https://example.com/api/verify", {
//       params: {
//         email: email,
//       },
//     })
//     .then((response) => {
//       const { data } = response;
//       if (data === "admin") {
//         return "admin";
//       } else if (data === "wait") {
//         return "wait";
//       } else {
//         alert("Not verified account. Please register.");
//         return "reject";
//       }
//     })
//     .catch((error) => {
//       console.error("Error verifying account:", error);
//       return "reject";
//     });
// };
