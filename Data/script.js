$(document).ready(function() {
  $('.ribbon a').each(function() {
    var tabText = $(this).text();
    var maxWords = 3;

    var words = tabText.split(' ');
    if (words.length > maxWords) {
      var truncatedText = words.slice(0, maxWords).join(' ');
      var remainingText = words.slice(maxWords).join(' ');

      $(this).html('<span class="truncated-text">' + truncatedText + '</span><span class="remaining-text">' + remainingText + '</span>');
    }
  });
});

$(document).ready(function() {
  $('.dropdown-btn').click(function() {
    $(this).toggleClass('active');
    var dropdownContent = $(this).next('.dropdown-content');
    dropdownContent.toggle();
  });
});

window.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const tabLinks = document.querySelectorAll(".gallery-link");

  // Show the first tab by default
  tabs[0].style.display = "block";
  tabLinks[0].classList.add("active");

  // Add click event listeners to tab links
  tabLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = this.getAttribute("href");

      // Hide all tabs and remove active class from links
      tabs.forEach(function(tab) {
        tab.style.display = "none";
      });
      tabLinks.forEach(function(link) {
        link.classList.remove("active");
      });

      // Show the clicked tab and add active class to the link
      document.querySelector(target).style.display = "block";
      this.classList.add("active");
    });
  });
});

// $(document).ready(function () {
//   const carouselContainer = $(".carousel-container");
//   const slideWidth = $(".carousel-slide").outerWidth();
//   let currentIndex = 0;

//   function nextSlide() {
//      currentIndex = (currentIndex + 1) % $(".carousel-slide img").length;
//      carouselContainer.css("transform", `translateX(-${currentIndex * slideWidth}px)`);

//      // Add 'active' class to current slide
//      $(".carousel-slide img").removeClass("active");
//      $(".carousel-slide img").eq(currentIndex).addClass("active");
//   }

//   setInterval(nextSlide, 2000); // Change slide every 2 seconds
// });
