import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const input = fs.readFileSync(path.join(__dirName, "encrypted.txt"), "utf-8");

const data = input.split(" ");
let ascii = [];

const isCharacterValid = (text) => text.charCodeAt(0) >= 97;
const getAsciiToText = (input) => {
  let i = 0;
  while (i !== input.length) {
    if (isCharacterValid(String.fromCharCode(input.slice(i, i + 2)))) {
      ascii.push(String.fromCharCode(input.slice(i, i + 2)));
      i = i + 2;
    } else if (isCharacterValid(String.fromCharCode(input.slice(i, i + 3)))) {
      ascii.push(String.fromCharCode(input.slice(i, i + 3)));
      i = i + 3;
    }
  }
};

for (let value of data) {
  getAsciiToText(value);
  ascii.push(" ");
}

console.log(ascii.join("").trim());
