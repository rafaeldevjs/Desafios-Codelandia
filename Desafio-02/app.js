const produtos = document.querySelector(".produtos");

for (let index = 0; index < 8; index++) {
  let img = document.createElement("img");
  let div = document.createElement("div");
  img.setAttribute("src", `./img/${index + 1}.png`);
  img.setAttribute("alt", `item {index + 1}.png`);
  div.classList.add("item");
  div.appendChild(img);
  produtos.appendChild(div);
}
