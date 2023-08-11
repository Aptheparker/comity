import axios from "axios";

export async function checkUserStatus(userEmail) {
  try {
    const userInfo = {
      email: userEmail,
    };

    const response = await axios.post("/auth", userInfo, {
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

export async function userRegister(userInfo) {
  try {
    const response = await axios.post("/register", userInfo, {
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
