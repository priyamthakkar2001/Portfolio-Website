AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "AI-Powered E-commerce Platform",
    cardImage: "assets/images/project-page/HOH.jpg",
    description: "'House of Happiness' is an AI-driven bakery e-commerce platform that uses Hugging Face Stable Diffusion to generate realistic cake designs and a secure Flask backend for seamless ordering. It showcases my ability to integrate advanced AI features with reliable e-commerce functionality for an exceptional user experience.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://house-of-happiness.onrender.com/",
    Githublink: "",
  },
  {
    title: "Fashion Recommendation System",
    cardImage: "assets/images/project-page/fashion.jpg",
    description: "A webpage featuring a Fashion Recommendation System using EfficientNet B7 for visual searches and the CLIP model for text-based searches across 45,000+ images. Includes a Virtual Try-On System utilizing RapidAPI to superimpose apparel onto user-uploaded images with 95% accuracy.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://drive.google.com/file/d/18ukLCzEUUFksVfGDYkidrAzQNkz9lKsv/view",
    Githublink: "https://github.com/priyamthakkar2001/Fashion_Recommendation_and_VirtualTryon.git",
  },
  {
    title: "Deepfake Detection",
    cardImage: "assets/images/project-page/deepfake.png",
    description: "An Inception based Deep Learning Model to classify if the video conatins deepfakes, an interactive and user-friendly web interface to upload videos and test the model.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://drive.google.com/file/d/1oG3vcd1hFmR_b_4AarpNMJxlzY6SF9v6/view",
    Githublink: "https://github.com/priyamthakkar2001/SML-Project.git",
  },
  {
    title: "GatorDwelling",
    cardImage: "assets/images/project-page/GatorDwelling.png",
    description: "A web app integrated with ChatGPT API to filter and find best housing options in Gainesville, FL for students of University of Florida.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://drive.google.com/file/d/1G8DNDxY33dHPsxGNSLnReLCJMLlhPlip/view?usp=sharing&usp=embed_facebook",
    Githublink: "https://github.com/priyamthakkar/GatorDwelling2.git",
  },
  {
    title: "Polyp Classification and Segmentation",
    cardImage: "assets/images/project-page/Segmentation-polyp.png",
    description: "Deep Learning Models for classifying if the image contains Polyp, a classification model to detect the type of Polyps, and Segnet-based model to Segment the polyps in the image, and interactive and user friendly web interface to upload an image and test the model.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://drive.google.com/file/d/1g9cFDEmg--YC5F1qzGM3mjtHeePq2j4M/view?usp=sharing",
    Githublink: "https://github.com/priyamthakkar/Polyp-Project.git",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, description, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}); background-repeat:no-repeat; background-size: 100% 100%">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                <p class = "description">${description}</p>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
