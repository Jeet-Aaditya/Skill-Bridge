// =====================================
// SKILL DATABASE
// =====================================

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


// =====================================
// LEARNING RECOMMENDATIONS
// =====================================

const learning = {

    "Python": "Learn Python fundamentals and build small projects.",

    "SQL": "Learn SQL basics, queries, joins and databases.",

    "Excel": "Learn Excel formulas, pivot tables and data analysis.",

    "Power BI": "Learn Power BI and create interactive dashboards.",

    "Statistics": "Learn probability, statistics and data interpretation.",

    "Data Visualization": "Learn charts, dashboards and visual storytelling.",

    "HTML": "Learn HTML structure and semantic elements.",

    "CSS": "Learn CSS layouts, Flexbox and responsive design.",

    "JavaScript": "Learn JavaScript fundamentals and DOM manipulation.",

    "React": "Learn React components, props and state.",

    "Git": "Learn Git and GitHub for version control.",

    "Responsive Design": "Learn how to build websites for mobile and desktop.",

    "Machine Learning": "Learn supervised and unsupervised machine learning.",

    "NumPy": "Learn NumPy for numerical computing.",

    "Pandas": "Learn Pandas for data manipulation.",

    "TensorFlow": "Learn TensorFlow and build basic ML models.",

    "Networking": "Learn TCP/IP, protocols and network fundamentals.",

    "Linux": "Learn Linux commands and system administration.",

    "Cybersecurity Fundamentals": "Learn common attacks, vulnerabilities and security principles.",

    "SIEM": "Learn security monitoring and SIEM tools.",

    "Cryptography": "Learn encryption, hashing and authentication."
};


// =====================================
// SHOW SKILLS WHEN CAREER CHANGES
// =====================================

const careerSelect = document.getElementById("career");

careerSelect.addEventListener("change", function () {

    const selectedCareer = this.value;

    const container = document.getElementById("skillsContainer");

    container.innerHTML = "";

    if (!selectedCareer) {
        return;
    }

    careers[selectedCareer].skills.forEach(skill => {

        const skillElement = document.createElement("div");

        skillElement.className = "skill";

        skillElement.textContent = skill;

        skillElement.onclick = function () {

            this.classList.toggle("selected");

        };

        container.appendChild(skillElement);

    });

});


// =====================================
// ANALYZE SKILLS
// =====================================

function analyzeSkills() {

    const career = careerSelect.value;

    if (!career) {

        alert("Please select a career first.");

        return;
    }


    const requiredSkills = careers[career].skills;


    const selectedElements =
        document.querySelectorAll(".skill.selected");


    const userSkills =
        Array.from(selectedElements).map(skill => skill.textContent);


    // Find missing skills

    const missingSkills =
        requiredSkills.filter(skill =>
            !userSkills.includes(skill)
        );


    // Calculate percentage

    const percentage =
        Math.round(
            (userSkills.length / requiredSkills.length) * 100
        );


    // =====================================
    // DISPLAY SCORE
    // =====================================

    document.getElementById("score").textContent =
        percentage + "%";


    // =====================================
    // DISPLAY SKILLS USER HAS
    // =====================================

    const skillsHave =
        document.getElementById("skillsHave");

    skillsHave.innerHTML = "";


    if (userSkills.length === 0) {

        skillsHave.innerHTML =
            `<p class="empty">No skills selected.</p>`;

    } else {

        userSkills.forEach(skill => {

            skillsHave.innerHTML += `
                <div class="skill-result">
                    ✓ ${skill}
                </div>
            `;

        });

    }


    // =====================================
    // DISPLAY MISSING SKILLS
    // =====================================

    const skillsNeed =
        document.getElementById("skillsNeed");

    skillsNeed.innerHTML = "";


    if (missingSkills.length === 0) {

        skillsNeed.innerHTML =
            `<div class="skill-result">
                🎉 You have all the required skills!
            </div>`;

    } else {

        missingSkills.forEach(skill => {

            skillsNeed.innerHTML += `
                <div class="skill-result missing">
                    + ${skill}
                </div>
            `;

        });

    }


    // =====================================
    // CREATE ROADMAP
    // =====================================

    const roadmap =
        document.getElementById("roadmapList");

    roadmap.innerHTML = "";


    if (missingSkills.length === 0) {

        roadmap.innerHTML =
            `<div class="roadmap-item">
                <div class="step">✓</div>
                <div>
                    <strong>You're ready!</strong>
                    <p>You have all the core skills for this role.</p>
                </div>
            </div>`;

    } else {

        missingSkills.forEach((skill, index) => {

            roadmap.innerHTML += `

                <div class="roadmap-item">

                    <div class="step">
                        ${index + 1}
                    </div>

                    <div>
                        <strong>${skill}</strong>

                        <p>
                            ${learning[skill] ||
                            "Start learning this skill through practical projects."}
                        </p>
                    </div>

                </div>

            `;

        });

    }


    // =====================================
    // SHOW RESULTS
    // =====================================

    const results =
        document.getElementById("results");

    results.style.display = "block";


    // Scroll to results

    results.scrollIntoView({
        behavior: "smooth"
    });

}