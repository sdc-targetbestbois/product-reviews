var chalk = require('chalk')
const fs = require('fs');
var ndjson = require( "ndjson" );
var transformStream = ndjson.stringify();
var outputStream =transformStream.pipe( fs.createWriteStream( __dirname + "/dataTest.ndjson" ));


var faker = require('faker');
var counter = 0;




//generating random length array and filling using a set schema:
// const reviewSchema = {
//   user: faker.name.firstName(),
//   title: faker.random.words(3),
//   stars: faker.random.number(5),
//   reviewText:faker.lorem.sentence(6)
// }
// generator
const generator = ( min = 1, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randoLength = Math.floor(Math.random() * (max - min)) + min;
  return Array.from({length: randoLength
  }).map((val,index) =>
  ({
    user: faker.name.firstName(),
    title: faker.random.words(1),
    stars: (Math.floor(Math.random() * (4 - 0)) + 0),
    reviewText:faker.lorem.sentence(4)
  }
  ));
};

// generate random clients between 1 and 5 units, based on schema defined above
const data = () => {return generator(1, 5)};





const dataGen = (data) => {

  for(var i = 0; i  < 10000000; i++) {
    let newArr = data();

    transformStream.write({
      id: counter++,
      reviews: newArr
      })
      console.log(i)
    }

    transformStream.end();
  outputStream.on('finish',function handleFinish() {
    console.log( chalk.blue( "ndjson serialization complete!" ) );
		console.log( "+ + + + + + + + + + + + + + + + + + +" );
  });

}

dataGen(data);

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //


// Since the stream actions are event-driven (and asynchronous), we have to wait until
// our output stream has been closed before we can try reading it back in.
// outputStream.on(
// 	"finish",
// 	function handleFinish() {

// 		// When we read the file back into memory, ndjson will stream, buffer, and split
// 		// the content based on the newline character. It will then parse each newline-
// 		// delimited value as a JSON object and emit it from the TRANSFORM stream.
// 		var inputStream = fs.createReadStream( __dirname + "/dataTest.ndjson" );
// 		var transformStream = inputStream.pipe( ndjson.parse() );

// 		transformStream
// 			// Each "data" event will emit one item from our original record-set.
// 			.on(
// 				"data",
// 				function handleRecord( data ) {

// 					console.log( chalk.red( "Record (event):" ), data );

// 				}
// 			)

// 			// Once ndjson has parsed all the input, let's indicate done.
// 			.on(
// 				"end",
// 				function handleEnd() {

// 					console.log( "- - - - - - - - - - - - - - - - - - - - - - -" );
// 					console.log( chalk.green( "ndjson parsing complete!" ) );

// 				}
// 			)
// 		;

// 	}
// );