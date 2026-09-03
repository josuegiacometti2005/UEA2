$(document).ready(function () {

    console.log("jQuery carregado");

    let quantidadeCarrinho = 0;

    $(".add-cart").on("click", function (event) {
        event.preventDefault();

        quantidadeCarrinho++;

        $("#cart-count").text(quantidadeCarrinho);

        $("#mensagem-jquery")
            .stop(true, true)
            .hide()
            .fadeIn(400)
            .delay(1000)
            .fadeOut(500);
    });

    $(".card").on("mouseenter", function () {
        $(this).addClass("jquery-hover");
    });

    $(".card").on("mouseleave", function () {
        $(this).removeClass("jquery-hover");
    });

    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 100) {
            $("#barra-superior").addClass("menu-scroll");
        } else {
            $("#barra-superior").removeClass("menu-scroll");
        }

    });

    $("#menu-categorias .nav-link").on("click", function (event) {
        event.preventDefault();

        $("#mensagem-jquery")
            .text("Categoria selecionada!")
            .stop(true, true)
            .hide()
            .slideDown(400)
            .delay(1000)
            .slideUp(400);
    });

});