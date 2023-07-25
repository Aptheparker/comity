export async function checkUserStatus(userEmail) {
  try {
    const response = await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
    });

    if (!response.ok) {
      // If response is not 2xx, throw an error
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);
    return data; // The response from the backend
  } catch (error) {
    // Catch any errors and throw them to the caller
    console.error("Error checking user ID:", error);
    throw error;
  }
}

export async function userRegister(userInfo) {
  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      // If response is not 2xx, throw an error
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // The response from the backend
  } catch (error) {
    // Catch any errors and throw them to the caller
    console.error("Error registering user:", error);
    throw error;
  }
}
