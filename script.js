const careers = {
    data: {
        name: "Data Analyst",
        skills: [
            "Python",
            "SQL",
            "Excel",
            "Power BI",
            "Statistics",
            "Data Visualization"
        ]
    },

    web: {
        name: "Web Developer",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Responsive Design"
        ]
    },

    ai: {
        name: "AI / ML Engineer",
        skills: [
            "Python",
            "Machine Learning",
            "Statistics",
            "NumPy",
            "Pandas",
            "TensorFlow"
        ]
    },

    cyber: {
        name: "Cybersecurity Analyst",
        skills: [
            "Networking",
            "Linux",
            "Python",
            "Cybersecurity Fundamentals",
            "SIEM",
            "Cryptography"
        ]
    },

    devops: {
        name: "DevOps Engineer",
        skills: [
            "Linux",
            "Docker",
            "Kubernetes",
            "Git",
            "AWS",
            "CI/CD",
            "Terraform",
            "Python"
        ]
    },

    design: {
        name: "UX / UI Designer",
        skills: [
            "Figma",
            "Wireframing",
            "Prototyping",
            "User Research",
            "Usability Testing",
            "Responsive Design"
        ]
    },

    product: {
        name: "Product Manager",
        skills: [
            "Agile",
            "Roadmapping",
            "Market Research",
            "SQL",
            "Data Visualization",
            "Wireframing"
        ]
    },

    mobile: {
        name: "Mobile App Developer",
        skills: [
            "Kotlin",
            "Swift",
            "Flutter",
            "React Native",
            "Java",
            "Git"
        ]
    },

    datasci: {
        name: "Data Scientist",
        skills: [
            "Python",
            "Statistics",
            "Machine Learning",
            "Pandas",
            "NumPy",
            "SQL",
            "Data Visualization"
        ]
    },

    dataeng: {
        name: "Data Engineer",
        skills: [
            "SQL",
            "Python",
            "ETL",
            "Apache Spark",
            "Data Warehousing",
            "AWS"
        ]
    },

    cloud: {
        name: "Cloud Engineer",
        skills: [
            "AWS",
            "Azure",
            "Linux",
            "Networking",
            "Terraform",
            "Docker"
        ]
    },

    game: {
        name: "Game Developer",
        skills: [
            "C++",
            "C#",
            "Unity",
            "Unreal Engine",
            "Game Design",
            "3D Modeling"
        ]
    },

    marketing: {
        name: "Digital Marketing Specialist",
        skills: [
            "SEO",
            "Google Analytics",
            "Content Marketing",
            "Social Media Marketing",
            "Copywriting",
            "Excel"
        ]
    },

    qa: {
        name: "QA / Test Automation Engineer",
        skills: [
            "Selenium",
            "Python",
            "Java",
            "Test Automation",
            "Manual Testing",
            "Git"
        ]
    },

    blockchain: {
        name: "Blockchain Developer",
        skills: [
            "Solidity",
            "Smart Contracts",
            "Ethereum",
            "JavaScript",
            "Cryptography",
            "Git"
        ]
    },

    business: {
        name: "Business Analyst",
        skills: [
            "SQL",
            "Excel",
            "Data Visualization",
            "Requirements Gathering",
            "Stakeholder Management",
            "Statistics"
        ]
    }
};


// ===============================
// SKILL ALIASES
// ===============================

const skillAliases = {
    "py": "Python",
    "python programming": "Python",
    "python language": "Python",

    "js": "JavaScript",
    "javascript": "JavaScript",
    "javascript programming": "JavaScript",

    "reactjs": "React",
    "react.js": "React",
    "react js": "React",

    "html5": "HTML",
    "html": "HTML",

    "css3": "CSS",
    "css": "CSS",

    "github": "Git",
    "git hub": "Git",

    "powerbi": "Power BI",
    "power bi": "Power BI",

    "data viz": "Data Visualization",
    "data visualization": "Data Visualization",

    "stats": "Statistics",
    "statistics": "Statistics",

    "ml": "Machine Learning",
    "machine learning": "Machine Learning",
    "machinelearning": "Machine Learning",

    "numpy": "NumPy",
    "np": "NumPy",

    "pandas": "Pandas",

    "tensorflow": "TensorFlow",
    "tf": "TensorFlow",

    "network": "Networking",
    "networking": "Networking",

    "cyber security": "Cybersecurity Fundamentals",
    "cybersecurity": "Cybersecurity Fundamentals",
    "cybersecurity basics": "Cybersecurity Fundamentals",

    "security information event management": "SIEM",

    "crypto": "Cryptography",
    "cryptography": "Cryptography",

    "linux os": "Linux",
    "linux": "Linux",

    "docker": "Docker",
    "containers": "Docker",
    "containerization": "Docker",

    "k8s": "Kubernetes",
    "kubernetes": "Kubernetes",

    "aws": "AWS",
    "amazon web services": "AWS",

    "azure": "Azure",
    "microsoft azure": "Azure",

    "ci/cd": "CI/CD",
    "cicd": "CI/CD",
    "ci cd": "CI/CD",
    "continuous integration": "CI/CD",
    "continuous deployment": "CI/CD",

    "terraform": "Terraform",
    "iac": "Terraform",
    "infrastructure as code": "Terraform",

    "figma": "Figma",
    "wireframes": "Wireframing",
    "wireframing": "Wireframing",
    "prototyping": "Prototyping",
    "prototype": "Prototyping",
    "user research": "User Research",
    "ux research": "User Research",
    "usability testing": "Usability Testing",
    "usability": "Usability Testing",

    "agile": "Agile",
    "scrum": "Agile",
    "roadmapping": "Roadmapping",
    "roadmap": "Roadmapping",
    "product roadmap": "Roadmapping",
    "market research": "Market Research",

    "kotlin": "Kotlin",
    "swift": "Swift",
    "flutter": "Flutter",
    "dart": "Flutter",
    "react native": "React Native",
    "reactnative": "React Native",

    "etl": "ETL",
    "extract transform load": "ETL",
    "spark": "Apache Spark",
    "apache spark": "Apache Spark",
    "pyspark": "Apache Spark",
    "data warehousing": "Data Warehousing",
    "data warehouse": "Data Warehousing",

    "unity": "Unity",
    "unity3d": "Unity",
    "unreal": "Unreal Engine",
    "unreal engine": "Unreal Engine",
    "game design": "Game Design",
    "3d modeling": "3D Modeling",
    "3d modelling": "3D Modeling",

    "seo": "SEO",
    "search engine optimization": "SEO",
    "google analytics": "Google Analytics",
    "ga4": "Google Analytics",
    "content marketing": "Content Marketing",
    "social media marketing": "Social Media Marketing",
    "smm": "Social Media Marketing",
    "copywriting": "Copywriting",

    "selenium": "Selenium",
    "test automation": "Test Automation",
    "automation testing": "Test Automation",
    "manual testing": "Manual Testing",
    "qa testing": "Manual Testing",

    "solidity": "Solidity",
    "smart contracts": "Smart Contracts",
    "smart contract": "Smart Contracts",
    "ethereum": "Ethereum",
    "web3": "Ethereum",

    "requirements gathering": "Requirements Gathering",
    "business requirements": "Requirements Gathering",
    "stakeholder management": "Stakeholder Management"
};


// ==========================================
// SKILL TAG INPUT
// ==========================================

const allSkills = [
    "Java", "Python", "C", "C++", "C#", "HTML", "CSS", "JavaScript",
    "React", "Git", "GitHub", "SQL", "Excel", "Power BI", "Statistics",
    "Data Visualization", "Machine Learning", "NumPy", "Pandas", "TensorFlow",
    "Networking", "Linux", "Cybersecurity Fundamentals", "SIEM", "Cryptography",
    "Responsive Design", "Docker", "Kubernetes", "AWS", "Azure", "CI/CD",
    "Terraform", "Figma", "Wireframing", "Prototyping", "User Research",
    "Usability Testing", "Agile", "Roadmapping", "Market Research", "Kotlin",
    "Swift", "Flutter", "React Native", "ETL", "Apache Spark", "Data Warehousing",
    "Unity", "Unreal Engine", "Game Design", "3D Modeling", "SEO", "Google Analytics",
    "Content Marketing", "Social Media Marketing", "Copywriting", "Selenium",
    "Test Automation", "Manual Testing", "Solidity", "Smart Contracts",
    "Ethereum", "Requirements Gathering", "Stakeholder Management"
];

let selectedSkills = [];

const skillInput = document.getElementById("skillInput");
const skillTags = document.getElementById("skillTags");
const suggestions = document.getElementById("suggestions");


// ==========================================
// TYPING
// ==========================================

skillInput.addEventListener("input", function () {
    const value = skillInput.value.trim().toLowerCase();
    suggestions.innerHTML = "";

    if (value === "") {
        suggestions.style.display = "none";
        return;
    }

    const matches = allSkills.filter(skill =>
        skill.toLowerCase().includes(value) &&
        !selectedSkills.includes(skill)
    );

    if (matches.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    matches.forEach(skill => {
        const suggestion = document.createElement("div");
        suggestion.className = "suggestion-item";
        suggestion.textContent = skill;

        suggestion.addEventListener("click", function () {
            addSkill(skill);
        });

        suggestions.appendChild(suggestion);
    });

    suggestions.style.display = "block";
});


// ==========================================
// ENTER KEY
// ==========================================

skillInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const value = skillInput.value.trim();

        if (value === "") return;

        const match = allSkills.find(skill =>
            skill.toLowerCase() === value.toLowerCase()
        );

        if (match) {
            addSkill(match);
        } else {
            addSkill(value);
        }
    }
});


// ==========================================
// ADD / REMOVE SKILLS
// ==========================================

function addSkill(skill) {
    if (selectedSkills.includes(skill)) return;

    selectedSkills.push(skill);
    renderTags();

    skillInput.value = "";
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    skillInput.focus();
}

function renderTags() {
    skillTags.innerHTML = "";

    selectedSkills.forEach((skill, index) => {
        const tag = document.createElement("span");
        tag.className = "skill-input-tag";
        tag.innerHTML = `
            ${skill}
            <button onclick="removeSkill(${index})">×</button>
        `;
        skillTags.appendChild(tag);
    });
}

function removeSkill(index) {
    selectedSkills.splice(index, 1);
    renderTags();
    skillInput.focus();
}


// ===============================
// ENHANCED LEARNING ROADMAP METADATA
// ===============================

const learning = {
    "Python": {
        category: "Programming",
        difficulty: "Beginner",
        priority: "High",
        time: "3-4 weeks",
        project: "Build an Automated Web Scraper or CLI Expense Tracker",
        description: "Learn Python syntax, data structures, functions, and standard libraries.",
        url: "https://www.youtube.com/results?search_query=python+for+beginners"
    },
    "SQL": {
        category: "Databases",
        difficulty: "Beginner",
        priority: "High",
        time: "2 weeks",
        project: "Design a Student Database & Query Sales Reports",
        description: "Master SELECT queries, JOINs, aggregations, and subqueries.",
        url: "https://www.youtube.com/results?search_query=SQL+for+beginners"
    },
    "Excel": {
        category: "Data Analysis",
        difficulty: "Beginner",
        priority: "Medium",
        time: "1-2 weeks",
        project: "Create an Interactive Financial Budget Dashboard",
        description: "Master Pivot Tables, VLOOKUP/XLOOKUP, and nested formulas.",
        url: "https://www.youtube.com/results?search_query=Excel+data+analysis+for+beginners"
    },
    "Power BI": {
        category: "Data Visualization",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "2-3 weeks",
        project: "Build an Executive Sales Performance Dashboard",
        description: "Learn DAX formulas, data modeling, and interactive reports.",
        url: "https://www.youtube.com/results?search_query=Power+BI+for+beginners"
    },
    "Statistics": {
        category: "Analytics",
        difficulty: "Intermediate",
        priority: "High",
        time: "3 weeks",
        project: "Perform Hypothesis Testing on A/B Test Dataset",
        description: "Learn probability distributions, hypothesis testing, and confidence intervals.",
        url: "https://www.youtube.com/results?search_query=statistics+for+data+science"
    },
    "Data Visualization": {
        category: "Analytics",
        difficulty: "Beginner",
        priority: "Medium",
        time: "1-2 weeks",
        project: "Redesign a Complex Dataset into Clear Charts",
        description: "Learn visual hierarchy, chart selection, and storytelling with data.",
        url: "https://www.youtube.com/results?search_query=data+visualization+for+beginners"
    },
    "HTML": {
        category: "Frontend",
        difficulty: "Beginner",
        priority: "High",
        time: "1 week",
        project: "Build a Personal Portfolio Landing Page",
        description: "Learn semantic tags, forms, accessibility, and page structuring.",
        url: "https://www.youtube.com/results?search_query=HTML+for+beginners"
    },
    "CSS": {
        category: "Frontend",
        difficulty: "Beginner",
        priority: "High",
        time: "2 weeks",
        project: "Style a Responsive Product Showcase Page",
        description: "Master Flexbox, Grid layouts, animations, and CSS variables.",
        url: "https://www.youtube.com/results?search_query=CSS+for+beginners"
    },
    "JavaScript": {
        category: "Programming",
        difficulty: "Intermediate",
        priority: "High",
        time: "4 weeks",
        project: "Build an Interactive Weather Dashboard with API Fetching",
        description: "Master ES6+ syntax, DOM manipulation, Async/Await, and APIs.",
        url: "https://www.youtube.com/results?search_query=JavaScript+for+beginners"
    },
    "React": {
        category: "Frontend",
        difficulty: "Intermediate",
        priority: "High",
        time: "3-4 weeks",
        project: "Build an E-Commerce Cart with State Management",
        description: "Learn JSX, components, props, hooks, and Context API.",
        url: "https://www.youtube.com/results?search_query=React+for+beginners"
    },
    "Git": {
        category: "DevTools",
        difficulty: "Beginner",
        priority: "High",
        time: "1 week",
        project: "Publish an Open Source Repo with Branching Strategy",
        description: "Learn commit workflows, branching, merging, and resolving conflicts.",
        url: "https://www.youtube.com/results?search_query=Git+and+GitHub+for+beginners"
    },
    "Responsive Design": {
        category: "Frontend",
        difficulty: "Beginner",
        priority: "Medium",
        time: "1 week",
        project: "Convert a Desktop Design to Mobile-First CSS Layout",
        description: "Learn media queries, fluid typography, and touch target sizing.",
        url: "https://www.youtube.com/results?search_query=responsive+web+design+for+beginners"
    },
    "Machine Learning": {
        category: "AI / ML",
        difficulty: "Advanced",
        priority: "High",
        time: "5-6 weeks",
        project: "Train a Housing Price Prediction Model with Scikit-Learn",
        description: "Learn supervised/unsupervised learning, regression, and model evaluation.",
        url: "https://www.youtube.com/results?search_query=machine+learning+for+beginners"
    },
    "NumPy": {
        category: "Data Science",
        difficulty: "Beginner",
        priority: "Medium",
        time: "1 week",
        project: "Perform Matrix Operations & Vectorized Calculations",
        description: "Learn N-dimensional arrays, slicing, broadcasting, and linear algebra.",
        url: "https://www.youtube.com/results?search_query=NumPy+for+beginners"
    },
    "Pandas": {
        category: "Data Science",
        difficulty: "Intermediate",
        priority: "High",
        time: "2 weeks",
        project: "Clean & Transform a Messy E-Commerce Dataset",
        description: "Master DataFrames, Series, missing data handling, and GroupBy operations.",
        url: "https://www.youtube.com/results?search_query=Pandas+Python+for+beginners"
    },
    "TensorFlow": {
        category: "AI / ML",
        difficulty: "Advanced",
        priority: "Medium",
        time: "4 weeks",
        project: "Build an Image Classification Convolutional Neural Network",
        description: "Learn deep learning, neural network layers, loss functions, and Keras API.",
        url: "https://www.youtube.com/results?search_query=TensorFlow+for+beginners"
    },
    "Networking": {
        category: "IT / Infrastructure",
        difficulty: "Intermediate",
        priority: "High",
        time: "3 weeks",
        project: "Configure Subnets & Analyze Packets using Wireshark",
        description: "Learn TCP/IP, OSI model, DNS, DHCP, routing, and switching.",
        url: "https://www.youtube.com/results?search_query=computer+networking+for+beginners"
    },
    "Linux": {
        category: "Operating Systems",
        difficulty: "Beginner",
        priority: "High",
        time: "2 weeks",
        project: "Set Up a Headless Linux Server with Bash Scripting",
        description: "Master shell commands, file permissions, users, and service management.",
        url: "https://www.youtube.com/results?search_query=Linux+for+beginners"
    },
    "Cybersecurity Fundamentals": {
        category: "Security",
        difficulty: "Beginner",
        priority: "High",
        time: "2-3 weeks",
        project: "Conduct a Vulnerability Assessment on a Test Network",
        description: "Understand threat vectors, CIA triad, authentication, and security frameworks.",
        url: "https://www.youtube.com/results?search_query=cybersecurity+for+beginners"
    },
    "SIEM": {
        category: "Security",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "2-3 weeks",
        project: "Set Up Security Monitoring in Splunk / Elastic SIEM",
        description: "Learn log aggregation, alert rules creation, and incident response tracking.",
        url: "https://www.youtube.com/results?search_query=SIEM+for+beginners"
    },
    "Cryptography": {
        category: "Security",
        difficulty: "Advanced",
        priority: "Medium",
        time: "3 weeks",
        project: "Implement Symmetric & Asymmetric Encryption Scripts",
        description: "Understand SSL/TLS, RSA, AES, hashing algorithms, and PKI.",
        url: "https://www.youtube.com/results?search_query=cryptography+for+beginners"
    },
    "Docker": {
        category: "DevOps",
        difficulty: "Intermediate",
        priority: "High",
        time: "2 weeks",
        project: "Containerize a Multi-Container Node + MongoDB App",
        description: "Learn Dockerfiles, images, containers, volumes, and Docker Compose.",
        url: "https://www.youtube.com/results?search_query=Docker+for+beginners"
    },
    "Kubernetes": {
        category: "DevOps",
        difficulty: "Advanced",
        priority: "Medium",
        time: "4 weeks",
        project: "Deploy an Auto-Scaling App Cluster on Minikube",
        description: "Master Pods, Deployments, Services, Ingress, and ConfigMaps.",
        url: "https://www.youtube.com/results?search_query=Kubernetes+for+beginners"
    },
    "AWS": {
        category: "Cloud",
        difficulty: "Intermediate",
        priority: "High",
        time: "3-4 weeks",
        project: "Host a Serverless Web App using S3, Lambda, & DynamoDB",
        description: "Learn EC2, S3, IAM, CloudFront, Lambda, and VPC architecture.",
        url: "https://www.youtube.com/results?search_query=AWS+for+beginners"
    },
    "Azure": {
        category: "Cloud",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "3-4 weeks",
        project: "Deploy Azure Virtual Machines & Web Services",
        description: "Learn Azure App Service, Blob Storage, Azure AD, and VNets.",
        url: "https://www.youtube.com/results?search_query=Azure+for+beginners"
    },
    "CI/CD": {
        category: "DevOps",
        difficulty: "Intermediate",
        priority: "High",
        time: "2 weeks",
        project: "Build a GitHub Actions Pipeline for Automated Testing & Deployment",
        description: "Automate build, test, and release workflows with pipeline scripts.",
        url: "https://www.youtube.com/results?search_query=CI+CD+pipeline+for+beginners"
    },
    "Terraform": {
        category: "DevOps",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "2 weeks",
        project: "Provision an AWS VPC & EC2 Instance using HCL Scripts",
        description: "Master Infrastructure as Code (IaC), state management, and modules.",
        url: "https://www.youtube.com/results?search_query=Terraform+for+beginners"
    },
    "Figma": {
        category: "Design",
        difficulty: "Beginner",
        priority: "High",
        time: "2 weeks",
        project: "Design a High-Fidelity Mobile App Concept with Components",
        description: "Master auto-layout, design systems, variants, and interactive prototyping.",
        url: "https://www.youtube.com/results?search_query=Figma+for+beginners"
    },
    "Wireframing": {
        category: "Design",
        difficulty: "Beginner",
        priority: "High",
        time: "1 week",
        project: "Sketch Low-Fidelity Wireframes for a Travel Booking App",
        description: "Learn spatial distribution, user flow mapping, and low-res layouts.",
        url: "https://www.youtube.com/results?search_query=wireframing+for+beginners"
    },
    "Prototyping": {
        category: "Design",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "1-2 weeks",
        project: "Build an Interactive Micro-Interaction Prototype",
        description: "Master screen transitions, smart animations, and interactive component states.",
        url: "https://www.youtube.com/results?search_query=UX+prototyping+for+beginners"
    },
    "User Research": {
        category: "Design",
        difficulty: "Intermediate",
        priority: "High",
        time: "2 weeks",
        project: "Conduct User Interviews & Synthesize an Affinity Diagram",
        description: "Learn qualitative research, interview techniques, user personas, and journeys.",
        url: "https://www.youtube.com/results?search_query=UX+user+research+for+beginners"
    },
    "Usability Testing": {
        category: "Design",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "1 week",
        project: "Run a Moderated Usability Test on 5 Users & Report Insights",
        description: "Formulate task scenarios, record observations, and report usability metrics.",
        url: "https://www.youtube.com/results?search_query=usability+testing+for+beginners"
    },
    "Agile": {
        category: "Management",
        difficulty: "Beginner",
        priority: "High",
        time: "1 week",
        project: "Manage a Mock Product Backlog with Jira / Trello Sprints",
        description: "Understand Scrum roles, sprint planning, user stories, and retrospectives.",
        url: "https://www.youtube.com/results?search_query=Agile+Scrum+for+beginners"
    },
    "Roadmapping": {
        category: "Management",
        difficulty: "Intermediate",
        priority: "High",
        time: "1-2 weeks",
        project: "Create a Strategic 6-Month Product Roadmap",
        description: "Learn feature prioritization frameworks (RICE, MoSCoW) and vision mapping.",
        url: "https://www.youtube.com/results?search_query=product+roadmap+for+beginners"
    },
    "Market Research": {
        category: "Business",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "2 weeks",
        project: "Write a Competitive Analysis Report on a Tech Industry Segment",
        description: "Learn TAM/SAM/SOM sizing, competitor matrix design, and industry trends.",
        url: "https://www.youtube.com/results?search_query=market+research+for+beginners"
    },
    "Kotlin": {
        category: "Mobile",
        difficulty: "Intermediate",
        priority: "High",
        time: "3-4 weeks",
        project: "Build a Native Android Notes App with Room DB",
        description: "Learn Kotlin basics, Android Jetpack components, and Material Design.",
        url: "https://www.youtube.com/results?search_query=Kotlin+for+beginners"
    },
    "Swift": {
        category: "Mobile",
        difficulty: "Intermediate",
        priority: "High",
        time: "3-4 weeks",
        project: "Build a Native iOS Habit Tracker App using SwiftUI",
        description: "Learn Swift language basics, SwiftUI, CoreData, and App Store submission.",
        url: "https://www.youtube.com/results?search_query=Swift+for+beginners"
    },
    "Flutter": {
        category: "Mobile",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "3 weeks",
        project: "Build a Cross-Platform E-Commerce Mobile App",
        description: "Learn Dart programming, Flutter widgets, state management (Provider/Riverpod).",
        url: "https://www.youtube.com/results?search_query=Flutter+for+beginners"
    },
    "React Native": {
        category: "Mobile",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "3 weeks",
        project: "Build a Social Media Feed Mobile App with Expo",
        description: "Learn cross-platform mobile components, navigation, and native APIs.",
        url: "https://www.youtube.com/results?search_query=React+Native+for+beginners"
    },
    "ETL": {
        category: "Data Engineering",
        difficulty: "Intermediate",
        priority: "High",
        time: "3 weeks",
        project: "Build an Automated Data Pipeline Extracting API Data to SQL",
        description: "Learn data extraction, transformation scripts, scheduling (Airflow), and loading.",
        url: "https://www.youtube.com/results?search_query=ETL+pipelines+for+beginners"
    },
    "Apache Spark": {
        category: "Data Engineering",
        difficulty: "Advanced",
        priority: "Medium",
        time: "4 weeks",
        project: "Process 1M+ Records in Parallel using PySpark DataFrames",
        description: "Master distributed computing, Spark SQL, RDDs, and PySpark API.",
        url: "https://www.youtube.com/results?search_query=Apache+Spark+for+beginners"
    },
    "Data Warehousing": {
        category: "Data Engineering",
        difficulty: "Intermediate",
        priority: "High",
        time: "2-3 weeks",
        project: "Design a Star Schema Model in Snowflake / Redshift",
        description: "Learn dimensional modeling, fact/dimension tables, and OLAP concepts.",
        url: "https://www.youtube.com/results?search_query=data+warehousing+for+beginners"
    },
    "Unity": {
        category: "Game Dev",
        difficulty: "Intermediate",
        priority: "High",
        time: "4 weeks",
        project: "Build a 2D Platformer Game with Complete Scoring Systems",
        description: "Learn Unity interface, C# scripting, physics, and game mechanics.",
        url: "https://www.youtube.com/results?search_query=Unity+game+development+for+beginners"
    },
    "Unreal Engine": {
        category: "Game Dev",
        difficulty: "Advanced",
        priority: "Medium",
        time: "5 weeks",
        project: "Build a 3D First-Person Environment with Blueprint Systems",
        description: "Master Unreal Engine UI, Visual Blueprints, lighting, and C++ plugins.",
        url: "https://www.youtube.com/results?search_query=Unreal+Engine+for+beginners"
    },
    "Game Design": {
        category: "Game Dev",
        difficulty: "Beginner",
        priority: "High",
        time: "2 weeks",
        project: "Write a Game Design Document (GDD) for an Indie Concept",
        description: "Learn game loops, player motivation, pacing, level balance, and feedback.",
        url: "https://www.youtube.com/results?search_query=game+design+for+beginners"
    },
    "3D Modeling": {
        category: "Game Dev",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "3-4 weeks",
        project: "Model, Texture, and UV Map Low-Poly Game Assets in Blender",
        description: "Learn mesh editing, texturing, UV unwrapping, and rigging basics.",
        url: "https://www.youtube.com/results?search_query=3D+modeling+for+beginners"
    },
    "SEO": {
        category: "Marketing",
        difficulty: "Beginner",
        priority: "High",
        time: "2 weeks",
        project: "Perform an On-Page & Technical SEO Audit on a Live Website",
        description: "Learn keyword research, technical SEO, backlinks, and search intents.",
        url: "https://www.youtube.com/results?search_query=SEO+for+beginners"
    },
    "Google Analytics": {
        category: "Marketing",
        difficulty: "Intermediate",
        priority: "High",
        time: "1-2 weeks",
        project: "Configure GA4 Conversion Events & Custom Dashboards",
        description: "Understand event tracking, user funnels, acquisition paths, and GA4 reports.",
        url: "https://www.youtube.com/results?search_query=Google+Analytics+for+beginners"
    },
    "Content Marketing": {
        category: "Marketing",
        difficulty: "Beginner",
        priority: "Medium",
        time: "1-2 weeks",
        project: "Develop a Quarterly Content Strategy & Editorial Calendar",
        description: "Learn content creation frameworks, topic clusters, and content distribution.",
        url: "https://www.youtube.com/results?search_query=content+marketing+for+beginners"
    },
    "Social Media Marketing": {
        category: "Marketing",
        difficulty: "Beginner",
        priority: "Medium",
        time: "1-2 weeks",
        project: "Run & Analyze a Paid Social Campaign on Meta / LinkedIn",
        description: "Learn ad targeting, copy testing, ROI calculation, and brand positioning.",
        url: "https://www.youtube.com/results?search_query=social+media+marketing+for+beginners"
    },
    "Copywriting": {
        category: "Marketing",
        difficulty: "Beginner",
        priority: "High",
        time: "1 week",
        project: "Write a Landing Page Copy Suite using PAS / AIDA Frameworks",
        description: "Learn persuasive writing, value propositions, and calls to action.",
        url: "https://www.youtube.com/results?search_query=copywriting+for+beginners"
    },
    "Selenium": {
        category: "QA Automation",
        difficulty: "Intermediate",
        priority: "High",
        time: "2-3 weeks",
        project: "Build an Automated E-Commerce Checkout Test Suite",
        description: "Learn WebDriver locator strategies, assertions, and test script design.",
        url: "https://www.youtube.com/results?search_query=Selenium+for+beginners"
    },
    "Test Automation": {
        category: "QA Automation",
        difficulty: "Intermediate",
        priority: "High",
        time: "3 weeks",
        project: "Build a Page Object Model (POM) Automation Framework",
        description: "Master test framework architecture, reporting, and CI integration.",
        url: "https://www.youtube.com/results?search_query=test+automation+for+beginners"
    },
    "Manual Testing": {
        category: "QA Automation",
        difficulty: "Beginner",
        priority: "High",
        time: "1 week",
        project: "Write Comprehensive Test Cases & Defect Reports for an App",
        description: "Learn software testing lifecycles (STLC), bug tracking, and boundary testing.",
        url: "https://www.youtube.com/results?search_query=manual+testing+for+beginners"
    },
    "Solidity": {
        category: "Blockchain",
        difficulty: "Advanced",
        priority: "High",
        time: "3-4 weeks",
        project: "Develop & Deploy an ERC-20 Token Smart Contract",
        description: "Master Solidity syntax, contract state, inheritance, and security patterns.",
        url: "https://www.youtube.com/results?search_query=Solidity+for+beginners"
    },
    "Smart Contracts": {
        category: "Blockchain",
        difficulty: "Advanced",
        priority: "High",
        time: "3 weeks",
        project: "Audit a Vulnerable Smart Contract for Reentrancy Attacks",
        description: "Learn gas optimization, security vulnerabilities, testing frameworks (Hardhat).",
        url: "https://www.youtube.com/results?search_query=smart+contracts+for+beginners"
    },
    "Ethereum": {
        category: "Blockchain",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "2 weeks",
        project: "Build a Web3 Frontend Connecting MetaMask to a Contract",
        description: "Understand EVM, gas mechanics, transactions, and Web3.js / Ethers.js integration.",
        url: "https://www.youtube.com/results?search_query=Ethereum+blockchain+for+beginners"
    },
    "Requirements Gathering": {
        category: "Business Analysis",
        difficulty: "Beginner",
        priority: "High",
        time: "1-2 weeks",
        project: "Produce a Business Requirements Document (BRD) for a Feature",
        description: "Learn elicitation methods, scope mapping, functional vs non-functional requirements.",
        url: "https://www.youtube.com/results?search_query=requirements+gathering+for+beginners"
    },
    "Stakeholder Management": {
        category: "Business Analysis",
        difficulty: "Intermediate",
        priority: "Medium",
        time: "1 week",
        project: "Create a Power/Interest Stakeholder Matrix & Communication Plan",
        description: "Master communication strategies, expectations alignment, and conflict resolution.",
        url: "https://www.youtube.com/results?search_query=stakeholder+management+for+beginners"
    }
};


// ===============================
// NORMALIZE USER INPUT
// ===============================

function normalizeSkill(skill) {
    skill = skill.trim().toLowerCase();
    skill = skill.replace(/[()]/g, "");

    if (skillAliases[skill]) {
        return skillAliases[skill];
    }

    for (const officialSkill of Object.keys(skillAliases)) {
        if (skill === officialSkill.toLowerCase()) {
            return skillAliases[officialSkill];
        }
    }

    return skill
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


// ===============================
// ANALYZE SKILLS & RENDER ROADMAP
// ===============================

function analyzeSkills() {
    const career = document.getElementById("career").value;

    if (!career) {
        alert("Please select a target career.");
        return;
    }

    const requiredSkills = careers[career].skills;

    const normalizedSkills = selectedSkills.map(skill =>
        normalizeSkill(skill)
    );

    const skillsHave = requiredSkills.filter(requiredSkill =>
        normalizedSkills.some(userSkill =>
            userSkill.toLowerCase() === requiredSkill.toLowerCase()
        )
    );

    const missingSkills = requiredSkills.filter(requiredSkill =>
        !skillsHave.some(skill =>
            skill.toLowerCase() === requiredSkill.toLowerCase()
        )
    );

    const readiness = Math.round(
        (skillsHave.length / requiredSkills.length) * 100
    );

    document.getElementById("readinessScore").textContent = readiness + "%";

    // Display skills user has
    document.getElementById("skillsHave").innerHTML =
        skillsHave.length > 0
            ? skillsHave
                .map(skill => `<span class="skill-tag">${skill}</span>`)
                .join("")
            : "<p>No matching skills found.</p>";

    // Display skills needed
    document.getElementById("skillsNeed").innerHTML =
        missingSkills.length > 0
            ? missingSkills
                .map(skill => `<span class="skill-tag missing">${skill}</span>`)
                .join("")
            : "<p>🎉 You have all the required skills!</p>";

    // Enhanced Roadmap Rendering
    document.getElementById("roadmapList").innerHTML =
        missingSkills.length > 0
            ? missingSkills.map((skill, index) => {
                const info = learning[skill] || {
                    category: "General",
                    difficulty: "Intermediate",
                    priority: "Medium",
                    time: "2-3 weeks",
                    project: `Build a practical ${skill} project.`,
                    description: "Learn this skill through hands-on practice.",
                    url: `https://www.youtube.com/results?search_query=${encodeURIComponent(skill)}+for+beginners`
                };

                return `
                    <div class="roadmap-card">
                        <div class="roadmap-number">${index + 1}</div>
                        
                        <div class="roadmap-content">
                            <div class="roadmap-header">
                                <a href="${info.url}" target="_blank" class="roadmap-link">
                                    ${skill}
                                </a>
                                <span class="badge category">${info.category}</span>
                            </div>

                            <div class="roadmap-meta">
                                <span class="badge priority-${info.priority.toLowerCase()}">
                                    Priority: ${info.priority}
                                </span>
                                <span class="badge difficulty-${info.difficulty.toLowerCase()}">
                                    ${info.difficulty}
                                </span>
                                <span class="time-estimate">⏱️ Est. Time: ${info.time}</span>
                            </div>

                            <p class="description">${info.description}</p>

                            <div class="project-box">
                                💡 <strong>Recommended Project:</strong> ${info.project}
                            </div>

                            <a href="${info.url}" target="_blank" class="tutorial-btn">
                                ▶ Watch Tutorial
                            </a>
                        </div>
                    </div>
                `;
            }).join("")
            : "<p class='empty'>🎉 You already have all the required skills!</p>";

    // Show and scroll to results
    document.getElementById("results").style.display = "block";
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}