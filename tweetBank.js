const _ = require('lodash');

var data = []

function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
  add: add,
  list: list,
  find: find
};


// console.log(list());
// console.log(find.call(data, function(user) {
//   // console.log(data);
//   return user.name[0] === "N";
//   // return this.name.slice(0,5) === 'Nimit';
// }))
