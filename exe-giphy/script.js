let botao = document.querySelector(".btn-search-sticker");
let stickers = document.querySelector(".stickers");

botao.addEventListener("click", (clicar) => {
    clicar.preventDefault();
    stickers.innerHTML = " " 

    fetch("https://api.giphy.com/v1/stickers/search?q="
        + sticker.value + "&api_key=W6NNTI6yGBO64e3r9273j89HRYdkxvii")
        .then((response) => {
            return response.json();
        })
        .then((infos) => {
            console.log(sticker.value)
            infos.data.forEach(gif => {
                let card = document.createElement("div");
                card.setAttribute("class", "box");
                card.setAttribute("data-id",gif.id);
                stickers.appendChild(card);

                let imagem = document.createElement("img");
                imagem.src = gif.images.original.url;
                card.appendChild(imagem);

            });
        })
        .catch((erro) => {
            console.log(erro)
        })
})



