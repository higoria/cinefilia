export default function ativarSlideEApi() {
  const carrosselContainers = document.querySelectorAll(".carrosselBox");

  carrosselContainers.forEach((sliderContainer, index) => {
    let scrollAmount = 0;
    const scrollPerClick = 900;

    // Função para suavizar o scroll
    function smoothScroll(targetScrollPosition) {
      const currentScrollPosition = sliderContainer.scrollLeft;
      const distanceToScroll = targetScrollPosition - currentScrollPosition;
      const step = distanceToScroll / 20;

      function animateScroll() {
        const newScrollPosition = sliderContainer.scrollLeft + step;

        if (
          (step > 0 && newScrollPosition < targetScrollPosition) ||
          (step < 0 && newScrollPosition > targetScrollPosition)
        ) {
          sliderContainer.scrollLeft = newScrollPosition;
          requestAnimationFrame(animateScroll);
        } else {
          sliderContainer.scrollLeft = targetScrollPosition;
        }
      }

      animateScroll();
    }

    // Botões de controle específicos para cada carrossel
    const leftButton = document.querySelectorAll(".setaEsquerda")[index];
    const rightButton = document.querySelectorAll(".setaDireita")[index];

    leftButton.addEventListener("click", () => {
      scrollAmount = Math.max(0, scrollAmount - scrollPerClick);
      smoothScroll(scrollAmount);
    });

    rightButton.addEventListener("click", () => {
      const maxScrollLeft =
        sliderContainer.scrollWidth - sliderContainer.clientWidth;
      if (scrollAmount < maxScrollLeft) {
        scrollAmount = Math.min(maxScrollLeft, scrollAmount + scrollPerClick);
        smoothScroll(scrollAmount);
      }
    });
  });

  // Carregar filmes da API e preencher o primeiro carrossel como exemplo
  async function carregarFilmes(carrosselContainer, tipoFilmes) {
    const apiKey = "9aa3a74417b0ce09768fe48efb364c97";
    const url =
      tipoFilmes === "populares"
        ? `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
        : `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Erro HTTP: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      const movies = data.results;

      // Inserir as imagens no carrossel
      movies.forEach((movie) => {
        carrosselContainer.insertAdjacentHTML(
          "beforeend",
          `<img class="slider-img" 
                src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" 
                alt="${movie.title}" 
                style="margin: 10px;"/>`
        );
      });
    } catch (error) {
      console.error("ERRO AO CARREGAR FILMES:", error.message);
    }
  }

  // Carregar filmes para cada carrossel
  carrosselContainers.forEach((carrosselContainer, index) => {
    // Passa 'populares' para o primeiro carrossel, e 'topRated' para o segundo
    const tipoFilmes = index === 0 ? "populares" : "topRated";
    carregarFilmes(carrosselContainer, tipoFilmes);
  });
}
