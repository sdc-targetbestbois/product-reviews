var chalk = require('chalk')
const fs = require('fs');
var csvwriter = require( "csv-write-stream" );
var writer = csvwriter();
var faker = require('faker');
var counter = 0;


const dataGen = () => {
  writer.pipe(fs.createWriteStream('postgr.csv'));
  for(var i = 0; i  < 10000000; i++) {
    writer.write({
      id: counter++,
      user: faker.name.firstName(),
      title: faker.random.words(1),
      review: faker.random.words(5),
      stars: 2
      })
      console.log(i)
    }

    writer.end( (err) => {
      if(err){
        console.log(chalk.red("failed to finish writestream!"))
        console.log( "- - - - - - - - - - - - - - - - - - -" );
      }else{
        console.log( chalk.blue( "serialization complete!" ) );
      console.log( "+ + + + + + + + + + + + + + + + + + +" );
      }
      });
  };

dataGen();

