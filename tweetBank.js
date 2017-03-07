const _ = require('lodash');

var data = [];

function add (name, content) {
  var id = data.length
  data.push({ name: name, content: content, id: id });
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

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  const names = []
  for (var i = 0; i < fakeFirsts.length; i++){
    names.push(fakeFirsts[i] + " " + fakeLasts[i])
  }
  return randArrayEl(names);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( "Nimit", getFakeTweet() );
}

for (let i = 0; i < 10; i++) {
  module.exports.add( "Tina", getFakeTweet() );
}

for (let i = 0; i < 10; i++) {
  module.exports.add( "Christopher", getFakeTweet() );
}
