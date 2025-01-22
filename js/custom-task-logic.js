const backendUrl = "https://DecisionLab.eu.pythonanywhere.com/compute-next-design"; // Backend URL

// Function to fetch the next design from the Python backend
async function fetchNextDesign(response) {
    try {
        console.log("Fetching next design with response:", response); // Debugging
        const res = await fetch(backendUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ response }), // Send participant's response to backend
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`); // Handle non-200 responses
        }

        const data = await res.json(); // Parse the JSON response
        console.log("Fetched design data:", data); // Debugging
        if (data.message === "Task completed.") {
            console.log("Task completed.");
            return null; // Signal to stop further trials
        }
        return data.design; // Return the design for the next trial
    } catch (error) {
        console.error("Error fetching next design:", error); // Log any errors
        return null; // Handle errors gracefully
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
            break; // Stop if the backend signals task completion or if there's an error
        }

        // Add trial to the timeline
        timeline.push({
            type: "html-keyboard-response",
            stimulus: `
                <p>Option 1: $${design.r_ss} now</p>
                <p>Option 2: $${design.r_ll} in ${design.t_ll} weeks</p>
                <p>Press "F" for Option 1 or "J" for Option 2</p>
            `,
            choices: ["f", "j"], // Keys for choices
            on_finish: (data) => {
                response = data.key_press === "f" ? 0 : 1; // Update response for next trial
                console.log("User response:", response); // Debugging
            },
        });
    }

    // End message
    timeline.push({
        type: "html-keyboard-response",
        stimulus: "Thank you for participating! Press any key to finish.",
    });

    // Initialize jsPsych
    jsPsych.init({
        display_element: "jspsych-target",
        timeline: timeline,
        on_finish: function () {
            console.log("Experiment completed."); // Log experiment completion
        },
    });
}

// Debugging: Call startExperiment manually to ensure the experiment runs
// startExperiment();
