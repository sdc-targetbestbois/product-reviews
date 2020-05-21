const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');
var counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for(var i = 0; i  < 10000000; i++) {
      writer.write({
        id: counter++,
        title: faker.random.words(3),
        user: faker.name.firstName(),
        stars: faker.random.number(5),
        reviewText: faker.random.words(6)
      })
    }

  writer.end();
  console.log('done');
}

dataGen();