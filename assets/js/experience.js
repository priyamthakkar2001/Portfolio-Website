AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/rice-logo.jpeg",
    place: "Rice University - Statistics for Data Science <br> Prof. Roberto Bertolusso",
    time: "(Aug, 2024 - Dec, 2024)",
    desp: "<li>Created and evaluated midterm and final exams for 20 students, ensuring alignment with course objectives and statistical concepts.</li><li>Graded 6 assignments and exams, provided constructive feedback and upheld consistent grading standards to support student learning.</li><li>Led 20 weekly TA sessions, offered personalized assistance on topics such as hypothesis testing, regression analysis, and data visualization.</li>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/affekta.jpg",
    place: "Affekta",
    time: "(May, 2024 - Aug, 2024)",
    desp: "<li> Created a website with React JS, Node JS, Express JS, and PostgreSQL and deployed it in Microsoft Azure.</li><li>Enhanced user engagement on Affekta's e-learning platform, Marvin, by gamifying the experience with skill trees and story-driven assignments using LLMs via OpenAI API.</li><li>Implemented secure user authentication and data management solutions.</li>",
  }, 
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/rice-logo.jpeg",
    place: "Rice University - Introduction to Computer Security <br> Prof. Mack Joyner",
    time: "(Jan, 2024 - May, 2024)",
    desp: "<li>Facilitate weekly tutorials, emphasising cryptography, network security, and ethical hacking.</li><li>Assisted in developing and grading assignments, enhancing students' understanding of computer security.</li><li>Provide personalised support during office hours, addressing academic and career queries.</li>",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/rice-logo.jpeg",
    place: "Rice University - Jones Graduate School of Business <br> Prof. Piyush Anand",
    time: "(Sept, 2023 - Dec, 2023)",
    desp: "<li>Scraped clinical datasets and implemented causal forest time-series analysis, processing 10,000+ data points to improve modeling accuracy by 20%.</li><li>Improved neural network training efficiency by 25% using TensorBoard and Weights & Biases, ensuring bias mitigation.</li><li>Collaborated effectively within a team environment, contributing to significant advancements in drug-testing applications.</li>",
  },
  {
    title: "Data Analytics Academic Intern",
    cardImage: "assets/images/experience-page/nus-logo.jpeg",
    place: "National University of Singapore",
    time: "(June, 2022 - July, 2022)",
    desp: "<li>Led a deep learning project with a team of 6 for Gastrointestinal Polyps Detection and Segmentation, achieving a 10% accuracy improvement over state-of-the-art models.</li><li>Engineered and deployed a demonstration website in Microsoft Azure, ensuring efficient and reliable deployment.</li>",
  },
  {
    title: "IoT Engineer Intern",
    cardImage: "assets/images/experience-page/intaf-logo.gif",
    place: "Industrial Tapes & Fabrics PVT LTD.",
    time: "(May, 2020 - July, 2020)",
    desp: "<li>Built an automation system with a Raspberry Pi that uses a thermocouple to measure the oven's temperature and adds the data to Google Sheets using Python, Adafruit Libraries, and the Google API at 60-second intervals.</li><li>Implemented a failover system that appends the readings to a CSV format in case of network failure and appends all the readings back to Google Sheets when the system is online, which prevents loss of data due to network failure.</li><li>Developed a frontend form using Python and frameworks like Tkinter to display the temperature readings of all ovens, and also allow manual entry of records from the employee's side, in case there is a failure in the system.</li>",
  },
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/piltover-logo.png",
    place: "Piltover Technologies",
    time: "(Oct, 2019 - Feb, 2020)",
    desp: "<li>Designed and developed a new website that is an integrated version of the two previously existing websites with a completely new design using HTML, CSS, Bootstrap, JavaScript, and PHP, which cut the cost of maintaining two websites simultaneously.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

