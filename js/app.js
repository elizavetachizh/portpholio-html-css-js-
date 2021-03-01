$(function () {
  $("body").removeClass("no-scroll");

  const filter = $("[data-filter]");

  filter.on("click", function (event) {
    //задаем функции параметр event и даному параметру прописываем событие удаление стандатрного поведенеия ссылки
    event.preventDefault();
    const cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function () {
        //метод each , т.е. каждому эл-ту, у которого есть data-cat мы прописываем определенные условия выпонения
        const workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  const model = $("[data-model]");
  const modelClose = $("[data-close]");

  model.on("click", function (event) {
    event.preventDefault;
    let $this = $(this);
    let modelId = $this.data("model");
    $(modelId).addClass("show");

    $("body").addClass("no-scroll");

    $("#workSlider").slick("setPosition");
  });

  modelClose.on("click", function (event) {
    event.preventDefault;
    let $this = $(this);
    let modelIdClose = $this.data("close");
    $(modelIdClose).removeClass("show");
    $("body").removeClass("no-scroll");
  });

  $("close").on("click", function (event) {
    $(modelIdClose).removeClass("show");
    // $("body").removeClass("no-scroll");
  });
  $(".model__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  /*slider https://kenwheeler.github.io/slick/*/

  $("#workSlider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".models").find("#workSlider");
    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".models").find("#workSlider");
    currentSlider.slick("slickNext");
  });

  let nav = $("#nav");
  let navToggle = $("#navToggle");
  // burger
  navToggle.on("click", function (event) {
    event.preventDefault();

    //  для удаление класс, в нашем случае это show
    nav.toggleClass("show");
  });
});
