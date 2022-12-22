const baseUrlUsers = "http://127.0.0.1:5001/";

export async function submitUser(username, password) {
  try {
    const response = await fetch(`${baseUrlUsers}create-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    console.log(await response.json());
    // return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}
