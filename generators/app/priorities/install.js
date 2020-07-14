const chalk = require('chalk')

module.exports = function (gen) {
    // https://github.com/marcol/generator-uncomplicated/blob/master/generators/app/priorities/install.js
    gen.log(chalk.bold('\nInstalling dependencies...'))
}