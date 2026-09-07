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
    "linux": "Linux"
};


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

    const skillsInput =
        document.getElementById("skillsInput").value;

    if (skillsInput.trim() === "") {

        alert("Please enter at least one skill.");

        return;
    }


    // Convert input into individual skills
    const typedSkills = skillsInput
        .split(",")
        .map(skill => normalizeSkill(skill))
        .filter(skill => skill !== "");


    const requiredSkills = careers[career].skills;


    // Find matching skills
    const skillsHave = requiredSkills.filter(requiredSkill => {

        return typedSkills.some(userSkill =>

            userSkill.toLowerCase() ===
            requiredSkill.toLowerCase()

        );

    });


    // Find missing skills
    const missingSkills = requiredSkills.filter(requiredSkill => {

        return !skillsHave.some(skill =>

            skill.toLowerCase() ===
            requiredSkill.toLowerCase()

        );

    });


    // Calculate readiness
    const readiness = Math.round(
        (skillsHave.length / requiredSkills.length) * 100
    );


    // ===============================
    // UPDATE READINESS SCORE
    // ===============================

    document.getElementById("readinessScore").textContent =
        readiness + "%";


    // ===============================
    // SKILLS YOU HAVE
    // ===============================

    document.getElementById("skillsHave").innerHTML =

        skillsHave.length > 0

        ? skillsHave
            .map(skill =>
                `<span class="skill-tag">${skill}</span>`
            )
            .join("")

        : "<p>No matching skills found.</p>";


    // ===============================
    // SKILLS YOU NEED
    // ===============================

    document.getElementById("skillsNeed").innerHTML =

        missingSkills.length > 0

        ? missingSkills
            .map(skill =>
                `<span class="skill-tag missing">${skill}</span>`
            )
            .join("")

        : "<p>🎉 You have all the required skills!</p>";


    // ===============================
    // LEARNING ROADMAP
    // ===============================

    document.getElementById("roadmap").innerHTML =

        missingSkills.map((skill, index) => {

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

        }).join("");


    // ===============================
    // SHOW RESULTS
    // ===============================

    document.getElementById("results").style.display = "block";


    // Scroll to results
    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
}