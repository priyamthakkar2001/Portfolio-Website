AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Mathematics-Basics to Advanced for Data Science And GenAI",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/certificate/UC-0a3f34e5-885a-4731-9dc6-d238ba08b2e8/",
  },
  {
    title: "Machine Learning with Python",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "http://coursera.org/verify/AUM6HN3UDQVK",
  },
  {
    title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/certificate/UC-f8ed42b1-613d-4794-85fc-f80666ec5b42/",
  },
  {
    title: "Convolutional Neural Networks",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/verify/SW6RH3UTSHYQ",
  },
  {
    title: "AI for Medical Diagnosis",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://coursera.org/verify/VX7746W4WQR8",
  },
  {
    title: "Introduction to Structured Query Language",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/TV3BYWSTERBD",
  },
  {
    title: "Introduction to Programming with MATLAB",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "http://coursera.org/verify/LQ93F6E7WYFF",
  },
  
  {
    title: "Software Processes and Agile Practices",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "http://coursera.org/verify/RQXGDJJTUKYB",
  },
  {
    title: "Symmetric Cryptography",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink:
      "http://coursera.org/verify/CDBDS5EG5QUD",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
