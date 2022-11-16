import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const input = fs.readFileSync(path.join(__dirName, "users.txt"), "utf-8");

const users = [];
const userSplit = input.split("\n");

let initialIndexUser = 0;
let finishIndexUser;

let usersValid = 0;
let lastPersonValid;

userSplit.forEach((line, i) => {
  if (line === "") {
    finishIndexUser = i;
    users.push(...[userSplit.slice(initialIndexUser, finishIndexUser)]);
    initialIndexUser = finishIndexUser;
  }
});
users.push(...[userSplit.slice(finishIndexUser)]);

users
  .map((user) => user.join(" ").trim())
  .forEach((line) => {
    if (
      line.includes("usr") &&
      line.includes("eme") &&
      line.includes("psw") &&
      line.includes("age") &&
      line.includes("loc") &&
      line.includes("fll")
    ) {
      usersValid++;
      lastPersonValid = line;
    }
  });

console.log(`Total user valids: ${usersValid}`);
console.log(`Last register valid: ${lastPersonValid}`);
