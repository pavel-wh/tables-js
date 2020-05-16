# Excel at JS

## Requirements in project

* Webpack (imports/exports)  

⋅⋅⋅Babel  
⋅⋅⋅SCSS  
⋅⋅⋅⋅⋅⋅2 Modes:  
⋅⋅⋅⋅⋅⋅⋅⋅⋅- Dev  
⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅Dev Server, SourceMaps, ESLint, Not Minified JS & CSS  
⋅⋅⋅⋅⋅⋅⋅⋅⋅- Prod  
⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅Minified and Concatenated Code  

* Git  

⋅⋅⋅Branches:  
⋅⋅⋅⋅⋅⋅Production  
⋅⋅⋅⋅⋅⋅⋅⋅⋅1.0.0
⋅⋅⋅⋅⋅⋅Development  
⋅⋅⋅⋅⋅⋅⋅⋅⋅1.0.1

## Steps in project

### 1. Create project folder and init project

`mkdir excel_js`
`cd excel_js`
`npm init -y`

### 2. Git init commands  

`echo "# git" >> README.md`
`git init`
`git add README.md`
`git commit -m "init repo"`
`git remote add origin https://github.com/pavel-wh/excel_js.git`
`git push -u origin master`
`git checkout -b "webpack"` - create new branch and switch to it  

### 3. Install dependencies

`npm install --save-dev webpack webpack-cli`

### 4. Install webpack plugins

`npm install --save-dev html-webpack-plugin clean-webpack-plugin copy-webpack-plugin mini-css-extract-plugin`

### 5. Add webpack loaders

`npm install --save-dev css-loader sass-loader sass babel-loader @babel/core @babel/preset-env`
`npm install --save @babel/polyfill`

### 6. Configure assembling environment

`npm install --save-dev cross-env webpack-dev-server`

### 7. Add ESLint

`npm install --save-dev eslint eslint-loader babel-eslint eslint-config-google`
