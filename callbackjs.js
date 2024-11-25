document.getElementById("executeButton").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");

    // initial message
    outputDiv.textContent = "Result will be executed after 5 seconds";

    //5-second delay using a callback
    setTimeout(() => {
      // Fetch data from the API
      fetch("https://dummyjson.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const posts = data.posts.map((post) => post.title).join("<br>");
          console.log(posts);
          outputDiv.innerHTML = `<h3>Fetched Posts:</h3>${posts}`;
        })
        .catch((error) => {
          outputDiv.textContent = `Error: ${error.message}`;
        });
    }, 5000);
  });