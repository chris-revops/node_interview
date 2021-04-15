import { appendFile } from "fs"

export const writer = (content: string) =>
  appendFile(
    "./output.txt",
    content,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    },
  );
