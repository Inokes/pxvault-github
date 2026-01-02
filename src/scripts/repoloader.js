fetch("https://api.github.com/users/inokes/repos")
  .then(r => r.json())
  .then(data => {
    const grid = document.getElementById("repos")
    data.forEach(repo => {
      const el = document.createElement("a")
      el.href = repo.html_url
      el.target = "_blank"
      el.className = "card link"
      el.innerhtml = `<h3>${repo.name}</h3><p>${repo.description || ""}</p>`
      grid.appendChild(el)
    })
  })