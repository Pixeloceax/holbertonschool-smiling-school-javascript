// quotes section

$(document).ready(function () {
  $(".loader").show();
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    type: "GET",
    success: function (data) {
      $(".loader").hide();

      for (let i = 0; i < data.length; i++) {
        let quote = data[i];

        let quoteHTML = `<div class="carousel-item carousel-item-content">
                              <div class="row">
                                <div class="col-sm-3 text-center">
                                  <img
                                    class="rounded-circle"
                                    src="${quote.pic_url}"
                                    class="d-block w-100"
                                    alt="random person image"
                                  />
                                </div>
                                <div class="col-sm-8 ml-3 d-flex flex-column">
                                  <div>
                                    ${quote.text}
                                  </div>
                                  <div class="font-weight-bold mt-3">${quote.name}</div>
                                  <div>${quote.title}</div>
                                </div>
                              </div>
                            </div>`;
        $("#quotes-section").append(quoteHTML);
        $("#quotes-section .carousel-item:first-child").addClass("active");
      }
    },
  });
});
