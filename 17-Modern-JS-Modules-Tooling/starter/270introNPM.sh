# Introduction to NPM
npm -v # Check npm version
npm init # Initialise in project -> Creates package.json
npm install {packageName} # Install package
npm i {packageName} # Install package -> adds version to package.json and in node_modules
# Do not include the node_modules to git or sharing with other developers
npm i
npm install # looks into package.json and install all dependencies

# Parcel
npm i parcel --save-dev
# --save-dev: a tool we need to build our dependencies but not a dependency we include in our code: use for development

npx parcel {entrypoint}
npx parcel index.html

npm run {script} # Run script in package.json file