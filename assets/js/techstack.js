AOS.init();

// Skills grouped by categories

const skillCategories = {
  "Programming Languages": [
    { langImage: "assets/images/techstack-page/python.png", langName: "Python" },
    { langImage: "assets/images/techstack-page/r.png", langName: "R" },    
    { langImage: "assets/images/techstack-page/java.png", langName: "Java" },
    { langImage: "assets/images/techstack-page/c.png", langName: "C" },
    { langImage: "assets/images/techstack-page/cpp.png", langName: "C++" },
  ],
  "Big Data & Analytics": [
    { langImage: "assets/images/techstack-page/databricks.png", langName: "Databricks" },
    { langImage: "assets/images/techstack-page/tableau.png", langName: "Tableau" },
        { langImage: "assets/images/techstack-page/powerbi.png", langName: "Power BI" },
    { langImage: "assets/images/techstack-page/excel.png", langName: "MS Excel" },
    { langImage: "assets/images/techstack-page/spark.png", langName: "Apache Spark" },
    { langImage: "assets/images/techstack-page/airflow.png", langName: "Airflow" },
    { langImage: "assets/images/techstack-page/mlflow.png", langName: "MLflow" },
    { langImage: "assets/images/techstack-page/dvc.png", langName: "DVC" },
  ],
  "Libraries & Frameworks": [
    { langImage: "assets/images/techstack-page/numpy.png", langName: "Numpy" },
    { langImage: "assets/images/techstack-page/pandas.png", langName: "Pandas" },
    { langImage: "assets/images/techstack-page/scikit.png", langName: "Scikit-learn" },
    { langImage: "assets/images/techstack-page/pytorch.png", langName: "PyTorch" },
    { langImage: "assets/images/techstack-page/tensorflow.png", langName: "Tensorflow" },
    { langImage: "assets/images/techstack-page/matplotlib.png", langName: "Matplotlib" },
    { langImage: "assets/images/techstack-page/opencv.png", langName: "OpenCV" },
    { langImage: "assets/images/techstack-page/pyspark.png", langName: "PySpark" },
    { langImage: "assets/images/techstack-page/langchain.png", langName: "LangChain" },
    { langImage: "assets/images/techstack-page/huggingface.png", langName: "HuggingFace" },
    { langImage: "assets/images/techstack-page/bs.png", langName: "BeautifulSoup" },
  ],
  "Databases & Tools": [
    { langImage: "assets/images/techstack-page/mysql.png", langName: "MySQL" },
    { langImage: "assets/images/techstack-page/postgresql.png", langName: "PostgreSQL" },
    { langImage: "assets/images/techstack-page/mongodb.png", langName: "MongoDB" },
    { langImage: "assets/images/techstack-page/git.png", langName: "Git" },
    { langImage: "assets/images/techstack-page/latex.png", langName: "LATEX" },
    { langImage: "assets/images/techstack-page/linux.png", langName: "Linux/Unix" },
    { langImage: "assets/images/techstack-page/ms.png", langName: "Microsoft Suite" },
    { langImage: "assets/images/techstack-page/azure.png", langName: "Microsoft Azure" },
    { langImage: "assets/images/techstack-page/docker.png", langName: "Docker" },
    { langImage: "assets/images/techstack-page/kuburnetes.png", langName: "Kubernetes" },
    { langImage: "assets/images/techstack-page/jira.png", langName: "Jira" },
    { langImage: "assets/images/techstack-page/zustand.png", langName: "Zustand" },
  ],
  "Web Development Technologies": [
    { langImage: "assets/images/techstack-page/html.png", langName: "HTML" },
    { langImage: "assets/images/techstack-page/css.png", langName: "CSS" },
    { langImage: "assets/images/techstack-page/javascript.png", langName: "JavaScript" },
    { langImage: "assets/images/techstack-page/typescript.png", langName: "TypeScript" },
    { langImage: "assets/images/techstack-page/php.png", langName: "PHP" },
    { langImage: "assets/images/techstack-page/bootstrap.png", langName: "Bootstrap" },
    { langImage: "assets/images/techstack-page/flask.png", langName: "Flask" },
    { langImage: "assets/images/techstack-page/express.png", langName: "Express JS" },
    { langImage: "assets/images/techstack-page/react.png", langName: "React JS" },
    { langImage: "assets/images/techstack-page/node.png", langName: "Node JS" },
    { langImage: "assets/images/techstack-page/django.png", langName: "Django" },
  ],
};

const displaySkillsSections = () => {
  const techStackContainer = document.querySelector(".techstack-box");
  const entireSkillTemplate = Object.entries(skillCategories)
    .map(([category, skills]) => {
      const skillCards = skills
        .map(
          (skill) => `
      <div class="tech_card">
        <div class="card_img">
          <img src="${skill.langImage}" class="featured_image">
        </div>
        <div class="card_header">
          <header>
            <div class="text-center langName">
              <h4>${skill.langName}</h4>
            </div>
          </header>
        </div>
      </div>`
        )
        .join("");
      return `
    <section class="skill-section">
      <h3 class="text-center skill-category">${category}</h3>
      <div class="skill-cards-container">${skillCards}</div>
    </section>`;
    })
    .join("");

  techStackContainer.innerHTML = entireSkillTemplate;
};

document.addEventListener("DOMContentLoaded", displaySkillsSections);
