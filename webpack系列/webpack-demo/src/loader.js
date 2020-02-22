var { getOptions } = require('loader-utils') ;

module.exports = function loader(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);
  console.log('hello, loader')
  return `export default ${ JSON.stringify(source) }`;
};