function loadHTML(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("../components/header.html", "header");
  loadHTML("../components/footer.html", "footer");
});

// Dados dos itens
const itensHamburgueres = [
  {
    img: "../assets/images/hamburgueres.jpg",
    descricao: "Hambúrguer Clássico <br> R$8,00",
  },
  {
    img: "../assets/images/hamburgueres.jpg",
    descricao: "Hambúrguer BBQ <br> R$10,00",
  },
  {
    img: "../assets/images/hamburgueres.jpg",
    descricao: "Hambúrguer Vegano <br> R$9,00",
  },
  {
    img: "../assets/images/hamburgueres.jpg",
    descricao: "Cheeseburguer <br> R$11,00",
  },
  {
    img: "../assets/images/hamburgueres.jpg",
    descricao: "Hambúrguer duplo <br> R$14,00",
  },
];

const itensPasteis = [
  {
    img: "../assets/images/pasteis.jpg",
    descricao: "Pastel de Carne <br> R$6,00",
  },
  {
    img: "../assets/images/pasteis.jpg",
    descricao: "Pastel de Queijo <br> R$6,50",
  },
  {
    img: "../assets/images/pasteis.jpg",
    descricao: "Pastel de Frango <br> R$7,00",
  },
  {
    img: "../assets/images/pasteis.jpg",
    descricao: "Pastel de Pizza <br> R$7,50",
  },
  {
    img: "../assets/images/pasteis.jpg",
    descricao: "Pastel de Palmito <br> R$7,00",
  },
];

const itensBebidas = [
  {
    img: "../assets/images/bebidas.png",
    descricao: "Refrigerante 350ml <br> R$4,00",
  },
  {
    img: "../assets/images/bebidas.png",
    descricao: "Suco de Laranja <br> R$5,00",
  },
  {
    img: "../assets/images/bebidas.png",
    descricao: "Água Mineral <br> R$2,00",
  },
  {
    img: "../assets/images/bebidas.png",
    descricao: "Cerveja Lata <br> R$6,00",
  },
  {
    img: "../assets/images/bebidas.png",
    descricao: "Chá Mate 500ml <br> R$4,50",
  },
];

const itensSobremesas = [
  {
    img: "../assets/images/sobremesas.jpg",
    descricao: "Sorvete de Chocolate <br> R$8,00",
  },
  {
    img: "../assets/images/sobremesas.jpg",
    descricao: "Pudim <br> R$7,00",
  },
  {
    img: "../assets/images/sobremesas.jpg",
    descricao: "Tiramisu <br> R$9,00",
  },
  {
    img: "../assets/images/sobremesas.jpg",
    descricao: "Brownie <br> R$6,00",
  },
  {
    img: "../assets/images/sobremesas.jpg",
    descricao: "Frutas da Estação <br> R$5,00",
  },
];

// Função para adicionar itens à seção
function adicionarItens(selecao, itens) {
  const container = document.querySelector(`#${selecao} .menu-items`);

  itens.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("food-item");

    article.innerHTML = `
      <img src="${item.img}" alt="${item.descricao.split("<br>")[0]}">
      <div class="price-info">
        <h4>${item.descricao}</h4>
        <button class="btn-ask">Pedir agora</button>
      </div>
    `;

    container.appendChild(article);
  });
}

// Adiciona itens às seções
adicionarItens("hamburgueres", itensHamburgueres);
adicionarItens("pasteis", itensPasteis);
adicionarItens("bebidas", itensBebidas);
adicionarItens("sobremesas", itensSobremesas);
