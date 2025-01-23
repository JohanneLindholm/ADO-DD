/**
 * @title Delay Discounting Task
 * @description A delay discounting task with horizontal choices and a "Next" button below them.
 * @version 1.0.6
 */

import { initJsPsych } from "jspsych";
import instructions from "@jspsych/plugin-instructions";
import surveyMultiChoice from "@jspsych/plugin-survey-multi-choice";
import "./my_experiment_style.css";

export async function run() {
  const jsPsych = initJsPsych();

  // Instruction Texts
  const introInstructions = [
    `
    <p><strong>This task is the delay discounting task.</strong></p>
    <p>On every trial, two options will be presented on the screen.</p>
    <p>Each option has a possible reward and a delay to obtain the reward.</p>
    <p>Click "Next" to proceed.</p>
    `,
    `
    <p>You should choose the option you prefer by clicking on it.</p>
    <p>Once you have made your choice, click "Next" to submit your response.</p>
    <p>Click "Next" to proceed to a practice round.</p>
    `,
  ];

  const practiceInstructions = `
    <p><strong>Let’s do some practice to understand the task.</strong></p>
    <p>Click "Next" to start the practice trials.</p>
  `;

  const mainTaskInstructions = `
    <p><strong>Great job!</strong></p>
    <p>Now let’s start the main task. Click "Next" to begin.</p>
  `;

  const endMessage = `
    <p><strong>You completed the task.</strong></p>
    <p>Thank you for participating!</p>
  `;

  // Instruction Trials
  const instructionsTrial = {
    type: instructions,
    pages: introInstructions,
    show_clickable_nav: true,
    button_label_next: "Next",
    button_label_previous: "Back",
  };

  const practiceInstructionsTrial = {
    type: instructions,
    pages: [practiceInstructions],
    show_clickable_nav: true,
    button_label_next: "Next",
  };

  const mainTaskInstructionsTrial = {
    type: instructions,
    pages: [mainTaskInstructions],
    show_clickable_nav: true,
    button_label_next: "Next",
  };

  const goodbyeTrial = {
    type: instructions,
    pages: [endMessage],
    show_clickable_nav: true,
    button_label_next: "Finish",
  };

  // Practice Trial
  const practiceTrial = {
    type: surveyMultiChoice,
    questions: [
      {
        prompt: `
          <p><strong>$10 now</strong></p>
          <p><em>or</em></p>
          <p><strong>$50 in 1 month</strong></p>
        `,
        options: ["$10 now", "$50 in 1 month"],
        required: true,
        horizontal: true,
      },
    ],
    button_label: "Next",
    on_finish: (data) => {
      console.log("Practice trial response:", data.response);
    },
  };


  // Main Trials (20 explicitly listed)
  const mainTrials = [
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$12.5 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 1 month</strong></p>
          `,
          options: ["$12.5 now", "$800 in 1 month"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 1 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$25 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 2 months</strong></p>
          `,
          options: ["$25 now", "$800 in 2 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 2 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$50 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 3 months</strong></p>
          `,
          options: ["$50 now", "$800 in 3 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 3 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$75 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 4 months</strong></p>
          `,
          options: ["$75 now", "$800 in 4 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 4 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$100 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 5 months</strong></p>
          `,
          options: ["$100 now", "$800 in 5 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 5 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$125 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 6 months</strong></p>
          `,
          options: ["$125 now", "$800 in 6 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 6 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$150 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 7 months</strong></p>
          `,
          options: ["$150 now", "$800 in 7 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 7 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$175 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 8 months</strong></p>
          `,
          options: ["$175 now", "$800 in 8 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 8 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$200 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 9 months</strong></p>
          `,
          options: ["$200 now", "$800 in 9 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 9 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$225 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 10 months</strong></p>
          `,
          options: ["$225 now", "$800 in 10 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 10 response:", data.response);
      },
    },
    // Trials 11–20 continue here...
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$250 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 11 months</strong></p>
          `,
          options: ["$250 now", "$800 in 11 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 11 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$275 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 12 months</strong></p>
          `,
          options: ["$275 now", "$800 in 12 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 12 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$300 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 13 months</strong></p>
          `,
          options: ["$300 now", "$800 in 13 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 13 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$325 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 14 months</strong></p>
          `,
          options: ["$325 now", "$800 in 14 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 14 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$350 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 15 months</strong></p>
          `,
          options: ["$350 now", "$800 in 15 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 15 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$375 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 16 months</strong></p>
          `,
          options: ["$375 now", "$800 in 16 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 16 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$400 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 17 months</strong></p>
          `,
          options: ["$400 now", "$800 in 17 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 17 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$425 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 18 months</strong></p>
          `,
          options: ["$425 now", "$800 in 18 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 18 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$450 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 19 months</strong></p>
          `,
          options: ["$450 now", "$800 in 19 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 19 response:", data.response);
      },
    },
    {
      type: surveyMultiChoice,
      questions: [
        {
          prompt: `
            <p><strong>$475 now</strong></p>
            <p><em>or</em></p>
            <p><strong>$800 in 20 months</strong></p>
          `,
          options: ["$475 now", "$800 in 20 months"],
          required: true,
          horizontal: true,
        },
      ],
      button_label: "Next",
      on_finish: (data) => {
        console.log("Main trial 20 response:", data.response);
      },
    },
  ];

  // Full Timeline
  const timeline = [
    instructionsTrial,
    practiceInstructionsTrial,
    practiceTrial,
    mainTaskInstructionsTrial,
    ...mainTrials,
    goodbyeTrial,
  ];

  // Run the Experiment
  await jsPsych.run(timeline);
}
