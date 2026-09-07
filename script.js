const careers = {
    data: {
        name: "Data Analyst",
        skills: ["Python", "SQL", "Excel", "Power BI", "Statistics", "Data Visualization"]
    },
    web: {
        name: "Web Developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"]
    },
    ai: {
        name: "AI / ML Engineer",
        skills: ["Python", "Machine Learning", "Statistics", "NumPy", "Pandas", "TensorFlow"]
    },
    cyber: {
        name: "Cybersecurity Analyst",
        skills: ["Networking", "Linux", "Python", "Cybersecurity Fundamentals", "SIEM", "Cryptography"]
    },
    devops: {
        name: "DevOps Engineer",
        skills: ["Linux", "Docker", "Kubernetes", "Git", "AWS", "CI/CD", "Terraform", "Python"]
    },
    design: {
        name: "UX / UI Designer",
        skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Usability Testing", "Responsive Design"]
    },
    product: {
        name: "Product Manager",
        skills: ["Agile", "Roadmapping", "Market Research", "SQL", "Data Visualization", "Wireframing"]
    },
    mobile: {
        name: "Mobile App Developer",
        skills: ["Kotlin", "Swift", "Flutter", "React Native", "Java", "Git"]
    },
    datasci: {
        name: "Data Scientist",
        skills: ["Python", "Statistics", "Machine Learning", "Pandas", "NumPy", "SQL", "Data Visualization"]
    },
    dataeng: {
        name: "Data Engineer",
        skills: ["SQL", "Python", "ETL", "Apache Spark", "Data Warehousing", "AWS"]
    },
    cloud: {
        name: "Cloud Engineer",
        skills: ["AWS", "Azure", "Linux", "Networking", "Terraform", "Docker"]
    },
    game: {
        name: "Game Developer",
        skills: ["C++", "C#", "Unity", "Unreal Engine", "Game Design", "3D Modeling"]
    },
    marketing: {
        name: "Digital Marketing Specialist",
        skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media Marketing", "Copywriting", "Excel"]
    },
    qa: {
        name: "QA / Test Automation Engineer",
        skills: ["Selenium", "Python", "Java", "Test Automation", "Manual Testing", "Git"]
    },
    blockchain: {
        name: "Blockchain Developer",
        skills: ["Solidity", "Smart Contracts", "Ethereum", "JavaScript", "Cryptography", "Git"]
    },
    business: {
        name: "Business Analyst",
        skills: ["SQL", "Excel", "Data Visualization", "Requirements Gathering", "Stakeholder Management", "Statistics"]
    }
};

const skillAliases = {
    "py": "Python",
    "js": "JavaScript",
    "reactjs": "React",
    "html5": "HTML",
    "css3": "CSS",
    "github": "Git",
    "powerbi": "Power BI",
    "stats": "Statistics",
    "ml": "Machine Learning",
    "np": "NumPy",
    "tf": "TensorFlow",
    "k8s": "Kubernetes",
    "aws": "AWS",
    "cicd": "CI/CD"
};

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

// Stores objects: { name: "Python", proficiency: "Intermediate" }
let selectedSkills = [];

const skillInput = document.getElementById("skillInput");
const skillTags = document.getElementById("skillTags");
const suggestions = document.getElementById("suggestions");

skillInput.addEventListener("input", function () {
    const value = skillInput.value.trim().toLowerCase();
    suggestions.innerHTML = "";

    if (value === "") {
        suggestions.style.display = "none";
        return;
    }

    const matches = allSkills.filter(skill =>
        skill.toLowerCase().includes(value) &&
        !selectedSkills.some(s => s.name === skill)
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

skillInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const value = skillInput.value.trim();
        if (value === "") return;

        const match = allSkills.find(skill =>
            skill.toLowerCase() === value.toLowerCase()
        );

        addSkill(match || value);
    }
});

function addSkill(skillName) {
    if (selectedSkills.some(s => s.name.toLowerCase() === skillName.toLowerCase())) return;

    selectedSkills.push({
        name: skillName,
        proficiency: "Intermediate" // default proficiency level
    });
    renderTags();

    skillInput.value = "";
    suggestions.innerHTML = "";
    suggestions.style.display = "none";
    skillInput.focus();
}

function updateProficiency(index, level) {
    selectedSkills[index].proficiency = level;
}

function renderTags() {
    skillTags.innerHTML = "";

    selectedSkills.forEach((skillObj, index) => {
        const tag = document.createElement("span");
        tag.className = "skill-input-tag";
        tag.innerHTML = `
            ${skillObj.name}
            <select onchange="updateProficiency(${index}, this.value)">
                <option value="Beginner" ${skillObj.proficiency === "Beginner" ? "selected" : ""}>Beg</option>
                <option value="Intermediate" ${skillObj.proficiency === "Intermediate" ? "selected" : ""}>Int</option>
                <option value="Advanced" ${skillObj.proficiency === "Advanced" ? "selected" : ""}>Adv</option>
            </select>
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
    }
};

function normalizeSkill(skill) {
    skill = skill.trim().toLowerCase().replace(/[()]/g, "");

    if (skillAliases[skill]) {
        return skillAliases[skill];
    }

    return skill
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Calculate readiness score taking proficiency levels into account
function calculateReadiness(requiredSkills, userSkills) {
    const profWeights = { "Beginner": 0.4, "Intermediate": 0.7, "Advanced": 1.0 };
    let scoreAccumulator = 0;

    requiredSkills.forEach(reqSkill => {
        const match = userSkills.find(uSkill =>
            normalizeSkill(uSkill.name).toLowerCase() === reqSkill.toLowerCase()
        );
        if (match) {
            scoreAccumulator += profWeights[match.proficiency] || 0.7;
        }
    });

    return Math.round((scoreAccumulator / requiredSkills.length) * 100);
}

function analyzeSkills() {
    const primaryCareerKey = document.getElementById("career").value;
    const compareCareerKey = document.getElementById("compareCareer").value;

    if (!primaryCareerKey) {
        alert("Please select a target career.");
        return;
    }

    // Process Primary Career
    const primaryCareer = careers[primaryCareerKey];
    const primaryScore = calculateReadiness(primaryCareer.skills, selectedSkills);

    const primaryHave = primaryCareer.skills.filter(reqSkill =>
        selectedSkills.some(uSkill => normalizeSkill(uSkill.name).toLowerCase() === reqSkill.toLowerCase())
    );

    const primaryNeed = primaryCareer.skills.filter(reqSkill =>
        !primaryHave.some(s => s.toLowerCase() === reqSkill.toLowerCase())
    );

    document.getElementById("primaryCareerTitle").textContent = `${primaryCareer.name} Readiness`;
    document.getElementById("readinessScore").textContent = primaryScore + "%";

    document.getElementById("skillsHave").innerHTML = primaryHave.length > 0
        ? primaryHave.map(skill => {
            const userObj = selectedSkills.find(u => normalizeSkill(u.name).toLowerCase() === skill.toLowerCase());
            return `<span class="skill-tag">${skill} <span class="prof-pill">${userObj.proficiency}</span></span>`;
        }).join("")
        : "<p class='empty'>No matching skills found.</p>";

    document.getElementById("skillsNeed").innerHTML = primaryNeed.length > 0
        ? primaryNeed.map(skill => `<span class="skill-tag missing">${skill}</span>`).join("")
        : "<p class='empty'>🎉 You have all required skills!</p>";

    // Process Comparison Career if Selected
    const compSection = document.getElementById("comparisonSection");
    if (compareCareerKey && compareCareerKey !== primaryCareerKey) {
        const compCareer = careers[compareCareerKey];
        const compScore = calculateReadiness(compCareer.skills, selectedSkills);

        const compHave = compCareer.skills.filter(reqSkill =>
            selectedSkills.some(uSkill => normalizeSkill(uSkill.name).toLowerCase() === reqSkill.toLowerCase())
        );

        const compNeed = compCareer.skills.filter(reqSkill =>
            !compHave.some(s => s.toLowerCase() === reqSkill.toLowerCase())
        );

        document.getElementById("comparisonHeaderTitle").textContent = `${primaryCareer.name} vs ${compCareer.name}`;
        document.getElementById("compareCareerTitle").textContent = `${compCareer.name} Readiness`;
        document.getElementById("compareReadinessScore").textContent = compScore + "%";

        document.getElementById("compareSkillsHave").innerHTML = compHave.length > 0
            ? compHave.map(skill => {
                const userObj = selectedSkills.find(u => normalizeSkill(u.name).toLowerCase() === skill.toLowerCase());
                return `<span class="skill-tag">${skill} <span class="prof-pill">${userObj.proficiency}</span></span>`;
            }).join("")
            : "<p class='empty'>No matching skills found.</p>";

        document.getElementById("compareSkillsNeed").innerHTML = compNeed.length > 0
            ? compNeed.map(skill => `<span class="skill-tag missing">${skill}</span>`).join("")
            : "<p class='empty'>🎉 You have all required skills!</p>";

        compSection.style.display = "block";
    } else {
        compSection.style.display = "none";
    }

    // Generate Roadmap for Primary Missing Skills
    document.getElementById("roadmapList").innerHTML = primaryNeed.length > 0
        ? primaryNeed.map((skill, index) => {
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
                            <a href="${info.url}" target="_blank" class="roadmap-link">${skill}</a>
                            <span class="badge category">${info.category}</span>
                        </div>
                        <div class="roadmap-meta">
                            <span class="badge priority-${info.priority.toLowerCase()}">Priority: ${info.priority}</span>
                            <span class="badge difficulty-${info.difficulty.toLowerCase()}">${info.difficulty}</span>
                            <span class="time-estimate">⏱️ Est. Time: ${info.time}</span>
                        </div>
                        <p class="description">${info.description}</p>
                        <div class="project-box">
                            💡 <strong>Recommended Project:</strong> ${info.project}
                        </div>
                        <a href="${info.url}" target="_blank" class="tutorial-btn">▶ Watch Tutorial</a>
                    </div>
                </div>
            `;
        }).join("")
        : "<p class='empty'>🎉 You already have all the required skills!</p>";

    document.getElementById("results").style.display = "block";
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}