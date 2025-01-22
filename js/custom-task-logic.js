const backendUrl = "https://DecisionLab.eu.pythonanywhere.com/compute-next-design"; // Backend URL

// Function to fetch the next design from the Python backend
async function fetchNextDesign(response) {
    try {
        const res = await fetch(backendUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ response }), // Send participant's response to backend
        });

        const data = await res.json(); // Parse the JSON response
        if (data.message === "Task completed.") {
            console.log("Task completed.");
            return null; // Signal to stop further trials
        }
        return data.design; // Return the design for the next trial
    } catch (error) {
        console.error("Error fetching next design:", error);
        return null;
    }
}

async function startExperiment() {
    const timeline = [];

    // Instructions
    timeline.push({
        type: "html-keyboard-response",
        stimulus: "Welcome to the experiment. Press any key to begin.",
    });

    // Main task: Iterative trial logic
    let response = 0; // Initial response
    for (let i = 0; i < 20; i++) {
        const design = await fetchNextDesign(response); // Fetch design from backend
        if (!design) {
            break; // Stop if the backend signals task completion
        }

        // Add trial to the timeline
        timeline.push({
            type: "html-keyboard-response",
            stimulus: `
                Option 1: $${design.r_ss} now<br>
                Option 2: $${design.r_ll} in ${design.t_ll} weeks
            `,
            choices: ["f", "j"], // Keys for choices
            on_finish: (data) => {
                response = data.key_press === "f" ? 0 : 1; // Update response for next trial
            },
        });
    }

    // End
    timeline.push({
        type: "html-keyboard-response",
        stimulus: "Thank you for participating!",
    });

    // Initialize jsPsych
    jsPsych.init({
        display_element: "jspsych-target",
        timeline: timeline,
    });
}
