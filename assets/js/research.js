/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "CrowdDCNN: Deep convolutional neural network for real-time crowd counting on IoT edge",
    authors:
      "Rugved Chavan, Aravind kanamarlapudi, Geeta Rani, Priyam Thakkar, Vijaypal Singh Dhaka",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/crowddcnn.png",
    citation: {
      vancouver:
        "Rugved Chavan, Aravind kanamarlapudi, Geeta Rani, Priyam Thakkar, Vijaypal Singh Dhaka, CrowdDCNN: Deep convolution neural network for real-time crowd counting on IoT edge,<br>Engineering Applications of Artificial Intelligence,<br>Volume 126, Part D,<br>2023,<br>107089,<br>ISSN 0952-1976,<br>https://doi.org/10.1016/j.engappai.2023.107089.<br>(https://www.sciencedirect.com/science/article/pii/S0952197623012733)",
    },
    abstract:
      "Ensuring the safety and security of crowded places is a major concern for both the government and the public. Accurately and quickly estimating the number of people in a crowd is crucial for public safety, urban planning, and traffic monitoring. The existing methods have a minimum mean square error of 0.89 and require high storage space, making them inappropriate for crowd counting using low-computation and small-storage devices like single-board computers. Furthermore, these methods suffer from prediction time lag and are not suitable for live streaming. To tackle these challenges, this paper proposes a Deep Convolution Neural Network-based ‘CrowdDCNN’ model for crowd counting. This model reduces the value of mean square error by 0.29 and the size of the model by 80.01%. Additionally, the prediction time was decreased to 700 ms. Further, the ‘NoLag’ algorithm introduced in this paper is efficient in live crowd counting. Its O(1) time and space complexity make it appropriate for all devices, including single-board computers, laptops, and GPUs. The reported 0-p value during statistical analysis using Wilcoxon test, Friedman rank test, and paired t-test validates the superiority of the proposed model.",
    absbox: "absPopup1",
  },

  {
    title: "KUB-UNet: Segmentation of Organs of Urinary System from a KUB X-ray Image",
    authors:
      "Geeta Rani, Priyam Thakkar, Akshat Verma, Vanshika Mehta, Rugved Chavan, Vijaypal Singh Dhaka",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/kub.jpeg",
    citation: {
      vancouver:
        "Geeta Rani, Priyam Thakkar, Akshat Verma, Vanshika Mehta, Rugved Chavan, Vijaypal Singh Dhaka, Ravindra Kumar Sharma, Eugenio Vocaturo, Ester Zumpano,<br>KUB-UNet: Segmentation of Organs of Urinary System from a KUB X-ray Image,<br>Computer Methods and Programs in Biomedicine,<br>Volume 224,<br>2022,<br>107031,<br>ISSN 0169-2607,<br>https://doi.org/10.1016/j.cmpb.2022.107031.<br>(https://www.sciencedirect.com/science/article/pii/S0169260722004138)",
    },
    abstract:
      "The alarming increase in diseases of urinary system is a cause of concern for the populace and health experts. The traditional techniques used for the diagnosis of these diseases are inconvenient for patients, require high cost, and additional waiting time for generating the reports. The objective of this research is to utilize the proven potential of Artificial Intelligence for organ segmentation. Correct identification and segmentation of the region of interest in a medical image are important to enhance the accuracy of disease diagnosis. Also, it improves the reliability of the system by ensuring the extraction of features only from the region of interest.",
    absbox: "absPopup2",
  },
];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> <b>Title:</b> ${title} </a> 
                    <div class = "authors">Authors: ${authors} </div> 
                    
                    <div class="rConferences">
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
