const chalk = require('chalk');

/**
 * initialization methods: checking current project state, getting configs, etc)
 * @return void
 */
module.exports = function (gen) {
    gen.log(chalk.bold.blue('\nWelcome to Caterpillar yeoman, a simple generator to start your web projects!'))
}