import fs from "fs";
import path from "path";

const logFile = path.join("logs", "app.log");

export function log(message) {
  const time = new Date().toISOString();
  const entry = `[${time}] ${message}\n`;
  fs.appendFileSync(logFile, entry);
}

export function error(message) {
  const time = new Date().toISOString();
  const entry = `[${time}] ERROR: ${message}\n`;
  fs.appendFileSync(logFile, entry);
}
