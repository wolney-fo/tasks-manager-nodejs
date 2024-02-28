import { parse } from "csv-parse";
import fs from "node:fs";

const filePath = new URL("./today-tasks.csv", import.meta.url);

const stream = fs.createReadStream(filePath);

const csvParser = parse({
  delimiter: ",",
  skipEmptyLines: true,
  fromLine: 2,
});

async function importCSV() {
  const tasks = stream.pipe(csvParser);

  for await (const line of tasks) {
    const [title, description] = line;

    await fetch("http://localhost:3333/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
  }

  console.log("Imported data successfully!");
}

importCSV();

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
