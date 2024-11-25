document.getElementById("fetchButton").addEventListener("click", async () => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "Loading...";
  
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok"); // if resposne error throws error
      }
      const data = await response.json();
      const posts = data.posts.map((post) => post.title).join("<br>");
      outputDiv.innerHTML = `<h3>Fetched Posts:</h3>${posts}`;
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`;
    }
  });
  