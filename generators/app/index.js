const Generator = require('yeoman-generator')
const chalk = require('chalk');
const del = require('del');
const generatorConsts = require('../generatorConsts');

class Caterpillar extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  /**
   * Initialization methods (checking current project state, getting configs, etc)
   */
  async initializing () {
    require('./priorities/initializing')(this)
    const deletedPaths = await del([`${generatorConsts.targetFolder}/**`, `!${generatorConsts.targetFolder}/.folder`]);
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
  }

  /**
   * Prompt user for options (where you’d call this.prompt())
   */
  async prompting () {
    const prompts = require('./priorities/prompting')(this)
    this.log(chalk.bold('\nWe need some input from you to setup your project'))
    this.answers = await this.prompt(prompts)
  }

  /**
   * Saving configurations and configure the project (creating .editorconfig files and other metadata files)
   */
  configuring () {
    require('./priorities/configuring')(this)
  }

  /**
   * Write the generator specific files (routes, controllers, etc)
   */
  writing () {
    require('./priorities/writing')(this)
  }

  /**
   * Install (npm...)
   */
  install () {
    require('./priorities/install')(this)
  }

  /**
   *  Called last, cleanup, say good bye, etc
   */
  end () {
    require('./priorities/end')(this)
  }
}

module.exports = Caterpillar