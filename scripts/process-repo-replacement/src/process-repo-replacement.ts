// import { client } from "@global/github-client";

const processRepoReplacement = () => {
  const replacements = JSON.parse(process.argv[2]);
  console.log("process repo replacement");
  console.log(replacements);
};

processRepoReplacement();
