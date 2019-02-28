let sass = require('node-sass');

let result = sass.renderSync({
    file: './scss/main.scss',
    outFile: './prod/css/main.css'
});

if(result) {
    console.log('Process complete: ', result);
}