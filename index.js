
//testing 1
// var level = require("level");
// var database = level("./db_test");

// database.put("amimal", "tiger", function(err){
//   //This point animal = tiger
// });

//   database.get('amimal', function(err, animal){
//     console.log(animal);
//   });

// database.del('amimal', function(err){
//   database.get('amimal', function(err, animal){
//     console.log(animal);
//   });
// });

// //testing 2
// var level = require("level");
// var database = level("./db_test", { valueEncoding: 'json'});
// database.put('amimal', {type: 'grizzly', name: 'Panther'}, function(err){
//   database.get('amimal', function(err, animal){
//     console.log(animal.type);
//   });
// });

//testing 3
// var level = require("level");
// var sublevel = require('level-sublevel');
// var database = sublevel(level("./db_test", { valueEncoding: 'json'})) ;
//
// var bearsdb = database.sublevel('bears');
// var regionsdb = database.sublevel('regions');

// regionsdb.put('northamerican', {name: 'North American'}, function(err){
//   bearsdb.put('steven', {type: 'grizzly', region: 'northamerican'}, function(err){
//   });
// });

// var bears = [];
// var stream = bearsdb.createReadStream();
// stream.on('data', function(bear){
//   console.log(bear);
// });

// //testing 4
// var level = require("level");
// var sublevel = require('level-sublevel');
// var database = sublevel(level("./db_test", { valueEncoding: 'json'})) ;
//
// var bearsdb = database.sublevel('bears');
// var regionsdb = database.sublevel('regions');
//
// var bears = [];
// var stream = bearsdb.createReadStream();
// stream.on('data', function(bear){
//   regionsdb.get(bear.value.region, function(err, region){
//     bear.value.region =  region;
//     bears.push(bear.value);
//   })
// });
//
// stream.on('close', function(){
//   console.log(bears);
// })

// //testing 5
// var levelup = require("levelup");
// var sublevel = require('level-sublevel');
//
// var database = sublevel(levelup("./db_test", {
//   database: require("leveldown"),
//   valueEncoding: 'json'
// })) ;
//
// var bearsdb = database.sublevel('bears');
// var regionsdb = database.sublevel('regions');
//
// var bears = [];
// var stream = bearsdb.createReadStream();
// stream.on('data', function(bear){
//   regionsdb.get(bear.value.region, function(err, region){
//     bear.value.region =  region;
//     bears.push(bear.value);
//   })
// });
//
// stream.on('close', function(){
//   console.log(bears);
// })

//testing 6
var levelup = require("levelup");
var sublevel = require('level-sublevel');

var database = sublevel(levelup("./db_test", {
  database: require("level-js"),
  valueEncoding: 'json'
})) ;

var bearsdb = database.sublevel('bears');
var regionsdb = database.sublevel('regions');

regionsdb.put('northamerican', {name: 'North American'}, function(err){
  bearsdb.put('steven', {type: 'grizzly', region: 'northamerican'}, function(err){
  });
  // console.log('testing go here');
});

// var bears = [];
// var stream = bearsdb.createReadStream();
// stream.on('data', function(bear){
//   regionsdb.get(bear.value.region, function(err, region){
//     bear.value.region =  region;
//     bears.push(bear.value);
//   })
// });
//
// stream.on('close', function(){
//   console.log(bears);
// })
