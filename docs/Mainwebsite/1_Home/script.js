// This script loads navbar HTML content into the #navbar div
fetch('../navbar/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  })
  .catch(error => console.log("Error loading navbar:", error));
document.addEventListener("DOMContentLoaded", function () {
  fetch('../navbar/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      console.log("Navbar loaded");
    })
    .catch(error => console.log("Error loading navbar:", error));
});

function incrementShare() {
  // Share count update
  let count = parseInt(localStorage.getItem('shareCount') || '0');
  count++;
  localStorage.setItem('shareCount', count);
  document.getElementById('shareCount').innerText = count;

  // Try to share
  const url = window.location.href;

  // If browser supports Web Share API (mobile mostly)
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: url
    }).then(() => {
      alert("Thanks for sharing!");
    }).catch(() => {
      navigator.clipboard.writeText(url);
      alert("🔗 Link copied to clipboard!");
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(url)
      .then(() => {
        alert("🔗 Link copied to clipboard!");
      })
      .catch(() => {
        alert("❌ Couldn't copy the link. Please copy it manually.");
      });
  }
}

