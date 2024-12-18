export default function iniciarListarFilmesOscars() {
  const filmesGanhadoresOscars = [
    {
      titulo: "Everything E. All at Once",
      ano: 2023,
      qntdDeOscars: 7,
      posterDoFilme: "imgs/tudoemtodolugarC.jpg",
    },
    {
      titulo: "CODA",
      ano: 2022,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/codaC.jpg",
    },
    {
      titulo: "Nomadland",
      ano: 2021,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/nomadlandC.jpg",
    },
    {
      titulo: "Parasita",
      ano: 2020,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/parasiteC.jpg",
    },
    {
      titulo: "Green Book",
      ano: 2019,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/the-green-bookC.jpg",
    },
    {
      titulo: "A Forma da Água",
      ano: 2018,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/the-shape-of-wateC.jpg",
    },
    {
      titulo: "Moonlight",
      ano: 2017,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/moonlightC.jpg",
    },
    {
      titulo: "Spotlight",
      ano: 2016,
      qntdDeOscars: 2,
      posterDoFilme: "imgs/spotlightC.jpg",
    },
    {
      titulo: "Birdman",
      ano: 2015,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/birdmanC.jpg",
    },
    {
      titulo: "12 Anos de Escravidão",
      ano: 2014,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/12-years-a-slaveC.jpg",
    },
    {
      titulo: "Argo",
      ano: 2013,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/argoC.jpg",
    },
    {
      titulo: "O Artista",
      ano: 2012,
      qntdDeOscars: 7,
      posterDoFilme: "imgs/the-artistjpgC.jpg",
    },
    {
      titulo: "O Discurso do Rei",
      ano: 2011,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/the-kings-speechC.jpg",
    },
    {
      titulo: "Estado de Guerra",
      ano: 2010,
      qntdDeOscars: 6,
      posterDoFilme: "imgs/WaronTerrorC.jpg",
    },
    {
      titulo: "Quem Quer Ser Bilionário?",
      ano: 2009,
      qntdDeOscars: 8,
      posterDoFilme: "imgs/slumdog-millionaireC.jpg",
    },
    {
      titulo: "Onde os Fracos Não tem Vez",
      ano: 2008,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/no-country-for-old-menC.jpg",
    },
    {
      titulo: "O Departamento",
      ano: 2007,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/the-departedC.jpg",
    },
    {
      titulo: "Crash",
      ano: 2006,
      qntdDeOscars: 3,
      posterDoFilme: "imgs/crashC.jpg",
    },
    {
      titulo: "Menina de Ouro",
      ano: 2005,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/million-dollar-babyC.jpg",
    },
    {
      titulo: "O Senhor dos Aneis 3",
      ano: 2004,
      qntdDeOscars: 11,
      posterDoFilme: "imgs/the-lord-of-the-rings-the-return-of-the-kingC.jpg",
    },
    {
      titulo: "Chicago",
      ano: 2003,
      qntdDeOscars: 6,
      posterDoFilme: "imgs/chicagoC.jpg",
    },
    {
      titulo: "Uma Mente Brilhante",
      ano: 2002,
      qntdDeOscars: 4,
      posterDoFilme: "imgs/a-beautiful-mindC.jpg",
    },
    {
      titulo: "Gladiador",
      ano: 2001,
      qntdDeOscars: 5,
      posterDoFilme: "imgs/gladiatorC.jpg",
    },
    {
      titulo: "Beleza Americana",
      ano: 2009,
      qntdDeOscars: 5,
      posterDoFilme: "imgs/american-beautyC.jpg",
    },
  ];

  const oscarsContent = document.querySelector(".oscars-content");

  filmesGanhadoresOscars.forEach((filme, index) => {
    const filmeDiv = document.createElement("div");
    filmeDiv.classList.add("listaDeFilmes", `filme0${index}`);
    filmeDiv.innerHTML = `
    <h1>${filme.titulo}</h1>
    <div  class="imgFilmeOscar imgFilmeOscar0${index}">
      <img src="${filme.posterDoFilme}" alt="">
    </div>
    <div class="infosAnoEQuantidade">
          <h3>${filme.ano}</h3>
          <div class="quantidadeDeOscars">
            <h3>${filme.qntdDeOscars}</h3>
            <img src="imgs/oscar.png" alt="">
          </div>
    </div>
    `;
    oscarsContent.appendChild(filmeDiv);
  });
}
