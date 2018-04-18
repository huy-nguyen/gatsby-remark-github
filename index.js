const {transform} = require('remark-github-plugin');
const plugin = ({markdownAST}, options) => transform(options)(markdownAST);

module.exports = plugin;
