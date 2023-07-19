export const verifyAccount = async (email) => {
  return new Promise((resolve, reject) => {
    if (email === "@gmail.com") {
      resolve("admin");
    } else if (email === "sunnypark02179264@gmail.com") {
      resolve("wait");
    } else {
      resolve("reject")
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
