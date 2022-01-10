const fs = require("fs");
const readStream = fs.createReadStream("data.txt");
const writeStream = fs.createWriteStream("data2.txt");
readStream.on("data", (chunk) => {
  console.log("newchunk");
  console.log(chunk.toString());
  writeStream.write("\nNEWDATA\n");
  writeStream.write(chunk);
});

readStream.pipe(writeStream);
