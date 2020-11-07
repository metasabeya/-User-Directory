const tailwindcss = require('tailwind.css');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ]
};