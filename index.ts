import { cpus } from 'os'; // Import ES6 style
console.log(cpus());
import chalk from 'chalk'

console.log(chalk.red(JSON.stringify(cpus())))