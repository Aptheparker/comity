const BASE_URL = 'http://3.38.168.113'; // Replace with your actual backend URL

export async function checkUserStatus(userId) {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) { // If response is not 2xx, throw an error
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // The response from the backend
  } catch (error) { // Catch any errors and throw them to the caller
    console.error('Error checking user ID:', error);
    throw error;
  }
}
