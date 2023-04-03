export const verifyAccount = (email) => {
  if (email === "aptheparker@gmail.com") {
    return "admin";
  } else if (email === "sunnypark02179264@gmail.com") {
    return "wait";
  } else {
    alert("Not verified account. Please register.");
    return "reject";
  }
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
