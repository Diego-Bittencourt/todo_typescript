//in the package.json file, I made this changes:
//this will compile typescript into JS automatically
//"scripts":
// "start": "tsc --watch"
// "test": "echo \"Error: no test specified\" && exit 1"

//to output the script.js file in a specfic folder automatically, I changed
//"outDir": "./dest"


console.log("hello teste");

//after installin the uuid library through npm i uuid
import { v4 as uuidV4 } from "uuid";
//the import above doesn't work because when it's converted to JS, it doesn't import properly
//to import libraries to TS projects,I should use bundlers.

//Change the module, inside the tsconfig.json from commonjs to es6, to use import/export syntax.
//But still, it gives error. The recommended way is to use bundler. I'll delete all files and use
//snow pack bundler.




