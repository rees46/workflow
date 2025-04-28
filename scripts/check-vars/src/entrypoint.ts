const checkVars = (sourceVars: Record<string, any>, requiredVars: Array<string>): Array<string> => {
  const notExistVars: Array<string> = []
  requiredVars.forEach((requiredVar) => {
    const varValue = sourceVars[requiredVar]
    if (varValue) {
      console.log(`${requiredVar}: ${varValue}`)
    } else {
      console.error(`${requiredVar} does not exist`)
      notExistVars.push(requiredVar)
    }
  })
  return notExistVars
}

const [sourceVarsStr, requiredVarsStr] = process.argv.slice(2)
const sourceVars = JSON.parse(sourceVarsStr)
const requiredVars = requiredVarsStr.split(',')

const result = checkVars(sourceVars, requiredVars)
if (result.length) {
  console.error(`Variables not exist: ${result.join(', ')}`)
  process.exit(1)
}

console.info(`All variables exist`)
process.exit(0)
