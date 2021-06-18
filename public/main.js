const path = require("path");
const fs = require("fs");

// This is not function scoped. It's global.
const dirPath = path.join(__dirname, "../src/content");
const dirPathPages = path.join(__dirname, "../src/pages/content");
// Create an array of objects where each object will be a markdown file that represents a post/page.
let postlist = [];
let pagelist = [];

// Get the posts, by getting each file, push it into an array, parse the metadata and then the content,
// Go into the directory and grab the files
const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (accumulator, element, i) => {
          if (/^---/.test(element)) {
            accumulator.push(i);
          }
          return accumulator;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });
        const date = new Date(metadata.date);
        const timestamp = date.getTime() / 1000;
        post = {
          id: timestamp,
          title: metadata.title ? metadata.title : "No Title Given.",
          author: metadata.author ? metadata.author : "No Author Given.",
          date: metadata.date ? metadata.date : "No date Given.",
          content: content ? content : "No Content Given.",
        };
        postlist.push(post);
        if (i === files.length - 1) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
  return;
  // setTimeout(() => {
  //   console.log(postlist);
  // }, 500);
};

// Get the pages for each posts
// Go into the directory, grab all the files from that directory, open them up one by one
const getPages = () => {
  fs.readdir(dirPathPages, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let page;
      fs.readFile(`${dirPathPages}/${file}`, "utf8", (err, contents) => {
        page = {
          content: contents,
        };
        pagelist.push(page);
        let data = JSON.stringify(pagelist);
        fs.writeFileSync("src/pages.json", data);
      });
    });
  });
  return;
  // setTimeout(() => {
  //   console.log(postlist);
  // }, 500);
};

getPosts();
getPages();
