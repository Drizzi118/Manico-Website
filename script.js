// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const clickBtn = document.getElementById("clickBtn");

  // Safety check if button exists
  if (clickBtn) {
    clickBtn.addEventListener("click", () => {
      // Open Wix site in same tab
      window.location.href = "https://tigsmort.wixsite.com/my-site";
      
      // If you want it in a new tab instead, uncomment:
      // window.open("https://tigsmort.wixsite.com/my-site", "_blank");
    });
  } else {
    console.error("Button with id 'clickBtn' not found!");
  }
});
