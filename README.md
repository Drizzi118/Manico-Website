# Manico-Website


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manico Store</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f4f4f4, #e1e1e1);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .banner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #fff;
      padding: 2em;
      border-radius: 15px;
      box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
      max-width: 400px;
      width: 90%;
    }

    .banner-logo {
      width: 150px;
      height: auto;
      margin-bottom: 1em;
    }

    .store-title {
      font-size: 2rem;
      font-weight: bold;
      margin: 0.5em 0;
      color: #333;
    }

    button {
      padding: 0.75em 1.5em;
      font-size: 1rem;
      background: #007BFF;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s ease;
    }

    button:hover {
      background: #0056b3;
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <main class="banner-container">
    <img src="https://i.postimg.cc/85SCY4Sx/output-onlinepngtools-1.png" 
         alt="Manico Logo" 
         class="banner-logo">
    <p class="store-title">Manico Store</p>
    <button id="clickBtn">Click Here</button>
  </main>

  <script>
    document.getElementById("clickBtn").addEventListener("click", function() {
      alert("Welcome to Manico Store!");
    });
  </script>
</body>
</html>


/* Reset default margins */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f4f4f4, #e1e1e1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Main container for logo + text + button */
.banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #fff;
  padding: 2em;
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
  max-width: 400px;
  width: 90%;
}

/* Logo styling */
.banner-logo {
  width: 150px;
  height: auto;
  margin-bottom: 1em;
}

/* Store title */
.store-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5em 0;
  color: #333;
}

/* Button */
button {
  padding: 0.75em 1.5em;
  font-size: 1rem;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}

/* Button hover effect */
button:hover {
  background: #0056b3;
  transform: scale(1.05);
}


// Select the button
const clickBtn = document.getElementById("clickBtn");

// Redirect to your Wix site on click
clickBtn.addEventListener("click", () => {
  window.location.href = "https://tigsmort.wixsite.com/my-site";
});
