import https from "https";
import { pipeline } from "stream/promises";
import path from "path";
import fs from "fs";

export async function download(url) {
  return new Promise(async (onSuccess) => {
    https.get(url, async (res) => {
      let fileName = "images/" + new Date().getTime() + ".png";
      console.log("filename:", fileName);
      const fileWriteStream = fs.createWriteStream(fileName, {
        autoClose: true,
        flags: "w",
      });
      await pipeline(res, fileWriteStream);
      onSuccess("success");
    });
  });
}
