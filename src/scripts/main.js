const container = document.getElementById("repos");
const USER = "Inokes";

fetch(`https://api.github.com/users/${USER}/repos`)
  .then(res => res.json())
  .then(repos => {
    repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .forEach(repo => {
        const el = document.createElement("div");
        el.className = "repo";

        el.innerHTML = `
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <p>${repo.description || "no description"}</p>
        `;

        container.appendChild(el);
      });
  })
  .catch(() => {
    container.innerHTML = "<p>failed to load repositories.</p>";
  });