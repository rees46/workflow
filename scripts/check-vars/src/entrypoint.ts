function checkVars(
  sourceVars: Record<string, any>,
  requiredVars: Array<string>,
) {
  requiredVars.forEach((requiredVar) => {
    console.log(sourceVars[requiredVar]);
  });
}

const [sourceVarsStr, requiredVarsStr] = process.argv.slice(2);
const sourceVars = JSON.parse(sourceVarsStr);
const requiredVars = requiredVarsStr.split(",");
checkVars(sourceVars, requiredVars);
