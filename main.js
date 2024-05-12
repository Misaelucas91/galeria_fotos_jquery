$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    console.log("submit");
    e.preventDefault();
    const enderecoNovaImg = $("#endereco-img-nova").val();
    const novaImg = $("<li style='display: none'></li>");
    $(`<img src="${enderecoNovaImg}" />`).appendTo(novaImg);
    $(
      `<div class="overlay-img-link"><a href="${enderecoNovaImg}" target="_blank" title="Ver imagem">Ver imagem</a></div>`
    ).appendTo(novaImg);
    $(novaImg).appendTo("ul");
    $(novaImg).fadeIn(500);
    $("#endereco-img-nova").val("");
  });
});
