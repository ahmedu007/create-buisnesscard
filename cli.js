#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const inquirer = require("inquirer");
const card = require("./card");

const QUESTIONS = [
  {
    name: "name",
    type: "input",
    message: "Please enter your full name.",
    validate: input => {
      if (input !== "") return true;
      else return "You cannot leave your name empty";
    },
  },
  {
    name: "work",
    type: "input",
    message: "Please enter your company name.",
  },
  {
    name: "designation",
    type: "input",
    message: "Please enter your job title",
  },
  {
    name: "twitter",
    type: "input",
    message: "Please enter your twitter link",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter your GitHub link",
  },
  {
    name: "linkedin",
    type: "input",
    message: "Please enter your LinkedIn link",
  },
  {
    name: "web",
    type: "input",
    message: "Do you have a personal site?",
  },
];

inquirer
  .prompt(QUESTIONS)
  .then(answers => {
    card(answers);
    return;
  })
  .catch(e => console.error(e));
