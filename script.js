const ipContainer = document.getElementById("ip-container");

async function getPublicIP() {
  ipContainer.innerHTML = '<div class="loader mx-auto mt-2"></div>';
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    ipContainer.textContent = `Your Public IP: ${data.ip}`;
  } catch (error) {
    ipContainer.textContent = "Failed to fetch IP. Please try again.";
    console.error("Error fetching IP:", error);
  }
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");
}
