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

    // ===== NEW CAREERS =====

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

    // Programming
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

    // Data
    "powerbi": "Power BI",
    "power bi": "Power BI",

    "data viz": "Data Visualization",
    "data visualization": "Data Visualization",

    "stats": "Statistics",
    "statistics": "Statistics",

    // AI / ML
    "ml": "Machine Learning",
    "machine learning": "Machine Learning",
    "machinelearning": "Machine Learning",

    "numpy": "NumPy",
    "np": "NumPy",

    "pandas": "Pandas",

    "tensorflow": "TensorFlow",
    "tf": "TensorFlow",

    // Cybersecurity
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

    // ===== NEW ALIASES =====

    // DevOps / Cloud
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

    // Design
    "figma": "Figma",
    "wireframes": "Wireframing",
    "wireframing": "Wireframing",
    "prototyping": "Prototyping",
    "prototype": "Prototyping",
    "user research": "User Research",
    "ux research": "User Research",
    "usability testing": "Usability Testing",
    "usability": "Usability Testing",

    // Product
    "agile": "Agile",
    "scrum": "Agile",
    "roadmapping": "Roadmapping",
    "roadmap": "Roadmapping",
    "product roadmap": "Roadmapping",
    "market research": "Market Research",

    // Mobile
    "kotlin": "Kotlin",
    "swift": "Swift",
    "flutter": "Flutter",
    "dart": "Flutter",
    "react native": "React Native",
    "reactnative": "React Native",

    // Data Engineering
    "etl": "ETL",
    "extract transform load": "ETL",
    "spark": "Apache Spark",
    "apache spark": "Apache Spark",
    "pyspark": "Apache Spark",
    "data warehousing": "Data Warehousing",
    "data warehouse": "Data Warehousing",

    // Game Dev
    "unity": "Unity",
    "unity3d": "Unity",
    "unreal": "Unreal Engine",
    "unreal engine": "Unreal Engine",
    "game design": "Game Design",
    "3d modeling": "3D Modeling",
    "3d modelling": "3D Modeling",

    // Marketing
    "seo": "SEO",
    "search engine optimization": "SEO",
    "google analytics": "Google Analytics",
    "ga4": "Google Analytics",
    "content marketing": "Content Marketing",
    "social media marketing": "Social Media Marketing",
    "smm": "Social Media Marketing",
    "copywriting": "Copywriting",

    // QA
    "selenium": "Selenium",
    "test automation": "Test Automation",
    "automation testing": "Test Automation",
    "manual testing": "Manual Testing",
    "qa testing": "Manual Testing",

    // Blockchain
    "solidity": "Solidity",
    "smart contracts": "Smart Contracts",
    "smart contract": "Smart Contracts",
    "ethereum": "Ethereum",
    "web3": "Ethereum",

    // Business Analysis
    "requirements gathering": "Requirements Gathering",
    "business requirements": "Requirements Gathering",
    "stakeholder management": "Stakeholder Management"
};


// ==========================================
// SKILL TAG INPUT
// ==========================================

const allSkills = [
    "Java",
    "Python",
    "C",
    "C++",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "SQL",
    "Excel",
    "Power BI",
    "Statistics",
    "Data Visualization",
    "Machine Learning",
    "NumPy",
    "Pandas",
    "TensorFlow",
    "Networking",
    "Linux",
    "Cybersecurity Fundamentals",
    "SIEM",
    "Cryptography",
    "Responsive Design",

    // ===== NEW SKILLS =====
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "CI/CD",
    "Terraform",
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Research",
    "Usability Testing",
    "Agile",
    "Roadmapping",
    "Market Research",
    "Kotlin",
    "Swift",
    "Flutter",
    "React Native",
    "ETL",
    "Apache Spark",
    "Data Warehousing",
    "Unity",
    "Unreal Engine",
    "Game Design",
    "3D Modeling",
    "SEO",
    "Google Analytics",
    "Content Marketing",
    "Social Media Marketing",
    "Copywriting",
    "Selenium",
    "Test Automation",
    "Manual Testing",
    "Solidity",
    "Smart Contracts",
    "Ethereum",
    "Requirements Gathering",
    "Stakeholder Management"
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

        // Find matching skill
        const match = allSkills.find(skill =>
            skill.toLowerCase() === value.toLowerCase()
        );

        if (match) {

            addSkill(match);

        } else {

            // Allow custom skills
            addSkill(value);

        }
    }
});


// ==========================================
// ADD SKILL
// ==========================================

function addSkill(skill) {

    if (selectedSkills.includes(skill)) {
        return;
    }

    selectedSkills.push(skill);

    renderTags();

    skillInput.value = "";

    suggestions.innerHTML = "";

    suggestions.style.display = "none";

    skillInput.focus();
}


// ==========================================
// DISPLAY TAGS
// ==========================================

function renderTags() {

    skillTags.innerHTML = "";

    selectedSkills.forEach((skill, index) => {

        const tag = document.createElement("span");

        tag.className = "skill-input-tag";

        tag.innerHTML = `
            ${skill}
            <button onclick="removeSkill(${index})">
                ×
            </button>
        `;

        skillTags.appendChild(tag);

    });
}


// ==========================================
// REMOVE SKILL
// ==========================================

function removeSkill(index) {

    selectedSkills.splice(index, 1);

    renderTags();

    skillInput.focus();
}


// ===============================
// LEARNING ROADMAP
// ===============================

const learning = {

    "Python": {
        description: "Learn Python fundamentals and build practical projects.",
        url: "https://www.youtube.com/results?search_query=python+for+beginners"
    },

    "SQL": {
        description: "Learn SQL queries, joins, databases and data manipulation.",
        url: "https://www.youtube.com/results?search_query=SQL+for+beginners"
    },

    "Excel": {
        description: "Learn Excel formulas, pivot tables and data analysis.",
        url: "https://www.youtube.com/results?search_query=Excel+data+analysis+for+beginners"
    },

    "Power BI": {
        description: "Learn Power BI and create interactive dashboards.",
        url: "https://www.youtube.com/results?search_query=Power+BI+for+beginners"
    },

    "Statistics": {
        description: "Learn probability, statistics and data interpretation.",
        url: "https://www.youtube.com/results?search_query=statistics+for+data+science"
    },

    "Data Visualization": {
        description: "Learn how to represent data using charts and dashboards.",
        url: "https://www.youtube.com/results?search_query=data+visualization+for+beginners"
    },

    "HTML": {
        description: "Learn HTML structure and semantic elements.",
        url: "https://www.youtube.com/results?search_query=HTML+for+beginners"
    },

    "CSS": {
        description: "Learn CSS, Flexbox, Grid and responsive design.",
        url: "https://www.youtube.com/results?search_query=CSS+for+beginners"
    },

    "JavaScript": {
        description: "Learn JavaScript fundamentals and DOM manipulation.",
        url: "https://www.youtube.com/results?search_query=JavaScript+for+beginners"
    },

    "React": {
        description: "Learn React components, props, state and hooks.",
        url: "https://www.youtube.com/results?search_query=React+for+beginners"
    },

    "Git": {
        description: "Learn Git and GitHub for version control.",
        url: "https://www.youtube.com/results?search_query=Git+and+GitHub+for+beginners"
    },

    "Responsive Design": {
        description: "Learn how to make websites work across phones, tablets and desktops.",
        url: "https://www.youtube.com/results?search_query=responsive+web+design+for+beginners"
    },

    "Machine Learning": {
        description: "Learn machine learning concepts and build predictive models.",
        url: "https://www.youtube.com/results?search_query=machine+learning+for+beginners"
    },

    "NumPy": {
        description: "Learn NumPy for numerical computing in Python.",
        url: "https://www.youtube.com/results?search_query=NumPy+for+beginners"
    },

    "Pandas": {
        description: "Learn Pandas for data manipulation and analysis.",
        url: "https://www.youtube.com/results?search_query=Pandas+Python+for+beginners"
    },

    "TensorFlow": {
        description: "Learn TensorFlow and build machine learning models.",
        url: "https://www.youtube.com/results?search_query=TensorFlow+for+beginners"
    },

    "Networking": {
        description: "Learn networking fundamentals, protocols and network architecture.",
        url: "https://www.youtube.com/results?search_query=computer+networking+for+beginners"
    },

    "Linux": {
        description: "Learn Linux commands, terminal usage and system administration.",
        url: "https://www.youtube.com/results?search_query=Linux+for+beginners"
    },

    "Cybersecurity Fundamentals": {
        description: "Learn the fundamentals of cybersecurity and common security threats.",
        url: "https://www.youtube.com/results?search_query=cybersecurity+for+beginners"
    },

    "SIEM": {
        description: "Learn how SIEM systems monitor and analyze security events.",
        url: "https://www.youtube.com/results?search_query=SIEM+for+beginners"
    },

    "Cryptography": {
        description: "Learn encryption, hashing and fundamental cryptography concepts.",
        url: "https://www.youtube.com/results?search_query=cryptography+for+beginners"
    },

    // ===== NEW LEARNING ENTRIES =====

    "Docker": {
        description: "Learn to containerize applications with Docker images and containers.",
        url: "https://www.youtube.com/results?search_query=Docker+for+beginners"
    },

    "Kubernetes": {
        description: "Learn to orchestrate, deploy and scale containers with Kubernetes.",
        url: "https://www.youtube.com/results?search_query=Kubernetes+for+beginners"
    },

    "AWS": {
        description: "Learn core AWS services like EC2, S3, IAM and cloud fundamentals.",
        url: "https://www.youtube.com/results?search_query=AWS+for+beginners"
    },

    "Azure": {
        description: "Learn core Microsoft Azure services and cloud fundamentals.",
        url: "https://www.youtube.com/results?search_query=Azure+for+beginners"
    },

    "CI/CD": {
        description: "Learn to build continuous integration and deployment pipelines.",
        url: "https://www.youtube.com/results?search_query=CI+CD+pipeline+for+beginners"
    },

    "Terraform": {
        description: "Learn infrastructure as code and automated provisioning with Terraform.",
        url: "https://www.youtube.com/results?search_query=Terraform+for+beginners"
    },

    "Figma": {
        description: "Learn to design interfaces and prototypes using Figma.",
        url: "https://www.youtube.com/results?search_query=Figma+for+beginners"
    },

    "Wireframing": {
        description: "Learn to sketch low-fidelity layouts and structure user interfaces.",
        url: "https://www.youtube.com/results?search_query=wireframing+for+beginners"
    },

    "Prototyping": {
        description: "Learn to build interactive prototypes to test design ideas.",
        url: "https://www.youtube.com/results?search_query=UX+prototyping+for+beginners"
    },

    "User Research": {
        description: "Learn to conduct interviews, surveys and usability studies to understand users.",
        url: "https://www.youtube.com/results?search_query=UX+user+research+for+beginners"
    },

    "Usability Testing": {
        description: "Learn to plan and run usability tests to evaluate designs.",
        url: "https://www.youtube.com/results?search_query=usability+testing+for+beginners"
    },

    "Agile": {
        description: "Learn Agile and Scrum principles for iterative product delivery.",
        url: "https://www.youtube.com/results?search_query=Agile+Scrum+for+beginners"
    },

    "Roadmapping": {
        description: "Learn to build and prioritize product roadmaps.",
        url: "https://www.youtube.com/results?search_query=product+roadmap+for+beginners"
    },

    "Market Research": {
        description: "Learn to analyze markets, competitors and customer needs.",
        url: "https://www.youtube.com/results?search_query=market+research+for+beginners"
    },

    "Kotlin": {
        description: "Learn Kotlin for native Android app development.",
        url: "https://www.youtube.com/results?search_query=Kotlin+for+beginners"
    },

    "Swift": {
        description: "Learn Swift for native iOS and macOS app development.",
        url: "https://www.youtube.com/results?search_query=Swift+for+beginners"
    },

    "Flutter": {
        description: "Learn Flutter and Dart to build cross-platform mobile apps.",
        url: "https://www.youtube.com/results?search_query=Flutter+for+beginners"
    },

    "React Native": {
        description: "Learn React Native to build cross-platform mobile apps with JavaScript.",
        url: "https://www.youtube.com/results?search_query=React+Native+for+beginners"
    },

    "ETL": {
        description: "Learn to build extract, transform and load pipelines for data systems.",
        url: "https://www.youtube.com/results?search_query=ETL+pipelines+for+beginners"
    },

    "Apache Spark": {
        description: "Learn Apache Spark for large-scale distributed data processing.",
        url: "https://www.youtube.com/results?search_query=Apache+Spark+for+beginners"
    },

    "Data Warehousing": {
        description: "Learn data warehouse design, modeling and management concepts.",
        url: "https://www.youtube.com/results?search_query=data+warehousing+for+beginners"
    },

    "Unity": {
        description: "Learn to build 2D and 3D games using the Unity engine.",
        url: "https://www.youtube.com/results?search_query=Unity+game+development+for+beginners"
    },

    "Unreal Engine": {
        description: "Learn to build high-fidelity games using Unreal Engine and Blueprints.",
        url: "https://www.youtube.com/results?search_query=Unreal+Engine+for+beginners"
    },

    "Game Design": {
        description: "Learn game design principles, mechanics and level design.",
        url: "https://www.youtube.com/results?search_query=game+design+for+beginners"
    },

    "3D Modeling": {
        description: "Learn 3D modeling fundamentals for games and animation.",
        url: "https://www.youtube.com/results?search_query=3D+modeling+for+beginners"
    },

    "SEO": {
        description: "Learn search engine optimization to improve site visibility and rankings.",
        url: "https://www.youtube.com/results?search_query=SEO+for+beginners"
    },

    "Google Analytics": {
        description: "Learn to track and analyze website traffic with Google Analytics.",
        url: "https://www.youtube.com/results?search_query=Google+Analytics+for+beginners"
    },

    "Content Marketing": {
        description: "Learn to plan and create content that attracts and engages audiences.",
        url: "https://www.youtube.com/results?search_query=content+marketing+for+beginners"
    },

    "Social Media Marketing": {
        description: "Learn to build and run marketing campaigns across social platforms.",
        url: "https://www.youtube.com/results?search_query=social+media+marketing+for+beginners"
    },

    "Copywriting": {
        description: "Learn to write persuasive, audience-focused marketing copy.",
        url: "https://www.youtube.com/results?search_query=copywriting+for+beginners"
    },

    "Selenium": {
        description: "Learn to automate browser testing with Selenium WebDriver.",
        url: "https://www.youtube.com/results?search_query=Selenium+for+beginners"
    },

    "Test Automation": {
        description: "Learn to design and build automated test suites and frameworks.",
        url: "https://www.youtube.com/results?search_query=test+automation+for+beginners"
    },

    "Manual Testing": {
        description: "Learn manual software testing techniques, test cases and bug reporting.",
        url: "https://www.youtube.com/results?search_query=manual+testing+for+beginners"
    },

    "Solidity": {
        description: "Learn Solidity to write smart contracts for Ethereum-based blockchains.",
        url: "https://www.youtube.com/results?search_query=Solidity+for+beginners"
    },

    "Smart Contracts": {
        description: "Learn how smart contracts work and how to design them securely.",
        url: "https://www.youtube.com/results?search_query=smart+contracts+for+beginners"
    },

    "Ethereum": {
        description: "Learn Ethereum and blockchain fundamentals for Web3 development.",
        url: "https://www.youtube.com/results?search_query=Ethereum+blockchain+for+beginners"
    },

    "Requirements Gathering": {
        description: "Learn to elicit, document and validate business requirements.",
        url: "https://www.youtube.com/results?search_query=requirements+gathering+for+beginners"
    },

    "Stakeholder Management": {
        description: "Learn to identify, engage and align stakeholders on a project.",
        url: "https://www.youtube.com/results?search_query=stakeholder+management+for+beginners"
    }
};


// ===============================
// NORMALIZE USER INPUT
// ===============================

function normalizeSkill(skill) {

    // Remove extra spaces
    skill = skill.trim().toLowerCase();

    // Remove unnecessary characters
    skill = skill.replace(/[()]/g, "");

    // Check aliases
    if (skillAliases[skill]) {
        return skillAliases[skill];
    }

    // Try matching against official skill names
    for (const officialSkill of Object.keys(skillAliases)) {

        if (skill === officialSkill.toLowerCase()) {
            return skillAliases[officialSkill];
        }
    }

    // Capitalize unknown skill
    return skill
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


// ===============================
// ANALYZE SKILLS
// ===============================

function analyzeSkills() {

    const career = document.getElementById("career").value;

    // Check career
    if (!career) {
        alert("Please select a target career.");
        return;
    }

    // Check skills
    

    const requiredSkills = careers[career].skills;

    // Normalize user's skills
    const normalizedSkills = selectedSkills.map(skill =>
        normalizeSkill(skill)
    );

    // Find skills the user has
    const skillsHave = requiredSkills.filter(requiredSkill =>
        normalizedSkills.some(userSkill =>
            userSkill.toLowerCase() === requiredSkill.toLowerCase()
        )
    );

    // Find missing skills
    const missingSkills = requiredSkills.filter(requiredSkill =>
        !skillsHave.some(skill =>
            skill.toLowerCase() === requiredSkill.toLowerCase()
        )
    );

    // Calculate readiness
    const readiness = Math.round(
        (skillsHave.length / requiredSkills.length) * 100
    );

    // Update score
    document.getElementById("readinessScore").textContent =
        readiness + "%";

    // Skills you have
    document.getElementById("skillsHave").innerHTML =
        skillsHave.length > 0
            ? skillsHave
                .map(skill =>
                    `<span class="skill-tag">${skill}</span>`
                )
                .join("")
            : "<p>No matching skills found.</p>";

    // Skills you need
    document.getElementById("skillsNeed").innerHTML =
        missingSkills.length > 0
            ? missingSkills
                .map(skill =>
                    `<span class="skill-tag missing">${skill}</span>`
                )
                .join("")
            : "<p>🎉 You have all the required skills!</p>";

    // Roadmap
    document.getElementById("roadmapList").innerHTML =
        missingSkills.length > 0
            ? missingSkills.map((skill, index) => {

                const info = learning[skill];

                return `
                    <div class="roadmap-card">

                        <div class="roadmap-number">
                            ${index + 1}
                        </div>

                        <div class="roadmap-content">

                            <a
                                href="${info?.url || '#'}"
                                target="_blank"
                                class="roadmap-link"
                            >
                                ${skill}
                            </a>

                            <p>
                                ${
                                    info?.description ||
                                    "Start learning this skill through practical projects."
                                }
                            </p>

                            ${
                                info?.url
                                    ? `
                                    <a
                                        href="${info.url}"
                                        target="_blank"
                                        class="tutorial-btn"
                                    >
                                        ▶ Watch Tutorial
                                    </a>
                                    `
                                    : ""
                            }

                        </div>

                    </div>
                `;

            }).join("")
            : "<p class='empty'>🎉 You already have all the required skills!</p>";

    // Show results
    document.getElementById("results").style.display = "block";

    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
}