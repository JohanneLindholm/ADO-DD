// Initialize jsPsych
function initExp() {
    const jsPsych = initJsPsych({
        on_finish: () => {
            // Save data as a CSV file locally
            jsPsych.data.get().localSave("csv", "delay_discounting_task.csv");
        },
    });

    // Timeline for the experiment
    const timeline = [];

    // Instructions
    timeline.push({
        type: jsPsychInstructions,
        pages: [
            "Welcome to the experiment!",
            "On each trial, you will choose between two options: a smaller reward available sooner, or a larger reward available later.",
            "Press 'F' to choose the option on the left and 'J' to choose the option on the right.",
            "Press the button below to begin.",
        ],
        show_clickable_nav: true,
    });

    // Define reward and delay options for trials
    const trials = [
        { r_ss: 50, t_ss: "now", r_ll: 100, t_ll: "4 weeks" },
        { r_ss: 30, t_ss: "now", r_ll: 60, t_ll: "2 weeks" },
        { r_ss: 20, t_ss: "now", r_ll: 50, t_ll: "1 week" },
        { r_ss: 40, t_ss: "now", r_ll: 80, t_ll: "3 weeks" },
    ];

    // Add trials to the timeline
    trials.forEach((trial) => {
        timeline.push({
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `
                <p>Option 1: $${trial.r_ss} (${trial.t_ss})</p>
                <p>Option 2: $${trial.r_ll} (${trial.t_ll})</p>
            `,
            choices: ["f", "j"], // 'F' for left, 'J' for right
            data: {
                r_ss: trial.r_ss,
                t_ss: trial.t_ss,
                r_ll: trial.r_ll,
                t_ll: trial.t_ll,
            },
            on_finish: (data) => {
                data.choice = data.response === "f" ? "smaller sooner" : "larger later";
            },
        });
    });

    // End screen
    timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "Thank you for participating! You can now close this window.",
        choices: "NO_KEYS",
    });

    // Run the experiment
    jsPsych.run(timeline);
}
