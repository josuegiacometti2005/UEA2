$(document).ready(function () {

    console.log("jQuery carregado");

    let quantidadeCarrinho = 0;

    $(".add-cart").on("click", function (event) {
        event.preventDefault();

        quantidadeCarrinho++;

        $("#cart-count").text(quantidadeCarrinho);
    });


    $(".card").on("mouseenter", function () {
        $(this).addClass("jquery-hover");
    });

    $(".card").on("mouseleave", function () {
        $(this).removeClass("jquery-hover");
    });


    $(window).on("scroll", function () {

        if ($(window).scrollTop() > 100) {
            $("#menu-categorias").addClass("menu-scroll");
        } else {
            $("#menu-categorias").removeClass("menu-scroll");
        }

    });

});