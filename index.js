async function submitData(name, email) {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit data");
    }

    const data = await response.json();

    document.body.innerHTML += data.id;
  } catch (error) {
    document.body.innerHTML += error.message;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    submitData(name, email);
  });
});
