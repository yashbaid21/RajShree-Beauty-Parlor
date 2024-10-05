let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-navbar");

menuBtn.onclick = () => {
  navbar.classList.add("active");
};

closeBtn.onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Compose the mailto link
  const mailtoLink = `mailto:rajshreejain97@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
  )}`;

  // Open the mailto link in a new window to trigger the default mail client
  window.location.href = mailtoLink;
}
