const backendUrl = "https://DecisionLab.eu.pythonanywhere.com/compute-next-design"; // Backend URL

// Function to fetch the next design from the Python backend
async function fetchNextDesign(response) {
    try {
        const res = await fetch(backendUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ response }),
        });

        const data = await res.json();
        if (data.message === "Task completed.") {
            console.log("Task completed.");
            return null;
        }
        return data.design;
    } catch (error) {
        console.error("Error fetching next design:", error);
        return null;
    }
}

// Start the experiment
async function startExperiment() {
    // Initialize jsPsych instance
    const jsPsych = initJsPsych({
        on_finish: () => {
            console.log("Experiment completed");
        },
    });

    // Define timeline
    const timeline = [];

    // Instructions
    timeline.push({
        type: jsPsychInstructions,
        pages: [
            "Welcome to the experiment. Press 'Next' to begin.",
            "You will choose between smaller-sooner and larger-later options.",
        ],
        show_clickable_nav: true,
    });

    // Main task: Iterative trial logic
    let response = 0;
    for (let i = 0; i < 20; i++) {
        const design = await fetchNextDesign(response);
        if (!design) {
            break;
        }

        timeline.push({
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `
                <p>Option 1: $${design.r_ss} now</p>
                <p>Option 2: $${design.r_ll} in ${design.t_ll} weeks</p>
            `,
            choices: ["f", "j"],
            on_finish: (data) => {
                response = data.key_press === "f" ? 0 : 1;
            },
        });
    }

    // End screen
    timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "Thank you for participating!",
    });

    // Run the experiment
    jsPsych.run(timeline);
}
