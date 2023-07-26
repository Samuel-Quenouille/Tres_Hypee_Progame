//const API_KEY = process.env.API_KEY

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<div class="card-container">
        <div class="card mb-3" style="max-width: 300px;">
          <img src="${article.background_image}" class="card-img-top style="height: 200px; object-fit: cover;"">
          <p><b>${article.name}</b></p>
          <a href="#pagedetail/${article.id}">Voir plus</a>
        </div>
        </div>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=161da1f05e84443d8906064640d95e04`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

//export default PageList