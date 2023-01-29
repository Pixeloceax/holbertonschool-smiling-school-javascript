$(document).ready(function () {
  // quotes section [Home page, Pricing page]
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

  // video section [Home page]
  $(".loader").show();
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    type: "GET",
    success: function (data) {
      $(".loader").hide();

      for (let i = 0; i < data.length; i++) {
        let video = data[i];

        let star_on = `<img src="images/star_on.png" width="15" height="15" alt="Star on" loading="lazy" />`;
        let star_off = `<img src="images/star_off.png" width="15" height="15" alt="Star off" loading="lazy" />`;
        let stars = "";
        for (let j = 0; j < 5; j++) {
          if (j < video.star) {
            stars += star_on;
          } else {
            stars += star_off;
          }
        }
        video.star = stars;

        let videoHTML = `
        <div class="carousel-item">
        <div class="row justify-content-center">
          <div class="mx-1">
            <div class="card mx-auto my-3">
              <img class="card-img-top" src="${video.thumb_url}" alt="Tuto" />
              <img class="play-icon" src="images/play.png" alt="play" />
              <div class="card-body">
                <p class="font-weight-bold black-text">
                  ${video.title}<br />
                  <span class="text-secondary"
                    >${video.subtitle}</span
                  >
                </p>
                <div class="row justify-content-start">
                  <div class="col-2 pr-0">
                    <img
                      class="rounded-circle"
                      src="${video.author_pic_url}"
                      width="30"
                      height="30"
                      alt="Profile 1"
                      loading="lazy"
                    />
                  </div>
                  <div class="col mt-1 pl-0 purple-text font-weight-bold">
                    ${video.author}
                  </div>
                </div>
      
                <div class="row justify-content-between mt-2">
                  <div class="col">
                    ${video.star}
                  </div>
                  <div class="col-4 text-right font-weight-bold purple-text">
                    ${video.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
        $("#video-section").append(videoHTML);
      }
      $("#video-section .carousel-item:first-child").addClass("active");
    },
  });

  // Latest videos section
  $(".loader").show();
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    type: "GET",
    success: function (data) {
      $(".loader").hide();

      for (let i = 0; i < data.length; i++) {
        let video = data[i];

        let star_on = `<img src="images/star_on.png" width="15" height="15" alt="Star on" loading="lazy" />`;
        let star_off = `<img src="images/star_off.png" width="15" height="15" alt="Star off" loading="lazy" />`;
        let stars = "";
        for (let j = 0; j < 5; j++) {
          if (j < video.star) {
            stars += star_on;
          } else {
            stars += star_off;
          }
        }
        video.star = stars;

        let Latest_videosHTML = `<div class="carousel-item">
         <div class="row justify-content-center">
           <div class="mx-1">
             <div class="card mx-auto my-3">
               <img class="card-img-top" src="${video.thumb_url}" alt="Tuto" />
               <img class="play-icon" src="images/play.png" alt="play" />
               <div class="card-body">
                 <p class="font-weight-bold black-text">
                   ${video.title}<br />
                   <span class="text-secondary"
                     >${video.subtitle}</span
                   >
                 </p>
                 <div class="row justify-content-start">
                   <div class="col-2 pr-0">
                     <img
                       class="rounded-circle"
                       src="${video.author_pic_url}"
                       width="30"
                       height="30"
                       alt="Profile 1"
                       loading="lazy"
                     />
                   </div>
                   <div class="col mt-1 pl-0 purple-text font-weight-bold">
                     ${video.author}
                   </div>
                 </div>
       
                 <div class="row justify-content-between mt-2">
                   <div class="col">
                     ${video.star}
                   </div>
                   <div class="col-4 text-right font-weight-bold purple-text">
                     ${video.duration}
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>`;
        $("#Latest-videos-section").append(Latest_videosHTML);
      }
      $("#Latest-videos-section .carousel-item:first-child").addClass("active");
    },
  });

  // courses section
  $(".loader").show();
  $.ajax({
    url: "https://smileschool-api.hbtn.info/courses",
    type: "GET",
    data: {
      q: searchValue,
      topic: topicValue,
      sort: sortValue,
    },
    success: function (data) {
      $(".loader").hide();

      for (let i = 0; i < data.length; i++) {
        let course = data[i];

        let coursesHTML = `
        <div class="form-group col-md-12 col-lg-3">
          <label for="search-input">Keywords</label>
          <input
            class="form-control opacity-courses-section"
            id="search-input"
            type="text"
            placeholder=" Search by Keywords"
            aria-label="Search"
          />
        </div>
        <div class="form-group col-lg-3 col-md-6">
          <label for="select-input">Topic</label>
          <select
            class="form-control opacity-courses-section"
            id="pack-select"
          >
            <option class="text-dark font-weight-bold">Novice</option>
            <option class="text-dark font-weight-bold">Intermediate</option>
            <option class="text-dark font-weight-bold">Expert</option>
          </select>
        </div>
        <div class="form-group col-lg-3 col-md-6">
          <label for="select-input">Sort by</label>
          <select
            class="form-control opacity-courses-section"
            id="pack-select"
          >
            <option class="text-dark font-weight-bold">Most Popular</option>
            <option class="text-dark font-weight-bold">Most Recent</option>
            <option class="text-dark font-weight-bold">Most Viewed</option>
          </select>
        </div>
      `;
        $("#form").append(coursesHTML);
      }
    },
  });
});
