const chalk = require("chalk");
const boxen = require("boxen");

const formattedName = require("./helpers/formatName");

// Define options for Boxen

const card = ({ name, fields, work, designation, twitter, github, linkedin, web }) => {
  const options = {
    padding: 1,
    margin: 1,
    borderStyle: "classic",
  };

  const labels = {
    Work: chalk.white.bold("   Title:"),
    Twitter: chalk.white.bold(" Twitter:"),
    GitHub: chalk.white.bold("  GitHub:"),
    LinkedIn: chalk.white.bold("LinkedIn:"),
    Web: chalk.white.bold("     Web:"),
    Card: chalk.white.bold("    Card:"),
  };

  const data = {
    name: chalk.white(formattedName(name)),
    handle: chalk.cyan(work),
    work: chalk.white(designation),
    twitter: chalk.cyan(twitter),
    github: chalk.cyan(github),
    linkedin: chalk.cyan(linkedin),
    web: chalk.cyan(web),
    // npx: chalk.white("npx bitandbang"),
  };

  const newline = "\n";
  const heading = `${data.name} ${data.handle}`;
  const working = `${labels.Work}  ${data.work}`;
  const twittering = `${labels.Twitter}  ${data.twitter}`;
  const githubing = `${labels.GitHub}  ${data.github}`;
  const linkedining = `${labels.LinkedIn}  ${data.linkedin}`;
  const webing = `${labels.Web}  ${data.web}`;
  const carding = `${labels.Card}  ${data.npx}`;
  const width = "                                            ";

  // Put all our output together into a single variable so we can use boxen effectively
  const output =
    heading +
    newline +
    newline +
    working +
    newline +
    twittering +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    width;

  console.log(chalk.green(boxen(output, options)));
};

module.exports = card;
