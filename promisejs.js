document.getElementById("fetchButton").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "Loading...";
  
    // Promise to fetch data
    const fetchData = new Promise((resolve, reject) => {
    
      setTimeout(() => {
        fetch("https://dummyjson.com/posts")
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          })
          .then(data => resolve(data)) // if response ok resolve
          .catch(err => reject(err));
      }, 5000);
    });
  
    // Handle the Promise
    fetchData
      .then(data => {
        const posts = data.posts.map(post => post.title).join("<br>");
        outputDiv.innerHTML = `<h3>Fetched Posts:</h3>${posts}`;
      })
      .catch(error => {
        outputDiv.textContent = `Error: ${error.message || error}`;
      });
  });
  