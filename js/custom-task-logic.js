async function startExperiment() {
    const timeline = [];

    // Instructions
    timeline.push({
        type: "html-keyboard-response",
        stimulus: "Welcome to the experiment. Press any key to begin.",
    });

    // Trial logic
    for (let i = 0; i < 20; i++) {
        const design = await fetchNextDesign(0); // Initial call (response = 0)

        timeline.push({
            type: "html-keyboard-response",
            stimulus: `Option 1: $${design.r_ss} now<br>Option 2: $${design.r_ll} in ${design.t_ll} weeks`,
            choices: ["f", "j"], // Keys for choices
            on_finish: async (data) => {
                const response = data.key_press === "f" ? 0 : 1;
                await fetchNextDesign(response); // Send response to API
            },
        });
    }

    // End
    timeline.push({
        type: "html-keyboard-response",
        stimulus: "Thank you for participating!",
    });

    jsPsych.init({
        display_element: "jspsych-target",
        timeline: timeline,
    });
}

