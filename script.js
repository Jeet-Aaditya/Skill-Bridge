

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




const learning = {

    "Python": {
        description: "Learn Python fundamentals and build small projects.",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
    },

    "SQL": {
        description: "Learn SQL basics, queries, joins and databases.",
        url: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
    },

    "Excel": {
        description: "Learn Excel formulas, pivot tables and data analysis.",
        url: "https://www.youtube.com/watch?v=Vl0H-qTclOg"
    },

    "Power BI": {
        description: "Learn Power BI and create interactive dashboards.",
        url: "https://www.youtube.com/watch?v=I0vQ_VLZTWg"
    },

    "Statistics": {
        description: "Learn probability, statistics and data interpretation.",
        url: "https://www.youtube.com/watch?v=xxpc-HPKN28"
    },

    "HTML": {
        description: "Learn HTML structure and semantic elements.",
        url: "https://www.youtube.com/watch?v=pQN-pnXPaVg"
    },

    "CSS": {
        description: "Learn CSS layouts, Flexbox and responsive design.",
        url: "https://www.youtube.com/watch?v=OXGznpKZ_sA"
    },

    "JavaScript": {
        description: "Learn JavaScript fundamentals and DOM manipulation.",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    },

    "React": {
        description: "Learn React components, props and state.",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk"
    },

    "Git": {
        description: "Learn Git and GitHub for version control.",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk"
    }
};




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


   

    const missingSkills =
        requiredSkills.filter(skill =>
            !userSkills.includes(skill)
        );


  

    const percentage =
        Math.round(
            (userSkills.length / requiredSkills.length) * 100
        );


   

    document.getElementById("score").textContent =
        percentage + "%";


   
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
                        <a href="${learning[skill]?.url || '#'}"
                        target="_blank"
                        class="roadmap-link">

                            ${skill}

                        </a>

                        <p>
                            ${learning[skill]?.description ||
                            "Start learning this skill through practical projects."}
                        </p>
                    </div>

                </div>

            `;

        });

    }



    const results =
        document.getElementById("results");

    results.style.display = "block";




    results.scrollIntoView({
        behavior: "smooth"
    });

}