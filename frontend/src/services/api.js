// imports
import axios from "axios";

export async function checkUserStatus(userEmail) { // login
  try {
    const userInfo = {
      email: userEmail,
    };

    const response = await axios.post("http://3.38.168.113/auth", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    return data; // The response from the backend
  } catch (error) {
    console.error("Error checking user ID:", error);
    throw error;
  }
}

export async function userRegister(userInfo) { // register
  try {
    const response = await axios.post("http://3.38.168.113/register", userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;
    return data; // The response from the backend
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
