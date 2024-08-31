#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";
import client from "../src/client.js";
import server from "../src/server.js";

console.log(
  chalk.yellow(figlet.textSync("Broadcast-Server", {horizontalLayout : 'full'}))
)
program.version("1.0.0").description("My Node CLI");

program.action(() => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option using arrow keys:",
        choices: ["Create Server","Create Client"]
      },
    ])
    .then((answers) => {
      if (answers.choice === 'Create Server') {
        server();
      } else {
        client();
      }
    });
});

program.parse(process.argv);