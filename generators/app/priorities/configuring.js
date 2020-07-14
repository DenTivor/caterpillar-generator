module.exports = async function (gen) {
    const files = require('../settings/config.js')
    const data = {
      project: gen.answers.project,
      name: gen.answers.name,
      email: gen.answers.email,
      year: (new Date().getFullYear()),
    }

    files.forEach((cur) => {
        gen.fs.copyTpl(gen.templatePath(cur.source), gen.destinationPath(cur.target), data)
    })
    
  }