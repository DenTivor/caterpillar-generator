const generatorConsts = require('../../generatorConsts');

module.exports = [
    {
      source: 'LICENSE',
      target: `${generatorConsts.targetFolder}/LICENSE`
    },
    {
      source: 'README.md',
      target: `${generatorConsts.targetFolder}/README.md`
    }
  ]